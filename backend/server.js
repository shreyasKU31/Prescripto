import express from "express"; // Importing Express library
import cors from "cors"; // Importing CORS to enable cross-origin requests
import dotenv from "dotenv"; // Importing dotenv to load environment variables
import connectDB from "./config/mongoDB.js"; // Importing MongoDB connection configuration
import connectCloudinary from "./config/cloudinary.js"; // Importing Cloudinary connection configuration
import adminRouter from "./routes/adminRoute.js"; // Importing admin routes for handling admin actions
import doctorRouter from "./routes/doctorRoute.js";

// app Config
const app = express(); // Creating an Express application instance
const port = process.env.PORT || 4000; // Setting the port to an environment variable or defaulting to 4000
dotenv.config(); // Configuring environment variables from a .env file
connectDB(); // Connecting to MongoDB database
connectCloudinary(); // Connecting to Cloudinary for media uploads

// Middleware
app.use(express.json()); // Middleware to parse incoming JSON request bodies
app.use(cors()); // Middleware to handle CORS (Cross-Origin Resource Sharing) for handling requests from different domains

// API endpoints
app.use("/api/admin", adminRouter); // Routes for admin-related API calls, e.g., adding a doctor
// Example: localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  // Simple root endpoint that confirms the API is working
  res.send("API Working");
});

// Starting the server
app.listen(port, () => console.log("Server is started on port", port)); // Listening on the specified port and logging a message when the server starts
