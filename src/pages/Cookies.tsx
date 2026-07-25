import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cookie Policy | Mazout Electric"
        description="How Mazout Electric uses cookies to make the website work and improve your browsing experience."
        path="/cookies"
      />
      <Navbar />
      <main className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 11, 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies help us enhance your browsing experience and deliver personalized content.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure access, and session management. The website cannot function without these cookies.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the structure and content of our website.</li>
              <li><strong className="text-foreground">Functional Cookies:</strong> These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.</li>
              <li><strong className="text-foreground">Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg mt-2">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-foreground font-semibold">Cookie Type</th>
                    <th className="text-left p-3 text-foreground font-semibold">Purpose</th>
                    <th className="text-left p-3 text-foreground font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Session Cookies</td>
                    <td className="p-3">Maintain your session while browsing</td>
                    <td className="p-3">Until browser is closed</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Persistent Cookies</td>
                    <td className="p-3">Remember your preferences for future visits</td>
                    <td className="p-3">Up to 12 months</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Third-Party Cookies</td>
                    <td className="p-3">Analytics and performance tracking</td>
                    <td className="p-3">Varies by provider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Managing Cookies</h2>
            <p>You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. You can manage your cookie preferences through your browser settings:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy → Cookies</li>
            </ul>
            <p className="mt-2">Please note that disabling certain cookies may affect the functionality of our website and limit your user experience.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services that appear on our pages. We do not control the use of these cookies. Third-party providers include analytics services and advertising partners. Please refer to their respective privacy policies for more information on how they use cookies.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to review this page periodically for the latest information on our cookie practices.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at info@mazoutelectric.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
