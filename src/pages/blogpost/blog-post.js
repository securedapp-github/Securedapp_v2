import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
import { tags } from "../blog/blog-data";
import Button from "../../components/common/Button";

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
      '<a target="_blank" href="$2" style="color: #07bc0c;">$1</a>'
    );
    modifiedText = modifiedText.replace(
      /&lt;([^|]+)\|([^&]+)&gt;/g,
      '<a target="_blank" href="$2" style="color: #07bc0c;">$1</a>'
    );

    // Replace '/n/' with line breaks
    modifiedText = modifiedText.replace(/\/n\//g, "<br>");

    // Bold text wrapped in '**'
    modifiedText = modifiedText.replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>");

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

function BlogPost({ Url }) {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    preview: "",
    tags: "",
    Date: "",
    Publisher: {
      name: "",
      image: "",
    },
    Index: "",
    Summary: "",
    Content: [],
  });
  const [blogsData, setBlogsData] = useState([]);
  const [relatedArticles, setRelated] = useState([]);

  async function getBlog() {
    const response = await fetch("https://139-59-5-56.nip.io:3443/getBlogList");
    var data = await response.json();
    setBlogsData(data);
    var blog = data.find((data) => data.url === Url);

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
      tags: blog.tags,
      Date: dateObj,
      Publisher: {
        name: "Lance Bogrol",
        image: "/images/why-choose-1.svg",
      },
      Index: extractHeadings(blog.content),
      Summary: preview,
      Content: renderContent(blog),
    });
    console.log(blogDetails.Index);

    const tagSet = new Set(blogDetails.tags);
    setRelated(
      blogsData.filter((blog) => blog.tags.includes((tag) => tagSet.has(tag)))
    );
  }

  useEffect(() => {
    getBlog();
  }, []);

  function IndexSummary({ title, desc, index }) {
    return (
      <div>
        {index ? (
          <div>
            <h4>{title}</h4>
            <ul>
              {index.map((h) => (
                <Link>
                  <li onClick={() => scrollToHeading(h)}>{h}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <h4>Relevant Brands!</h4>
          <Button text={"Solidity Shield"} onClick={{}} />
        </div>
        <div>
          <h4>Relevant Brands!</h4>
          <Button text={"Secure Watch"} onClick={{}} />
        </div>
      </div>
      <div>
        <div>
          <IndexSummary title={"Index"} index={blogDetails.Index} />
        </div>
        <div>
          <IndexSummary title={"Quick Summary"} desc={blogDetails.Summary} />
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>{blogDetails.tags}</span>
          </div>
          <h3>{blogDetails.title}</h3>
          {/* <p>{blogDetails.preview}</p> */}
          <hr />
        </div>
        <div>
          <div>
            <div>
              <div>
                <img src={blogDetails.Publisher.image} />
              </div>
              <div>
                <p>{blogDetails.Publisher.name}</p>
                <p>{blogDetails.Date}</p>
              </div>
            </div>
            <div>
              <p>Share : </p>
              <a target="_blank" href={``}>
                <i className="fa-brands fa-discord" />
              </a>
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  blogDetails.title
                )}&url=${window.location.origin}${encodeURIComponent(
                  +"/" + Url
                )}`}>
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                target="_blank"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${
                  window.location.origin
                }${+"/" + Url}`}>
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                target="_blank"
                href={`https://t.me/share/url?url=${
                  window.location.origin
                }${encodeURIComponent(+"/" + Url)}&text=${encodeURIComponent(
                  blogDetails.title
                )}`}>
                <i className="fa-brands fa-telegram" />
              </a>
              <i
                target="_blank"
                onClick={() =>
                  navigator.clipboard.writeText(
                    window.location.origin + "/" + Url
                  )
                }
                className="fa-regular fa-link"
              />
            </div>
          </div>
          {/* <p>{blogDetails.Intro}</p> */}
          <hr />
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
                        style={{
                          marginTop: 60,
                          marginBottom: 60,
                          paddingLeft: 38,
                          paddingRight: 38,
                          // width: '45vw',    // Set width to 20% of the viewport width
                          height: "45vh", // Set height to 20% of the viewport height
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
        <hr />
      </div>
      <div>
        <h3>Related Posts</h3>
        <div>
          {relatedArticles.map((i) => (
            <BlogCard details={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
