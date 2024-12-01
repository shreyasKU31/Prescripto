// Import necessary libraries and modules
import validator from "validator"; // For validating inputs like email
import bcrypt from "bcrypt"; // For hashing passwords securely
import { v2 as cloudinary } from "cloudinary"; // For uploading files (e.g., images) to Cloudinary
import doctorModel from "../models/doctorModel.js"; // Importing the doctor model for database operations
import jwt from "jsonwebtoken"; // For generating JSON Web Tokens (JWTs)

// API to add a new doctor
const addDoctor = async (req, res) => {
  try {
    // Destructure data from the request body
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    // Get the uploaded image file from the request
    const imageFile = req.file;

    // Check for missing fields
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password strength (minimum length: 8 characters)
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hash the doctor's password using bcrypt
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt

    // Upload the doctor's profile image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image", // Specify the type of resource being uploaded
    });
    const imageUrl = imageUpload.secure_url; // Get the secure URL of the uploaded image

    // Construct the doctor's data object
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address), // Parse address if it's passed as a JSON string
      date: Date.now(), // Add the current date and time
    };

    // Save the doctor's data to the database
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    // Send a success response
    res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error); // Log the error to the console
    res.json({ success: false, message: error.message }); // Send an error response
  }
};

// API to handle admin login
const loginAdmin = async (req, res) => {
  try {
    // Destructure login credentials from the request body
    const { email, password } = req.body;
    console.log(email, password); // Log the input credentials (useful for debugging)

    // Verify the provided credentials against environment variables
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Generate a JWT token if credentials are valid
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token }); // Send success response with the token
    } else {
      res.json({ success: false, message: "Invalid credentials" }); // Send an error response for invalid credentials
    }
  } catch (error) {
    console.log(error); // Log the error to the console
    res.json({ success: false, message: error.message }); // Send an error response
  }
};

// Export the functions for use in other modules
export { addDoctor, loginAdmin };
