import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { logActivity } from "@/lib/activityTracker";

// Configure PDF.js worker (Vite-friendly URL import)
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc as unknown as string;

const InvestorDeck = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.2);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // Prime local state; final redirect happens on INITIAL_SESSION to avoid flicker
      setSession(session);
      // Do not setLoading here; wait for INITIAL_SESSION event
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION') {
        // Finish auth hydration without redirecting to avoid flicker
        setSession(session ?? null);
        setLoading(false);
        if (session?.user) {
          logActivity(session.user.id, "deck_view", {
            page: "investor_deck",
            timestamp: new Date().toISOString(),
          });
        }
        return;
      }

      if (event === 'SIGNED_OUT') {
        setSession(null);
        setLoading(false);
        return;
      }

      // TOKEN_REFRESHED, USER_UPDATED, etc.
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  
  const pdfFile = "/documents/investor-deck.pdf";

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

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md p-6 text-center">
          <h1 className="text-2xl font-semibold mb-2">Sign in required</h1>
          <p className="text-muted-foreground mb-4">Please sign in to view the investor deck.</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => navigate("/auth")}>Go to Sign In</Button>
            <Button variant="outline" onClick={() => navigate("/investor-portal")}>Back</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <section className="pt-24 pb-6 bg-gradient-to-b from-muted/50 to-transparent border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Investor Presentation</h1>
          <p className="mt-2 text-muted-foreground">Use the tray to navigate pages, zoom, and download the deck.</p>
        </div>
      </section>
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
              {numPages > 0 && (
                <Document
                  file={pdfFile}
                  loading={
                    <div className="flex items-center justify-center p-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    </div>
                  }
                >
                  {Array.from({ length: numPages }).map((_, index) => (
                    <Card
                      key={`thumb_${index + 1}`}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        pageNumber === index + 1 ? 'ring-2 ring-primary shadow-lg' : ''
                      }`}
                      onClick={() => goToPage(index + 1)}
                    >
                      <div className="p-2">
                        {Math.abs((index + 1) - pageNumber) <= 4 ? (
                          <Page
                            pageNumber={index + 1}
                            width={160}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-24 bg-muted">
                            <div className="h-6 w-6 rounded-full border-b-2 border-primary animate-spin" />
                          </div>
                        )}
                        <p className="text-xs text-center mt-1 text-muted-foreground">
                          {index + 1}
                        </p>
                      </div>
                    </Card>
                  ))}
                </Document>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Main Viewer */}
        <div className="flex-1 overflow-auto bg-muted/10">
          <div className="flex items-center justify-center min-h-full p-8">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(err) => { console.error('PDF load error', err); }}
                loading={
                  <div className="flex flex-col items-center justify-center h-[600px] w-[800px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <p className="text-muted-foreground">Loading presentation...</p>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center h-[600px] w-[800px]">
                    <p className="text-destructive mb-4">Failed to load PDF</p>
                    <Button onClick={() => window.location.reload()}>Retry</Button>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  onRenderError={(err) => { console.error('Page render error', err); }}
                  onRenderSuccess={() => { /* page rendered */ }}
                />
              </Document>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDeck;
