import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Keep the page out of search results (private/utility/error pages) while still allowing crawlers to follow its links. */
  noindex?: boolean;
}

const SITE = "https://mazoutelectric.com";

// OG/Twitter tags deliberately live only as a static, site-wide block in index.html,
// not here. Their consumers (Facebook/Twitter/LinkedIn/Slack/WhatsApp unfurlers) fetch
// raw HTML and never run JS, so anything Helmet injects is invisible to them — it would
// just sit alongside the static tags as an inert duplicate, which SEO audit tools flag.
const SEO = ({
  title,
  description,
  path,
  keywords,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const url = `${SITE}${path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const robotsContent = noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      {!noindex &&
        schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
    </Helmet>
  );
};

export default SEO;