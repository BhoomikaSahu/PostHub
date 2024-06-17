const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} = require("../controllers/postController");
const { protect } = require("../middlewares/auth");
const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.get("/:id", getPostById);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
