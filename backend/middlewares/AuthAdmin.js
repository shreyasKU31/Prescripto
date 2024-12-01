// Import the jsonwebtoken library to handle token verification
import jwt from "jsonwebtoken";

// Admin authentication middleware to check if the provided token is valid
const authAdmin = async (req, res, next) => {
  try {
    // Extract the admin token (atoken) from the request headers
    const { atoken } = req.headers;

    // If no token is provided in the headers, return an unauthorized error response
    if (!atoken) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again", // Message if no token is found
      });
    }

    // Verify the token using the JWT secret from environment variables
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    // Check if the decoded token matches the expected admin credentials (email + password)
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again", // Message if token is invalid
      });
    }

    // If the token is valid, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If there's any error in the try block (e.g., token verification fails), log the error and send a response
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Export the middleware to be used in other parts of the application
export default authAdmin;
