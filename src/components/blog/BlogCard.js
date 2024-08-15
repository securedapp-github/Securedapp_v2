import React from "react";
import Button from "../common/Button";
import "./BlogCard.css";
import BlogTag from "./BlogTag";
import { Link, useNavigate } from "react-router-dom";

function BlogCard({ details }) {
  const navigate = useNavigate();
  var dateObj = new Date(details.modifiedon);

  const dateOptions = { month: "long", day: "numeric" };
  var dateObj = dateObj.toLocaleDateString("en-US", dateOptions);

  var preview;
  preview = details.content.replaceAll("[", " ");
  preview = preview.replaceAll("]", " ");
  preview = preview.replaceAll("/n", " ");
  preview = preview.replaceAll("\n", " ");
  preview = preview.replaceAll("/", " ");
  preview = preview.replaceAll("*", " ");
  preview = preview.slice(0, 250);
  preview = preview + "...";

  return (
    <div
      className="blog-card"
      onClick={() => {
        navigate(`/blog/${details.url}`);
      }}>
      <div className="blog-card-header">
        <div className="blog-card-header-date">{dateObj}</div>
        <div className="blog-card-header-image-container">
          <img className="blog-card-header-image" src={details.image} alt="" />
        </div>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-body-tags">
          {details.tags.split(",").map((tag) => {
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
              navigate(`/blog/${details.url}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
