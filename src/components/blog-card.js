// src/components/Sidebar.js
import React from 'react';
import Button1 from './button-1';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({details}) => (
  <div>
    <div>
      <div>
        <span>{details.date}</span>
        <img src={details.image}></img>
      </div>
      <div>
        <div>
        {details.tags.map(i =>(
          <span>{i}</span>
        ))}
        </div>
        <h4>{details.title}</h4>
        <p>{details.preview}</p>
        <Button1 link={details.link} value="Read more"/>
      </div>
    </div>
  </div>
);

export default BlogCard;
