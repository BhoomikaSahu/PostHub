const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
// const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
