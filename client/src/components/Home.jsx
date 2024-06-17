import { useState, useEffect } from "react";
import axiosConfig from "../axiosConfig";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axiosConfig.get("/api/posts");
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
