import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Section 1 – What Do We Do With Your Information?",
    content: [
      "When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.",
      "When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.",
      "Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.",
    ],
  },
  {
    title: "Section 2 – Consent",
    content: [
      "**How do you get my consent?**",
      "When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery, or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.",
      "If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
      "**How do I withdraw my consent?**",
      "If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at info@mazoutelectric.com or mailing us at: 20, East End Enclave, Laxmi Nagar, Delhi, India – 110092.",
    ],
  },
  {
    title: "Section 3 – Disclosure",
    content: [
      "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.",
    ],
  },
  {
    title: "Section 4 – Payment",
    content: [
      "We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.",
      "Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.",
      "PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.",
    ],
  },
  {
    title: "Section 5 – Third-Party Services",
    content: [
      "In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.",
      "However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.",
      "For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.",
      "In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.",
      "Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.",
    ],
  },
  {
    title: "Section 6 – Security",
    content: [
      "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.",
    ],
  },
  {
    title: "Section 7 – Cookies",
    content: [
      "We use cookies to maintain session of your user. It is not used to personally identify you on other websites.",
    ],
  },
  {
    title: "Section 8 – Age of Consent",
    content: [
      "By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
    ],
  },
  {
    title: "Section 9 – Changes to This Privacy Policy",
    content: [
      "We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.",
      "If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.",
    ],
  },
  {
    title: "Questions and Contact Information",
    content: [
      "If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at info@mazoutelectric.com or by mail at: 20, East End Enclave, Laxmi Nagar, Delhi, India – 110092.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: August 12, 2025</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section
              key={index}
              className="rounded-xl border border-border bg-card/50 p-6 md:p-8"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="pt-0.5">{section.title.replace(/^Section \d+ – /, "")}</span>
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed pl-11">
                {section.content.map((paragraph, pIndex) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={pIndex} className="font-semibold text-foreground">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  return <p key={pIndex}>{paragraph}</p>;
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
