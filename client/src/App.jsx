import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import axiosConfig from "./axiosConfig";
import Preline from "./components/Preline";
// import "preline/preline";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axiosConfig.get("/api/users/profile", config);
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <Router>
      <Preline />
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
