import express from "express"; // Importing the Express library
import {
  addDoctor,
  allDoctors,
  loginAdmin,
} from "../controllers/adminControler.js"; // Importing controller functions for adding a doctor and admin login
import upload from "../middlewares/multer.js"; // Importing file upload middleware
import authAdmin from "../middlewares/AuthAdmin.js"; // Importing admin authentication middleware

const adminRouter = express.Router(); // Creating a new Express router instance

// POST route for adding a doctor with admin authentication and image upload
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

// POST route for admin login
adminRouter.post("/login", loginAdmin);

adminRouter.post("/all-doctors", authAdmin, allDoctors);

export default adminRouter; // Exporting the admin router for use in other parts of the application
