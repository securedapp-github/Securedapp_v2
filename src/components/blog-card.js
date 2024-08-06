import React from "react";
import Button1 from "./button-1";
import { useState } from "react";

function BlogCard({ details }) {
  var dateObj = new Date(details.modifiedon);

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  var dateObj = dateObj.toLocaleDateString("en-US", dateOptions);

  var preview;
  preview = details.content.replaceAll("[", " ");
  preview = preview.replaceAll("]", " ");
  preview = preview.replaceAll("/n", " ");
  preview = preview.replaceAll("\n", " ");
  preview = preview.replaceAll("/", " ");
  preview = preview.replaceAll("*", " ");
  preview = preview.slice(0, 300);
  preview = preview + "...";

  return (
    <div>
      <div>
        <div>
          <span>{dateObj}</span>
          <img width={"150px"} src={details.image}></img>
        </div>
        <div>
          <div>
            <span>{details.tags}</span>
          </div>
          <h4>{details.heading}</h4>
          <p>{preview}</p>
          <Button1 link={details.link} value="Read more" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
