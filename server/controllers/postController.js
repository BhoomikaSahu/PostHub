const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "username"
  );
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

const createPost = async (req, res) => {
  const { title, body } = req.body;
  const post = new Post({
    title,
    body,
    author: req.user._id,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const updatePost = async (req, res) => {
  const { title, body } = req.body;
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    post.title = title;
    post.body = body;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost, getPostById };
