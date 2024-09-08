import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import BlogCard from "../../components/blog/BlogCard";
import Button from "../../components/common/Button";
import BlogTag from "../../components/blog/BlogTag";
import CustomHr from "../../components/common/CustomHr";
import MetaTags from "../../components/common/MetaTags";
import { toast } from "react-toastify";
import { getBlogs } from "../../SolidityShield/functions";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogsData as fullData } from "../../pageComponents/blog/blog-data";

const renderContent = (blogData) => {
  const filteredBlog = blogData;

  let paragraphs = filteredBlog.content.split("][");

  const modifiedParagraphs = [];

  paragraphs.forEach((paragraphText) => {
    // Remove square brackets

    let modifiedText = paragraphText.replace(/\[|\]/g, "");

    // Replace links with anchor tags and add color attribute
    modifiedText = modifiedText.replace(
      /<([^|]+)\|([^>]+)>/g,
      '<Link target="_blank" href="$2" style="color: #07bc0c;">$1</Link>'
    );
    modifiedText = modifiedText.replace(
      /&lt;([^|]+)\|([^&]+)&gt;/g,
      '<Link target="_blank" href="$2" style="color: #07bc0c;">$1</Link>'
    );

    // Replace '/n/' with line breaks
    modifiedText = modifiedText.replace(/\/n\//g, "<br>");

    // Bold text wrapped in '**'
    modifiedText = modifiedText.replace(
      /\*\*(.*?)\*\*/g,
      `<h2 className="h2">$1</h2>`
    );
    modifiedText = modifiedText.replace(
      /\*(.*?)\*/g,
      `<h2 className="h2">$1</h2>`
    );

    modifiedText = modifiedText.split("\n\n");
    // Identify and store images
    const imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    let images = [];
    let match;
    while ((match = imageRegex.exec(modifiedText)) !== null) {
      images.push({ src: match[0], alt: "Image" }); // Default alt text
    }

    // Store modified paragraph along with images
    modifiedParagraphs.push({ modifiedText, images });
  });

  return modifiedParagraphs;
};

const scrollToHeading = (headingText) => {
  const elements = document.querySelectorAll("h2");
  for (let element of elements) {
    if (element.textContent === headingText) {
      element.scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
};

const extractHeadings = (text) => {
  const regex = /\[\*\*(.*?)\*\*\]/g;
  const headingsArray = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    headingsArray.push(match[1]);
  }

  return headingsArray;
};

const getTags = (tags) => {
  return tags.split(",");
};

export const fetchBlogs = async (setBlogsData) => {
  var data = await getBlogs();
  setBlogsData && setBlogsData(data);
  return data;
};

export default function BlogPost() {
  const router = useRouter();

  var { url } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [blogDetails, setBlogDetails] = useState();
  const [blogsData, setBlogsData] = useState();
  const [shortIndexView, setShortIndexView] = useState(true);
  const [relatedArticles, setRelated] = useState([]);

  const toggleIndexView = () => {
    setShortIndexView(!shortIndexView);
  };

  const getBlog = () => {
    if (!blogsData) {
      return;
    }

    var blog = blogsData.find((data) => data.url === url && data.status === 1);

    if (!blog) {
      return;
    }

    var dateObj = new Date(blog.modifiedon);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    var dateObj = dateObj.toLocaleDateString("en-US", dateOptions);

    var preview;
    preview = blog.content.replaceAll("[", " ");
    preview = preview.replaceAll("]", " ");
    preview = preview.replaceAll("/n", " ");
    preview = preview.replaceAll("\n", " ");
    preview = preview.replaceAll("/", " ");
    preview = preview.replaceAll("*", " ");
    preview = preview.slice(0, 300);
    preview = preview + "...";

    setBlogDetails({
      title: blog.heading,
      preview: preview,
      image: blog.image,
      tags: blog.tags,
      Date: dateObj,
      Publisher: {
        name: "Lance Bogrol",
        image: "",
      },
      Index: extractHeadings(blog.content),
      Summary: preview,
      Content: renderContent(blog),
    });
  };

  const findRelated = () => {
    if (blogDetails) {
      const tagSet = new Set(getTags(blogDetails.tags.toLowerCase()));

      const related = blogsData.filter((blog) => {
        const blogTags = getTags(blog.tags.toLowerCase());
        return (
          blog.heading !== blogDetails.title &&
          blogTags.some((tag) => tagSet.has(tag))
        );
      });

      setRelated(related);
    }
  };

  useEffect(() => {
    fetchBlogs(setBlogsData);
  }, [!blogsData && blogsData]);

  useEffect(() => {
    findRelated();
  }, [!blogDetails && blogDetails]);

  useEffect(() => {
    getBlog();
  }, [!blogsData && blogsData]);

  const IndexSummaryCard = ({ title, desc, index }) => {
    return (
      <div className="index-summary-card">
        <Navbar />
        {index ? (
          <div className="card-details">
            <div className="card-title">{title}</div>
            <ul className="card-content">
              {index.slice(0, shortIndexView ? 5 : index.length).map((h) => (
                <li onClick={() => scrollToHeading(h)}>{h}</li>
              ))}
            </ul>
            <div onClick={toggleIndexView} className="card-read-more">
              {shortIndexView ? "Read More" : "Read Less"}
            </div>
          </div>
        ) : (
          <div className="card-details">
            <div className="card-title">{title}</div>
            <div className="card-content">{desc}</div>
          </div>
        )}
      </div>
    );
  };

  const currentBlog = fullData.find((item) => item.url === url);

  return (
    <div className="blog-post-container">
      {currentBlog && (
        <MetaTags
          data={{
            title: currentBlog.heading,
            desc: `Read an interesting blog from SecureDapp on "${currentBlog.heading}"`,
            image: currentBlog.image,
            keywords: currentBlog.tags + ", " + currentBlog.category,
          }}
        />
      )}
      {blogDetails && (
        <div className="blog-post">
          <div className="blog-post-header">
            <div className="blog-post-header-left">
              <div className="blog-post-header-title">
                <div className="blog-post-header-title-text">
                  Smart Contract Audit
                </div>
              </div>
              <Button
                text={"Solidity Shield"}
                onClick={() =>
                  typeof window !== "undefined" &&
                  window.open("/solidity-shield-scan")
                }
                filled={true}
              />
            </div>
            <div className="blog-post-header-right">
              <div className="blog-post-header-title">
                <div className="blog-post-header-title-text">
                  Runtime Monitoring
                </div>
              </div>
              <Button
                text={"Secure Watch"}
                onClick={() =>
                  typeof window !== "undefined" &&
                  window.open("https://securewatch.securedapp.io")
                }
                filled={true}
              />
            </div>
          </div>
          <div className="blog-post-content">
            <div className="blog-post-index">
              <IndexSummaryCard title={"Index"} index={blogDetails.Index} />
            </div>
            <div className="blog-post-body">
              <div className="body-header">
                <div className="body-header-tags">
                  {blogDetails.tags.split(",").map((tag) => {
                    return <BlogTag tag={tag} onClick={() => {}} />;
                  })}
                </div>
                <div className="body-header-title">{blogDetails.title}</div>
                {/* <p>{blogDetails.preview}</p> */}
              </div>
              <div className="py-6">
                <CustomHr />
              </div>
              <div className="publisher">
                <div className="publisher-details">
                  <div className="publisher-profile">
                    <div className="publisher-image">
                      {blogDetails.Publisher.image && (
                        <img
                          layout="intrinsic"
                          src={blogDetails.Publisher.image}
                        />
                      )}
                    </div>
                    <div>
                      <div>{blogDetails.Publisher.name}</div>
                      <div>{`Published on ${blogDetails.Date}`}</div>
                    </div>
                  </div>
                  <div className="publisher-socials">
                    <div>Share: </div>
                    {/* <Link target="_blank" href={``}>
                    <i className="fa-brands fa-discord" />
                  </Link> */}
                    <Link
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        blogDetails.title
                      )}&url=${encodeURIComponent(
                        "https://securedapp.io/blog/" + url
                      )}`}
                    >
                      <FontAwesomeIcon size="xl" icon={faTwitter} />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
                        blogDetails.title +
                          " : " +
                          "https://securedapp.io/blog/" +
                          url
                      )}`}
                    >
                      <FontAwesomeIcon size="xl" icon={faLinkedin} />
                    </Link>
                    <Link
                      target="_blank"
                      href={`https://t.me/share/url?url=${encodeURIComponent(
                        "https://securedapp.io/blog/" + url
                      )}&text=${encodeURIComponent(blogDetails.title)}`}
                    >
                      <FontAwesomeIcon size="xl" icon={faTelegram} />
                    </Link>
                    <i
                      target="_blank"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "https://securedapp.io/blog/" + url
                        );
                        toast("Link copied");
                      }}
                      className="fa-regular fa-link hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div>{blogDetails.Intro}</div>
              </div>
              <div className="py-6">
                <CustomHr />
              </div>
              <div>
                {/** Post Content */}
                {blogDetails.Content.map((paragraph, index) => (
                  <div key={index}>
                    {paragraph.modifiedText.map((text, textIndex) => {
                      text = text.replace("{", "");
                      text = text.replace("}", "");

                      const imageRegex =
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
                      const match = imageRegex.exec(text);
                      if (match) {
                        // If image link found, render image
                        const img = { alt: match[1], src: match[0] };
                        return (
                          <React.Fragment key={textIndex}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: text.replace(imageRegex, ""),
                              }}
                            />
                            <img
                              layout="intrinsic"
                              style={{
                                marginTop: 60,
                                marginBottom: 60,
                                paddingLeft: 38,
                                paddingRight: 38,
                              }}
                              src={img.src}
                              alt={img.alt}
                            />
                          </React.Fragment>
                        );
                      } else {
                        // If no image link found, render paragraph text
                        return (
                          <div
                            key={textIndex}
                            dangerouslySetInnerHTML={{ __html: text }}
                          />
                        );
                      }
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-post-summary">
              <IndexSummaryCard
                title={"Quick Summary"}
                desc={blogDetails.Summary}
              />
            </div>
          </div>
          <div className="py-6 px-4 lg:px-32">
            <CustomHr />
          </div>
          <div className="related-blogs">
            <div className="related-blogs-title">Related Posts</div>
            {relatedArticles.length > 0 ? (
              <div className="related-blog-cards">
                {relatedArticles.map((i) => (
                  <BlogCard details={i} />
                ))}
              </div>
            ) : (
              <div className="no-related-posts">No Related Posts</div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

// 1. Define `getStaticPaths` to pre-render dynamic blog URLs
export async function getStaticPaths() {
  var data = await fetchBlogs();
  const paths = data.map((blog) => ({
    params: { url: blog.url },
  }));

  return {
    paths, // Pre-rendered blog URLs
    fallback: false, // Enable fallback for other URLs
  };
}

// 2. Define `getStaticProps` to fetch blog data for each page
export async function getStaticProps({ params }) {
  var data = await fetchBlogs();
  const blog = data.find((blog) => blog.url === params.url);

  if (!blog) {
    return {
      notFound: true, // Return 404 if blog not found
    };
  }

  return {
    props: {
      blog,
    },
  };
}
