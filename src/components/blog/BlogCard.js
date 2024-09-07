import React from "react";
import Button from "../common/Button";
import "./BlogCard.css";
import BlogTag from "./BlogTag";
import { Link, useNavigate } from "react-router-dom";

function BlogCard({ details, isMedia = false }) {
  const navigate = useNavigate();
  var dateObj = new Date(details.modifiedon);

  const dateOptions = { month: "long", day: "numeric" };
  var dateObj = dateObj.toLocaleDateString("en-US", dateOptions);

  var preview;
  if (details.content) {
    preview = details.content.replaceAll("[", " ");
    preview = preview.replaceAll("]", " ");
    preview = preview.replaceAll("/n", " ");
    preview = preview.replaceAll("\n", " ");
    preview = preview.replaceAll("/", " ");
    preview = preview.replaceAll("*", " ");
    preview = preview.slice(0, 250);
    preview = preview + "...";
  } else if (details.description) {
    preview = details.description;
  }

  return (
    <div
      className="blog-card"
      onClick={() => {
        details.url
          ? navigate(`/blog/${details.url}`)
          : window.open(details.link);
      }}
    >
      <div className="blog-card-header">
        {details.modifiedon ? (
          <div className="blog-card-header-date">{dateObj}</div>
        ) : details.date ? (
          <div className="blog-card-header-date">{details.date}</div>
        ) : (
          ""
        )}
        <div className="blog-card-header-image-container">
          <img className="blog-card-header-image" src={details.image} alt="" />
        </div>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-body-tags">
          {details.tags &&
            details.tags.split(",").map((tag) => {
              return <BlogTag tag={tag} onClick={() => {}} />;
            })}
        </div>
        <div className="blog-card-body-header">{details.heading}</div>
        <div className="blog-card-body-preview">{preview}</div>
        <div className="blog-card-body-button">
          <Button
            text="Read more"
            filled={true}
            blogButton={true}
            onClick={() => {
              !isMedia && navigate(`/blog/${details.url}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
