// src/components/Post.jsx
import { useState, useEffect } from "react";
import axiosConfig from "../axiosConfig";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosConfig.get(`/api/posts/${id}`);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        By {post.author.username} on {new Date(post.createdAt).toLocaleString()}
      </p>
      <div className="prose prose-lg mx-auto">{post.body}</div>
    </div>
  );
};

export default Post;
