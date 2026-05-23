import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Minus, ArrowUpRight, Zap } from "lucide-react";
import zootyRender from "@/assets/zooty-render-hero.png";

const TrainingPlatformPopup = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("zooty_training_popup_dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const t = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    setDismissed(true);
    sessionStorage.setItem("zooty_training_popup_dismissed", "1");
  };

  if (dismissed && !open) return null;
  if (!open) return null;

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/95 backdrop-blur px-4 py-3 text-sm text-foreground shadow-lg hover:border-primary transition-colors"
        aria-label="Expand Zooty training platform popup"
      >
        <Zap size={14} className="text-primary" />
        <span className="uppercase tracking-[0.18em] text-xs">Experience Zooty</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-3rem)] max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-background/95 backdrop-blur shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
          <button
            onClick={() => setMinimized(true)}
            aria-label="Minimize"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={close}
            aria-label="Close"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden bg-card">
          <img src={zootyRender} alt="Zooty training and development platform" className="h-full w-full object-cover" />
        </div>

        <div className="relative p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-primary mb-2">New stock — June</p>
          <h3 className="font-serif text-2xl leading-tight mb-2">
            Drive the future. <span className="text-primary">Build on Zooty.</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A road-ready EV platform with drive-by-wire, full sensor suite, and an open SDK —
            go from idea to on-road deployment in weeks. Reserve a unit and talk to our team today.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/training-platform"
              onClick={close}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Experience Zooty <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={close}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlatformPopup;