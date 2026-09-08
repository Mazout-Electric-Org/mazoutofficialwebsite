import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import trainingImg from "@/assets/Render1.png";
import batteryAutomationImg from "@/assets/buildo-cells.jpg";

const products = [
  {
    category: "Manufacturing",
    title: "Battery Automation",
    image: batteryAutomationImg,
    href: "/battery-manufacturing-autopilot",
  },
  {
    category: "Education",
    title: "SDV Training Platform",
    image: trainingImg,
    href: "/training-platform",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative border-t border-border py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-14 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Solutions</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-[1.05]">
            Two platforms. <span className="text-muted-foreground">One mission.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              to={product.href}
              className="group block rounded-2xl border border-border overflow-hidden bg-card/30 hover:border-primary/40 transition-colors duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              </div>
              <div className="p-6 lg:p-8 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-light mt-1 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
