// src/components/Home.jsx
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
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post._id}
            className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to={`/post/${post._id}`}
              className="text-lg font-semibold text-indigo-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">by {post.author.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
