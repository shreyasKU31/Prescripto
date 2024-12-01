// Import mongoose to interact with MongoDB
import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
  // Event listener for when the connection to the database is successfully established
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  // Connecting to the MongoDB database using the URI from environment variables
  // Appending "/prescripto" to the URI to specify the database name
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
};

// Exporting the connectDB function to be used elsewhere in the project
export default connectDB;
