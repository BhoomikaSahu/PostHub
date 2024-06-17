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
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.author.username}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Post;
