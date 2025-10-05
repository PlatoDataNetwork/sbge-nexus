import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Strategy from "./pages/Strategy";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Innovation from "./pages/Innovation";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/Dashboard";
import InvestorPortal from "./pages/InvestorPortal";
import InvestorDeck from "./pages/InvestorDeck";
import InvestorQuestionnaire from "./pages/InvestorQuestionnaire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/market" element={<Market />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/profile/:slug" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="/investor-deck" element={<InvestorDeck />} />
              <Route path="/investor-questionnaire" element={<InvestorQuestionnaire />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
