import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index.tsx";
import Logistics from "./pages/Logistics.tsx";
import Patrolling from "./pages/Patrolling.tsx";
import Taxi from "./pages/Taxi.tsx";
import Vision from "./pages/Vision.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Blogs from "./pages/Blogs.tsx";
import Gallery from "./pages/Gallery.tsx";
import InvestorDeck from "./pages/InvestorDeck.tsx";
import TrainingPlatform from "./pages/TrainingPlatform.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Cookies from "./pages/Cookies.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/patrolling" element={<Patrolling />} />
          <Route path="/taxi" element={<Taxi />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/investor-deck" element={<InvestorDeck />} />
          <Route path="/training-platform" element={<TrainingPlatform />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
