import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.author.username}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Post;
