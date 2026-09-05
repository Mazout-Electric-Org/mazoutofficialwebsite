const MissionSection = () => {
  return (
    <section id="mission" className="relative border-t border-border py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-6">Our Mission</p>
        <h2 className="text-3xl lg:text-5xl font-light leading-[1.15] mb-10">
          Building the hardware foundation for the Physical AI era.
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
          From robotic actuators and intelligent electronics to autonomous vehicles and developer
          platforms, our mission is to create technologies that make building robots faster, more
          affordable, and accessible to innovators everywhere.
        </p>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
          We envision a future where intelligence is no longer confined to software, but embodied
          in machines that move, build, assist, explore, and work alongside humanity.
        </p>
        <p className="text-lg lg:text-xl text-foreground font-light">
          Because the future is not only intelligent.
          <br />
          It is physical.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
