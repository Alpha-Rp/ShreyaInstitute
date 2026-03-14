import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import PlacementsPage from "./pages/PlacementsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
