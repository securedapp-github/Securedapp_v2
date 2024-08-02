import React from "react";

const SectionTitle = ({ name, title, description }) => (
  <div>
    <p>{name}</p>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default SectionTitle;
