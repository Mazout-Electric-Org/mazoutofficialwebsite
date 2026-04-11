import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 11, 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and other contact details.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about products, services, and events.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@mazoutelectric.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
