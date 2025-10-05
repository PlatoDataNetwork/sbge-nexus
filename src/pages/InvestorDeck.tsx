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
    // Do not pre-set session; wait for INITIAL_SESSION to avoid flashes

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
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={previousPage}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[80px] text-center">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl font-semibold whitespace-nowrap">StorageBlue Growth Fund - Investor Deck</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => navigate("/investor-portal")}
              >
                Back to Investor Portal
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
              </Button>
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

      {/* Main Content - PDF Viewer with Thumbnails */}
      <div className="flex-1 overflow-hidden bg-muted/10 flex">
        {/* Thumbnail Sidebar */}
        <div className="w-48 border-r bg-card overflow-y-auto p-2">
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">Pages</div>
          <Document file={pdfFile}>
            {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
              <button
                key={`thumb_${index + 1}`}
                onClick={() => setPageNumber(index + 1)}
                className={`mb-2 w-full border-2 rounded transition-all hover:border-primary ${
                  pageNumber === index + 1 ? 'border-primary bg-primary/5' : 'border-border'
                }`}
              >
                <Page
                  pageNumber={index + 1}
                  width={160}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                <p className="text-xs text-center py-1 font-medium">Page {index + 1}</p>
              </button>
            ))}
          </Document>
        </div>

        {/* Main PDF View */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-6">
            <Card className="p-4">
              <div className="flex flex-col items-center">
                <Document
                  file={pdfFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="w-full"
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(window.innerWidth - 300, 800)}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDeck;
