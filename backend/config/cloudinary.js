// Import the cloudinary library to interact with the Cloudinary API
import { v2 as cloudinary } from "cloudinary";

// Function to configure Cloudinary with credentials from environment variables
const connectCloudinary = async () => {
  // Configuring the Cloudinary API with credentials stored in environment variables
  cloudinary.config({
    // Cloud name used to identify the Cloudinary account
    cloud_name: process.env.CLOUDINARY_NAME, // Cloudinary cloud name
    // API key for accessing Cloudinary's API
    api_key: process.env.CLOUDINARY_API_KEY, // API key from Cloudinary account
    // API secret key used for authenticating API requests
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // API secret from Cloudinary account
  });
};

// Exporting the function to be used elsewhere in the project
export default connectCloudinary;
