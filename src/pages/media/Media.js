import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import BlogCard from "../../components/blog/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import { mediaData } from "./media-data";
import "./Blog.css";

function Media() {
  const [blogs, setBlogs] = useState(mediaData);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTags] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Determine the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="blog-container">
      <Navbar />
      <div className="blog">
        <SectionTitle
          title="Media Coverages"
          description="Places we were interviewed"
        />
        <div className="blog-cards">
          {currentItems.map((item) => (
            <BlogCard key={item.id} details={item} />
          ))}
        </div>
        <div className="blog-pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              className={`blog-pagination-item ${
                currentPage === i + 1 && "selected-number"
              }`}
              key={i + 1}
              onClick={() => paginate(i + 1)}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
