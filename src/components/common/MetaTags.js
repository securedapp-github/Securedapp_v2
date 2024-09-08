import { useRouter } from "next/router";
import Head from "next/head";

const MetaTags = ({ data }) => {
  const router = useRouter();
  var url = "https://securedapp.io" + router.asPath;
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Basic Meta Tags */}
      {data && <title>{data.title}</title>}
      {data && <meta name="description" content={data.desc} />}
      {data && <meta name="keywords" content={data.keywords} />}

      {/* Open Graph Meta Tags (for social media) */}
      {data && <meta property="og:title" content={data.title} />}
      {data && <meta property="og:description" content={data.desc} />}
      {data && <meta property="og:image" content={data.image} />}
      {data && <meta property="og:url" content={url} />}
      {data && <meta property="og:type" content="website" />}

      {/* Twitter Meta Tags */}
      {data && <meta name="twitter:card" content="summary_large_image" />}
      {data && <meta name="twitter:title" content={data.title} />}
      {data && <meta name="twitter:description" content={data.desc} />}
      {data && <meta name="twitter:image" content={data.image} />}

      {/* SEO Meta Tags */}
      {data && <meta name="robots" content="index, follow" />}
      {data && <meta name="googlebot" content="index, follow" />}
    </Head>
  );
};

export default MetaTags;
