import { useEffect } from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ data }) => {
  useEffect(() => {
    // all meta tags in reverse order...
    var meta = "meta";
    //pinterest-rich-pin
    const metaPininterest = document.createElement("meta");
    metaPininterest.name = "pinterest-rich-pin";
    metaPininterest.content = "true";
    document.head.prepend(metaPininterest);
    //og:image:height
    const metaOgImageHeight = document.createElement("meta");
    metaOgImageHeight.name = "og:image:height";
    metaOgImageHeight.content = "630";
    document.head.prepend(metaOgImageHeight);
    //og:image:width
    const metaOgImageWidth = document.createElement("meta");
    metaOgImageWidth.name = "og:image:width";
    metaOgImageWidth.content = "1200";
    document.head.prepend(metaOgImageWidth);
    //twitter:card
    const metaTwittercard = document.createElement("meta");
    metaTwittercard.name = "twitter:card";
    metaTwittercard.content = "summary_large_image";
    document.head.prepend(metaTwittercard);
    //twitter:image
    const metaTwitterImage = document.createElement("meta");
    metaTwitterImage.name = "twitter:image";
    metaTwitterImage.content = data.image;
    document.head.prepend(metaTwitterImage);
    //twitter:description
    const metaTwitterDescription = document.createElement("meta");
    metaTwitterDescription.name = "twitter:description";
    metaTwitterDescription.content = data.desc;
    document.head.prepend(metaTwitterDescription);
    //twitter:title
    const metaTwitterTitle = document.createElement("meta");
    metaTwitterTitle.name = "twitter:title";
    metaTwitterTitle.content = data.title;
    document.head.prepend(metaTwitterTitle);
    //og:url
    const metaOgUrl = document.createElement("meta");
    metaOgUrl.name = "og:url";
    metaOgUrl.content = window.location.href;
    document.head.prepend(metaOgUrl);
    //og:locale
    const metaOgLocale = document.createElement("meta");
    metaOgLocale.name = "og:locale";
    metaOgLocale.content = "en_IN";
    document.head.prepend(metaOgLocale);
    //og:site_name
    const metaOgSitename = document.createElement("meta");
    metaOgSitename.name = "og:site_name";
    metaOgSitename.content = "SecureDapp";
    document.head.prepend(metaOgSitename);
    //og:type
    const metaOgType = document.createElement("meta");
    metaOgType.name = "og:type";
    metaOgType.content = "website";
    document.head.prepend(metaOgType);
    //og:image
    const metaOgImage = document.createElement("meta");
    metaOgImage.name = "og:image";
    metaOgImage.content = data.image;
    document.head.prepend(metaOgImage);
    //og:description
    const metaOgDesc = document.createElement("meta");
    metaOgDesc.name = "og:description";
    metaOgDesc.content = data.desc;
    document.head.prepend(metaOgDesc);
    //og:title
    const metaOgTitle = document.createElement("meta");
    metaOgTitle.name = "og:title";
    metaOgTitle.content = data.title;
    document.head.prepend(metaOgTitle);
    //author
    const metaAuthor = document.createElement("meta");
    metaAuthor.name = "author";
    metaAuthor.content = "SecureDapp";
    document.head.prepend(metaAuthor);
    //keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = data.keywords;
    document.head.prepend(metaKeywords);
    //desc
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = data.desc;
    document.head.prepend(metaDescription);
    //title
    const title = document.createElement("title");
    title.textContent = `${data.title}`;
    document.head.prepend(title);
  }, []);
  return <Helmet></Helmet>;
};

export default MetaTags;
