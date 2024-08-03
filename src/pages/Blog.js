import React from 'react';
import BlogCard from '../components/blog-card';
import { useState } from 'react';
import SectionTitle from '../components/section-title';
import Navbar from '../components/navbar';
import {blogsData, tags} from "./blog-data"
import Footer from "../sections/footer"

function Blog() {

const [blogs, setBlogs] = useState(blogsData)

const [searchText, setSearchText] = useState('');
const [selectedTag, setSelectedTags] = useState();

const handleSearchChange = (event) => {
    setBlogs(blogsData.filter((a) => 
        a.title.toLowerCase().includes(event.target.value.toLowerCase()) || a.preview.toLowerCase().includes(event.target.value.toLowerCase())
    ))
};

const handleTagClick = (tag) => {
    setBlogs(blogsData.filter((a) => 
        JSON.stringify(a.tags).toLowerCase().includes(tag.toLowerCase())
    ))
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
    <Navbar/>
    <div>
      <SectionTitle title="News & Articles" description="#1 Blog on theme marketing by Bodrum"/>
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
            {tags.map(i => (
                <button key={i} onClick={() => handleTagClick(i)}>{i}</button>
            ))}
        </div>
    </div>
    <div>
        {currentItems.map(i => (
            <BlogCard details={i}/>
        ))}
    </div>
    <div>
    {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
    </div>
    <div>
        <Footer/>
    </div>
  </div>
);
}

export default Blog;
