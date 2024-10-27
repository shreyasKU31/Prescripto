import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app Config
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/admin", adminRouter);
// localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server is started", port));
