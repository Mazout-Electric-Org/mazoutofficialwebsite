import { Link } from "react-router-dom";
import zootyNight from "@/assets/Zooty.jpg";
import teleopDashboard from "@/assets/dashboard_stream.png";
import zootyTeam from "@/assets/Zooty_team.jpg";

const previewImages = [
  { src: zootyNight, alt: "Zooty electric vehicle prototype" },
  { src: teleopDashboard, alt: "Teleoperation dashboard live feed" },
  { src: zootyTeam, alt: "Zooty team" },
];

const GallerySection = () => {
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Gallery</p>
            <h2 className="text-4xl lg:text-5xl font-light leading-[1.05]">Behind the build.</h2>
          </div>
          <Link
            to="/gallery"
            className="hidden sm:inline-flex text-primary text-sm items-center gap-1.5 hover:gap-3 transition-all duration-300 whitespace-nowrap"
          >
            View full gallery <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {previewImages.map((img) => (
            <Link
              key={img.alt}
              to="/gallery"
              className="group block aspect-square rounded-xl overflow-hidden border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </Link>
          ))}
        </div>

        <Link
          to="/gallery"
          className="sm:hidden mt-8 inline-flex text-primary text-sm items-center gap-1.5 hover:gap-3 transition-all duration-300"
        >
          View full gallery <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
