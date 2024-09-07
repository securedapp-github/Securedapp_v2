import { useRouter } from "next/router";
import Head from "next/head";

const MetaTags = ({ data }) => {
  const router = useRouter();
  var url = "https://securedapp.io" + router.asPath;
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.desc} />
      <meta name="keywords" content={data.keywords} />

      {/* Open Graph Meta Tags (for social media) */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.desc} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.desc} />
      <meta name="twitter:image" content={data.image} />

      {/* SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};

export default MetaTags;
