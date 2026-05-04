import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HeroVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-background">
      <video
        ref={videoRef}
        src="/zooty-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-border/40 text-foreground hover:bg-background/60 transition-colors"
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </section>
  );
};

export default HeroVideoSection;