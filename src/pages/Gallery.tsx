import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import render1 from "@/assets/Render1.png";
import zootyHero from "@/assets/zooty-hero.png";
import zootyLanding from "@/assets/zooty-landing-vehicle.png";
import zootyRender from "@/assets/zooty-render-hero.png";
import patrollingCover from "@/assets/blog-patrolling-cover.png";
import patrollingCoverNew from "@/assets/blog-patrolling-cover-new.png";
import patrollingCollage from "@/assets/blog-patrolling-collage.png";
import patrollingRoute from "@/assets/blog-patrolling-route.png";
import logisticsApp from "@/assets/logistics-app.jpg";
import patrollingApp from "@/assets/patrolling-app.jpg";
import taxiApp from "@/assets/taxi-app.jpg";
import sdvArchitecture from "@/assets/sdv-architecture.png";

const images = [
  { src: zootyHero, caption: "Zooty — Hero" },
  { src: zootyRender, caption: "Zooty Render" },
  { src: zootyLanding, caption: "Zooty Landing Vehicle" },
  { src: render1, caption: "Industrial Render" },
  { src: patrollingCoverNew, caption: "Patrolling — YSC Delhi" },
  { src: patrollingCover, caption: "Patrolling Cover" },
  { src: patrollingCollage, caption: "Patrolling Collage" },
  { src: patrollingRoute, caption: "Patrolling Route" },
  { src: logisticsApp, caption: "Logistics Application" },
  { src: patrollingApp, caption: "Patrolling Application" },
  { src: taxiApp, caption: "Taxi Application" },
  { src: sdvArchitecture, caption: "SDV Architecture" },
];

const PAGE_SIZE = 10;

const Gallery = () => {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const totalPages = Math.ceil(images.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = images.slice(start, start + PAGE_SIZE);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  const lightboxNext = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  const lightboxPrev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-baseline justify-between border-b border-border pb-8 mb-16">
            <h1 className="text-foreground font-sans text-5xl font-light lg:text-6xl">
              Gallery
            </h1>
            <span className="text-secondary-foreground font-semibold font-sans text-2xl lg:text-3xl">
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {visible.map((img, i) => {
              const globalIndex = start + i;
              return (
                <motion.button
                  key={globalIndex}
                  onClick={() => setLightbox(globalIndex)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group aspect-square overflow-hidden rounded-xl border border-border bg-muted/20 relative"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-foreground text-xs">{img.caption}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-border mt-24 pt-8">
            <button
              onClick={prev}
              disabled={page === 0}
              className="text-muted-foreground font-sans text-sm uppercase tracking-[0.22em] hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <span className="text-muted-foreground font-sans text-xs uppercase tracking-[0.22em]">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={next}
              disabled={page >= totalPages - 1}
              className="text-muted-foreground font-sans text-sm uppercase tracking-[0.22em] hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-6 right-6 text-foreground hover:text-secondary-foreground"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-4 lg:left-10 text-foreground hover:text-secondary-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].caption}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              <p className="text-muted-foreground text-sm">
                {images[lightbox].caption}
              </p>
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-4 lg:right-10 text-foreground hover:text-secondary-foreground"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;