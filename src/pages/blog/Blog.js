import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import BlogCard from "../../components/blog/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import { tags } from "./blog-data";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BlogTag from "../../components/blog/BlogTag";

function Blog() {
  window.scrollTo(0, 0);
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTags] = useState("");

  async function getBlogs() {
    const response = await fetch("https://139-59-5-56.nip.io:3443/getBlogList");
    let data = await response.json();
    data = data.filter((item) => item.status === 1);
    setOriginalBlogs(data);
    setBlogs(
      data.sort((a, b) => new Date(b.modifiedon) - new Date(a.modifiedon))
    );
    console.log(blogs);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    let filteredBlogs = originalBlogs;

    if (searchText.length > 0) {
      filteredBlogs = filteredBlogs.filter((a) =>
        a.content.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedTag !== "All") {
      filteredBlogs = filteredBlogs.filter((a) =>
        a.tags.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }

    setBlogs(filteredBlogs);
  }, [searchText, selectedTag, originalBlogs]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const toggleTagClick = (tag) => {
    if (tag === selectedTag) {
      setSelectedTags("");
    } else {
      setSelectedTags(tag);
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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
        <SectionTitle title="Blog" description="Read the fastest Web3 blog" />
        <div className="blog-search">
          <div className="blog-search-input">
            <input
              className="search-input-box"
              placeholder="Search blog..."
              onChange={handleSearchChange}
              type="text"
            />
            <div className="search-input-icon">
              <FontAwesomeIcon className="" icon={faSearch} />
            </div>
          </div>
          <div className="blog-search-tags-container">
            <div>Search via tags</div>
            <div className="blog-search-tags">
              {tags.map((tag) => (
                <BlogTag
                  tag={tag}
                  selected={selectedTag}
                  onClick={() => toggleTagClick(tag)}
                />
              ))}
            </div>
          </div>
        </div>
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

export default Blog;
