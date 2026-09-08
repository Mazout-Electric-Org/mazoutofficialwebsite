import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index.tsx";

// Routes below are code-split so visiting the home page doesn't pull in every
// other page's dependencies (e.g. the robotic actuators page's Three.js/GSAP/3D
// model chain), and so navigation to a heavy page shows a fallback instead of a
// blank screen while its chunk downloads.
const Logistics = lazy(() => import("./pages/Logistics.tsx"));
const Patrolling = lazy(() => import("./pages/Patrolling.tsx"));
const Taxi = lazy(() => import("./pages/Taxi.tsx"));
const Vision = lazy(() => import("./pages/Vision.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const Blogs = lazy(() => import("./pages/Blogs.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));
const InvestorDeck = lazy(() => import("./pages/InvestorDeck.tsx"));
const TrainingPlatform = lazy(() => import("./pages/TrainingPlatform.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Cookies = lazy(() => import("./pages/Cookies.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const RoboticActuators = lazy(() => import("./pages/RoboticActuators.tsx"));
const Shop = lazy(() => import("./pages/Shop.tsx"));
const BatteryManufacturingAutopilot = lazy(() => import("./pages/BatteryManufacturingAutopilot.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/robotic-actuators" element={<RoboticActuators />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/battery-manufacturing-autopilot" element={<BatteryManufacturingAutopilot />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
