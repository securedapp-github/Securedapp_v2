import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import { useState, useEffect } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { blogsData, tags } from "./blog-data";

function Blog() {
  const [blogs, setBlogs] = useState(blogsData);

  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTags] = useState("All");

  async function getBlogs() {
    const response = await fetch("https://139-59-5-56.nip.io:3443/getBlogList");
    const data = await response.json();
    if (searchText.length > 0) {
      setBlogs(
        data.filter((a) =>
          a.content.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else if (selectedTag !== "All") {
      setBlogs(
        data.filter((a) =>
          a.tags.toLowerCase().includes(selectedTag.toLowerCase())
        )
      );
    } else {
      setBlogs(data.sort((a, b) => a.id - b.id));
    }
  }

  useEffect(() => {
    getBlogs();
  }, [searchText, selectedTag]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    getBlogs();
  };

  const handleTagClick = (tag) => {
    setSelectedTags(tag);
    getBlogs();
  };

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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <SectionTitle
          title="News & Articles"
          description="#1 Blog on theme marketing by Bodrum"
        />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search blogs..."
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <p>Search via tags</p>
          {tags.map((i) => (
            <button key={i} onClick={() => handleTagClick(i)}>
              {i}
            </button>
          ))}
        </div>
      </div>
      <div>
        {currentItems.map((i) => (
          <BlogCard details={i} />
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
