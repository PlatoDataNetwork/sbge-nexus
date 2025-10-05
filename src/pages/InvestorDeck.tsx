import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { logActivity } from "@/lib/activityTracker";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const InvestorDeck = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.2);
  const [pdfData, setPdfData] = useState<Uint8Array | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const mainCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      }
      setSession(session);
      setLoading(false);
      
      // Log deck view
      if (session?.user) {
        logActivity(session.user.id, "deck_view", {
          page: "investor_deck",
          timestamp: new Date().toISOString()
        });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const res = await fetch('/documents/investor-deck.pdf', { cache: 'no-store' });
        const arrayBuffer = await res.arrayBuffer();
        setPdfData(new Uint8Array(arrayBuffer));
      } catch (e) {
        console.error('Failed to load PDF', e);
      }
    };
    loadPdf();
  }, []);

  // Load PDF document with pdf.js
  useEffect(() => {
    if (!pdfData) return;
    const loadingTask = pdfjs.getDocument({ data: pdfData });
    let cancelled = false;

    loadingTask.promise
      .then((doc: any) => {
        if (cancelled) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
      })
      .catch((e: any) => console.error('PDF load error', e));

    return () => {
      cancelled = true;
      try { loadingTask.destroy(); } catch {}
    };
  }, [pdfData]);

  // Render current page to main canvas
  useEffect(() => {
    if (!pdfDoc || !mainCanvasRef.current) return;

    let cancelled = false;
    (async () => {
      const page = await pdfDoc.getPage(pageNumber);
      const viewport = page.getViewport({ scale });
      const canvas = mainCanvasRef.current!;
      const context = canvas.getContext('2d');
      if (!context) return;
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const renderTask = page.render({ canvasContext: context, viewport });
      await renderTask.promise;
      if (cancelled) return;
    })();

    return () => { cancelled = true; };
  }, [pdfDoc, pageNumber, scale]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPage = (page: number) => {
    setPageNumber(page);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-full mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/investor-portal")}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Investor Portal
              </Button>
              <div>
                <h1 className="text-xl font-semibold">StorageBlue Growth Fund - Investor Deck</h1>
                <p className="text-sm text-muted-foreground">
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={previousPage} disabled={pageNumber <= 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextPage} disabled={pageNumber >= numPages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button variant="outline" size="icon" onClick={handleZoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[60px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button variant="outline" size="icon" onClick={handleZoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button variant="default" asChild>
                <a href="/documents/investor-deck.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Thumbnails and Viewer */}
      <div className="flex-1 flex overflow-hidden">
        {/* Thumbnail Sidebar */}
        <div className="w-48 border-r bg-muted/20">
          <ScrollArea className="h-full">
            <div className="p-2 space-y-2">
              {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
                <Card
                  key={`thumb_${index + 1}`}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    pageNumber === index + 1 ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => goToPage(index + 1)}
                >
                  <div className="p-2">
                    {pdfDoc ? (
                      <Thumbnail pdf={pdfDoc} pageNumber={index + 1} />
                    ) : (
                      <div className="flex items-center justify-center h-24 bg-muted">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      </div>
                    )}
                    <p className="text-xs text-center mt-1 text-muted-foreground">
                      {index + 1}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Viewer */}
        <div className="flex-1 overflow-auto bg-muted/10">
          <div className="flex items-center justify-center min-h-full p-8">
            <div className="bg-white shadow-2xl">
              {pdfDoc ? (
                <div className="p-4">
                  <canvas ref={mainCanvasRef} className="block max-w-full h-auto" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[600px] w-[800px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                  <p className="text-muted-foreground">Loading presentation...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Thumbnail = ({ pdf, pageNumber }: { pdf: any; pageNumber: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!pdf || !canvasRef.current) return;
    let cancelled = false;
    (async () => {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 0.22 });
      const canvas = canvasRef.current!;
      const context = canvas.getContext('2d');
      if (!context) return;
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const renderTask = page.render({ canvasContext: context, viewport });
      await renderTask.promise;
      if (cancelled) return;
    })();
    return () => { cancelled = true; };
  }, [pdf, pageNumber]);

  return <canvas ref={canvasRef} className="w-full h-auto bg-white" />;
};

export default InvestorDeck;
