import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Overview",
    content: [
      "This website is operated by Mazout Electric Private Limited. Throughout the site, the terms \"we\", \"us\" and \"our\" refer to Mazout Electric Private Limited. Mazout Electric Private Limited offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
      "By visiting our site and/or purchasing something from us, you engage in our \"Service\" and agree to be bound by the following terms and conditions (\"Terms of Service\", \"Terms\"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.",
      "Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
      "Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website.",
    ],
  },
  {
    title: "Online Store Terms",
    content: [
      "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
      "You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).",
      "You must not transmit any worms or viruses or any code of a destructive nature.",
      "A breach or violation of any of the Terms will result in an immediate termination of your Services.",
    ],
  },
  {
    title: "General Conditions",
    content: [
      "We reserve the right to refuse service to anyone for any reason at any time.",
      "You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.",
      "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.",
    ],
  },
  {
    title: "Accuracy, Completeness and Timeliness of Information",
    content: [
      "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.",
      "This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.",
    ],
  },
  {
    title: "Modifications to the Service and Prices",
    content: [
      "Prices for our products are subject to change without notice.",
      "We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.",
      "We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.",
    ],
  },
  {
    title: "Products or Services",
    content: [
      "Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.",
      "We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.",
      "We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time.",
      "We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.",
    ],
  },
  {
    title: "Accuracy of Billing and Account Information",
    content: [
      "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.",
      "You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.",
    ],
  },
  {
    title: "Optional Tools",
    content: [
      "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.",
      "You acknowledge and agree that we provide access to such tools \"as is\" and \"as available\" without any warranties, representations or conditions of any kind and without any endorsement.",
      "We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Certain content, products and services available via our Service may include materials from third-parties.",
      "Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites.",
      "We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites.",
    ],
  },
  {
    title: "User Comments, Feedback and Other Submissions",
    content: [
      "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.",
      "We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.",
      "You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments.",
    ],
  },
  {
    title: "Personal Information",
    content: [
      "Your submission of personal information through the store is governed by our Privacy Policy.",
    ],
  },
  {
    title: "Errors, Inaccuracies and Omissions",
    content: [
      "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice.",
    ],
  },
  {
    title: "Prohibited Uses",
    content: [
      "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service.",
    ],
  },
  {
    title: "Disclaimer of Warranties; Limitation of Liability",
    content: [
      "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.",
      "We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.",
      "You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied.",
      "In no case shall Mazout Electric Private Limited, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to indemnify, defend and hold harmless Mazout Electric Private Limited and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or your violation of any law or the rights of a third-party.",
    ],
  },
  {
    title: "Severability",
    content: [
      "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service.",
    ],
  },
  {
    title: "Termination",
    content: [
      "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.",
      "These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.",
      "If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination.",
    ],
  },
  {
    title: "Entire Agreement",
    content: [
      "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.",
      "These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us.",
      "Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Jaipur, Rajasthan.",
    ],
  },
  {
    title: "Changes to Terms of Service",
    content: [
      "You can review the most current version of the Terms of Service at any time at this page.",
      "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "Questions about the Terms of Service should be sent to: info@mazoutelectric.com",
    ],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm">Last updated: August 12, 2025</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to these terms.
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
                <span className="pt-0.5">{section.title}</span>
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed pl-11">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
