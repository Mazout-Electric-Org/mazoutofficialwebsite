import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 11, 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Use License</h2>
            <p>Permission is granted to temporarily access and use our services for personal, non-commercial transitory viewing only. This license does not include modifying or copying materials, or using materials for any commercial purpose.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Disclaimer</h2>
            <p>Our services are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Limitations</h2>
            <p>In no event shall we be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at info@mazoutelectric.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
