import { useRouter } from "next/router";
import Head from "next/head";

const MetaTags = ({ data }) => {
  const router = useRouter();
  var url = "https://securedapp.io" + router.asPath;
  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{data.title}</title>
      <meta name="author" content="SecureDapp" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" type="image/x-icon" href="./logo.png" />
      <link rel="apple-touch-icon" href="./logo.png" />

      {/* Basic Meta Tags */}
      {<meta name="description" content={data.desc} />}
      {<meta name="keywords" content={data.keywords} />}

      {/* Open Graph Meta Tags (for social media) */}
      {<meta property="og:title" content={data.title} />}
      {<meta property="og:description" content={data.desc} />}
      {
        <meta
          property="og:image"
          content={"https://securedapp.io" + data.image}
        />
      }
      {<meta property="og:url" content={url} />}
      {<meta property="og:type" content="website" />}

      {/* Twitter Meta Tags */}
      {<meta name="twitter:card" content="summary_large_image" />}
      {<meta name="twitter:title" content={data.title} />}
      {<meta name="twitter:description" content={data.desc} />}
      {
        <meta
          name="twitter:image"
          content={"https://securedapp.io" + data.image}
        />
      }

      {/* SEO Meta Tags */}
      {<meta name="robots" content="index, follow" />}
      {<meta name="googlebot" content="index, follow" />}

      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
      />
    </Head>
  );
};

export default MetaTags;
