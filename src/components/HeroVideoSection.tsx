const VIDEO_ID = "_yAwl3LMnLI";

const HeroVideoSection = () => {
  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&modestbranding=1&rel=0&playsinline=1`;

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-background">
      <iframe
        src={src}
        title="Zooty"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </section>
  );
};

export default HeroVideoSection;