// Blog.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/blog-posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Latest Insights</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="blog-post-summary" style={{ borderBottom: "1px solid #ccc", marginBottom: "15px", paddingBottom: "15px" }}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 150)}...</p>
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No blog posts available at the moment. Please check back soon!</p>
      )}
    </div>
  );
}

export default Blog;
