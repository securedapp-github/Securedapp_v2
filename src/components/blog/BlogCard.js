"use client";

import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import BlogTag from "./BlogTag";
import { useRouter } from "next/router";

function BlogCard({ details, isMedia = false }) {
  const navigate = useRouter();
  var dateObj = new Date(details.date);

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
        details.url && navigate.push(`/blog/${details.url.trim().replace(":", "")}`);
      }}
    >
      <div className="blog-card-header">
        {details.date ? (
          <div className="blog-card-header-date">{dateObj}</div>
        ) : (
          ""
        )}
        <div className="blog-card-header-image-container">
          {details.image && (
            <Image
              className="blog-card-header-image"
              src={details.image}
              alt={details.heading}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-body-tags">
          {details.tags &&
            details.tags.split(",").map((tag) => {
              return <BlogTag tag={tag} onClick={() => {}} />;
            })}
        </div>
        <h2 className="blog-card-body-header">{details.heading}</h2>
        <div className="blog-card-body-preview">{preview}</div>
        <div className="search-input-box">
          {isMedia ? (
            <a
              href={details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card-body-button"
            >
              Read More
            </a>
          ) : (
            <Button
              text="Read more"
              className="blog-card-body-button"
              filled={true}
              blogButton={true}
              onClick={() => {
                navigate.push(`/blog/${details.url.trim()}`);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
