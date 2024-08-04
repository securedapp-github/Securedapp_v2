import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from "../sections/footer"
import BlogCard from '../components/blog-card';
import {blogsData, tags} from "./blog-data"
import Button1 from '../components/button-1';

const blogDetails = {
    title: "Remote Work is the Future, but Should You Go Remote?",
    preview :"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis. Donec ultricies, metus vitae bibendum consequat, tortor neque euismod lectus",
    tags: ["DAO", "DeFi"],
    Date: "Jan 1, 2024",
    Publisher : {
        name :"Lance Bogrol",
        image :"/images/why-choose-1.svg"
    },
    Index: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    Summary: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    Intro: "Quisque at odio semper, elementum leo sed, congue tellus. Proin nunc mauris, porttitor ut eleifend ut, consectetur ut dolor. In hac habitasse platea dictumst. Pellentesque ornare nulla ut quam blandit scelerisque.",
    Content: `
    <p>Quisque at odio semper, elementum leo sed, congue tellus. Proin nunc mauris, porttitor ut eleifend ut, consectetur ut dolor. In hac habitasse platea dictumst. Pellentesque ornare nulla ut quam blandit scelerisque. Suspendisse non orci id elit tempor rhoncus ac id nunc. Integer scelerisque at turpis sit amet faucibus. Etiam non euismod urna. Suspendisse vel ex justo. Vivamus posuere porttitor ante eu hendrerit.</p>
    <img width="200px" src="/images/blog-post.png" alt="image"/>
    <p>In lacinia sapien a libero accumsan facilisis. Donec vitae lorem massa. Aliquam tristique vehicula enim ut luctus. Vivamus gravida dignissim ligula, dictum laoreet elit malesuada ac. Praesent est justo, posuere a nisl porta, pharetra posuere lectus. Nulla velit odio, tincidunt vel metus a, viverra placerat ligula.</p>
    <p>Donec id nisl et risus volutpat tempor a eget mauris. Nullam velit eros, porttitor et urna sit amet, ullamcorper vestibulum magna. Quisque consequat arcu eros, lobortis faucibus purus facilisis vitae. Nulla at nunc non purus vehicula elementum.</p>
    <div class="blog-quote">
        <p>“ Suspendisse sagittis id lacus eget vulputate. Ut nec arcu ut sem molestie tincidunt luctus eget tellus “</p>
        <p>Parsely Montana</P>
    </div>
    <h4>Big heading for a new topic</h4>
    <p>Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam fringilla, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.</p>
    <ul>
        <li>Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam fringilla, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.</li>
        <li>Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.</li>
    </ul>
    <img width="200px" src="/images/blog-post.png" alt="image"/>
    <p>Quisque at odio semper, elementum leo sed, congue tellus. Proin nunc mauris, porttitor ut eleifend ut, consectetur ut dolor. In hac habitasse platea dictumst. Pellentesque ornare nulla ut quam blandit scelerisque. Suspendisse non orci id elit tempor rhoncus ac id nunc. Integer scelerisque at turpis sit amet faucibus. Etiam non euismod urna.</p>
    `
}

function BlogPost() {

const tagSet = new Set(blogDetails.tags);

var relatedArticles = blogsData.filter((blog) => blog.tags.some(tag => tagSet.has(tag)))

function IndexSummary({title, desc}) {
return(
    <div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
)
}

return (
  <div>
    <Navbar/>
    <div>
        <div>
            <h4>Relevant Brands!</h4>
            <Button1 value={"Solidity Shield"} link={""}/>
        </div>
        <div>
            <h4>Relevant Brands!</h4>
            <Button1 value={"Secure Watch"} link={""}/>
        </div>
    </div>
    <div>
        <div>
            <IndexSummary
              title={"Index"} 
              desc={blogDetails.Index.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
              ))}
            />
        </div>
        <div>
            <IndexSummary 
              title={"Quick Summary"} 
              desc={blogDetails.Summary.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
              ))}
            />
        </div>
    </div>
    <div>
    <div>
        <div>
            {blogDetails.tags.map(i => <span>{i+" "}</span>)}
        </div>
        <h3>{blogDetails.title}</h3>
        <p>{blogDetails.preview}</p>
        <hr/>
    </div>
    <div>
        <div>
            <div>
                <div>
                    <img src={blogDetails.Publisher.image}/>
                </div>
                <div>
                    <p>{blogDetails.Publisher.name}</p>
                    <p>{blogDetails.Date}</p>
                </div>
            </div>
            <div>
                <p>Share : </p>
                <Link to={""}>
                    <FontAwesomeIcon icon={faSun}/>
                </Link>
                <Link to={""}>
                    <FontAwesomeIcon icon={faSun}/>
                </Link>
                <Link to={""}>
                    <FontAwesomeIcon icon={faSun}/>
                </Link>
                <Link to={""}>
                    <FontAwesomeIcon icon={faSun}/>
                </Link>
            </div>
        </div>
        <p>{blogDetails.Intro}</p>
        <hr/>
    </div>
    <div dangerouslySetInnerHTML={{ __html: blogDetails.Content }}>
        {/** Post Content */}
    </div>
    <hr/>
    </div>
    <div>
        <h3>Related Posts</h3>
        <div>
            {
                relatedArticles.map(i => (
                    <BlogCard details={i}/>
                ))
            }
        </div>
    </div>
    <div>
        <Footer/>
    </div>
 </div>
)
}

export default BlogPost;