import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);
      setTitle(data.title);
      setBody(data.body);
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `/api/posts/${id}`,
        { title, body },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
