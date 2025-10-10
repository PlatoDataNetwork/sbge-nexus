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
import CaseStudies from "./pages/CaseStudies";
import CurrentPortfolio from "./pages/CurrentPortfolio";
import FundOverview from "./pages/FundOverview";
import ScheduleCall from "./pages/ScheduleCall";
import EmailPreview from "./pages/EmailPreview";
import NotFound from "./pages/NotFound";
import WinstonMa from "./pages/profiles/WinstonMa";
import MollyFord from "./pages/profiles/MollyFord";
import ConradRoncati from "./pages/profiles/ConradRoncati";
import NicholasHorner from "./pages/profiles/NicholasHorner";
import WarrenDiamond from "./pages/profiles/WarrenDiamond";
import LarryNamer from "./pages/profiles/LarryNamer";
import FrankZisa from "./pages/profiles/FrankZisa";
import JustinHorowitz from "./pages/profiles/JustinHorowitz";
import AlanMruvka from "./pages/profiles/AlanMruvka";
import BarryGosin from "./pages/profiles/BarryGosin";
import PaulMassey from "./pages/profiles/PaulMassey";
import ScottRechler from "./pages/profiles/ScottRechler";
import JohnCalipari from "./pages/profiles/JohnCalipari";
import ByronScott from "./pages/profiles/ByronScott";
import WladimirKlitschko from "./pages/profiles/WladimirKlitschko";
import RogerMasonJr from "./pages/profiles/RogerMasonJr";
import DonaldDiFrancesco from "./pages/profiles/DonaldDiFrancesco";
import RaymondLesniak from "./pages/profiles/RaymondLesniak";
import GualbertoMedina from "./pages/profiles/GualbertoMedina";
import RinaldoDArgenio from "./pages/profiles/RinaldoDArgenio";
import PaulWeiner from "./pages/profiles/PaulWeiner";
import NawafAlthari from "./pages/profiles/NawafAlthari";
import BrianCury from "./pages/profiles/BrianCury";
import KeryDavis from "./pages/profiles/KeryDavis";
import DavidFeldman from "./pages/profiles/DavidFeldman";
import StevenGreener from "./pages/profiles/StevenGreener";
import RamsesIshak from "./pages/profiles/RamsesIshak";
import MichaelSheresky from "./pages/profiles/MichaelSheresky";

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
              <Route path="/profile/alan-mruvka" element={<AlanMruvka />} />
              <Route path="/profile/barry-gosin" element={<BarryGosin />} />
              <Route path="/profile/paul-massey" element={<PaulMassey />} />
              <Route path="/profile/scott-rechler" element={<ScottRechler />} />
              <Route path="/profile/john-calipari" element={<JohnCalipari />} />
              <Route path="/profile/byron-scott" element={<ByronScott />} />
              <Route path="/profile/wladimir-klitschko" element={<WladimirKlitschko />} />
              <Route path="/profile/roger-mason-jr" element={<RogerMasonJr />} />
              <Route path="/profile/donald-difrancesco" element={<DonaldDiFrancesco />} />
              <Route path="/profile/raymond-lesniak" element={<RaymondLesniak />} />
              <Route path="/profile/gualberto-medina" element={<GualbertoMedina />} />
              <Route path="/profile/rinaldo-dargenio" element={<RinaldoDArgenio />} />
              <Route path="/profile/paul-weiner" element={<PaulWeiner />} />
              <Route path="/profile/nawaf-althari" element={<NawafAlthari />} />
              <Route path="/profile/brian-cury" element={<BrianCury />} />
              <Route path="/profile/kery-davis" element={<KeryDavis />} />
              <Route path="/profile/david-feldman" element={<DavidFeldman />} />
              <Route path="/profile/steven-greener" element={<StevenGreener />} />
              <Route path="/profile/ramses-ishak" element={<RamsesIshak />} />
              <Route path="/profile/michael-sheresky" element={<MichaelSheresky />} />
              <Route path="/profile/winston-ma" element={<WinstonMa />} />
              <Route path="/profile/molly-ford" element={<MollyFord />} />
              <Route path="/profile/conrad-roncati" element={<ConradRoncati />} />
              <Route path="/profile/nicholas-horner" element={<NicholasHorner />} />
              <Route path="/profile/warren-diamond" element={<WarrenDiamond />} />
              <Route path="/profile/larry-namer" element={<LarryNamer />} />
              <Route path="/profile/frank-zisa" element={<FrankZisa />} />
              <Route path="/profile/justin-horowitz" element={<JustinHorowitz />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="/investor-deck" element={<InvestorDeck />} />
              <Route path="/investor-questionnaire" element={<InvestorQuestionnaire />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/current-portfolio" element={<CurrentPortfolio />} />
              <Route path="/fund-overview" element={<FundOverview />} />
              <Route path="/schedule-call" element={<ScheduleCall />} />
              <Route path="/email-preview" element={<EmailPreview />} />
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
