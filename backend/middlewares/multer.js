// Import the multer library for handling file uploads
import multer from "multer";

// Configure multer's storage options
const storage = multer.diskStorage({
  // Define the filename function to set the name of the uploaded file
  filename: function (req, file, cb) {
    // The file's original name is used as the filename
    // 'cb' is the callback function used to pass control back to multer
    cb(null, file.originalname); // The callback accepts two arguments: error (null if no error) and the filename
  },
});

// Initialize multer with the defined storage configuration
const upload = multer({ storage });

// Export the upload configuration to be used in other parts of the application
export default upload;
