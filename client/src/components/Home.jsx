import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts");
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link> by{" "}
            {post.author.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
