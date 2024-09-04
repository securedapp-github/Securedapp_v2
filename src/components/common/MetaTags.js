import { Helmet } from "react-helmet";

const MetaTags = ({ data }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`SecureDapp - ${data.title}`}</title>
      <meta name="description" content={data.desc} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content="SecureDapp" />

      {/* Open Graph Meta Tags (For Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.desc} />
      <meta property="og:image" content={data.image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SecureDapp" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content={data.image} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.desc} />
      <meta name="twitter:image" content={data.image} />

      {/* WhatsApp-specific Tag (Open Graph) */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* LinkedIn uses Open Graph Tags, so no extra tags are needed */}

      {/* Optional: Meta tags for other platforms (Pinterest, Slack, etc.) */}
      <meta name="pinterest-rich-pin" content="true" />
    </Helmet>
  );
};

export default MetaTags;
