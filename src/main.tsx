import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Prevent the browser from restoring the previous scroll offset on refresh /
// back-forward nav — pages (esp. /robotic-actuators, which measures scroll
// position to set up its pinned 3D-model ScrollTrigger) must always start at top.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
