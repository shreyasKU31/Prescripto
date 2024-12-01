// Import mongoose to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the doctor collection
const doctorSchema = new mongoose.Schema(
  {
    // The name of the doctor (required)
    name: { type: String, required: true },

    // The email of the doctor (required and must be unique)
    email: { type: String, required: true, unique: true },

    // The password for the doctor (required)
    password: { type: String, required: true },

    // The URL of the doctor's image (required)
    image: { type: String, required: true },

    // The speciality of the doctor (required)
    speciality: { type: String, required: true },

    // The degree of the doctor (required)
    degree: { type: String, required: true },

    // The doctor's experience (required)
    experience: { type: String, required: true },

    // A brief about the doctor (required)
    about: { type: String, required: true },

    // Availability status of the doctor (default is true)
    available: { type: Boolean, default: true },

    // The doctor's consultation fees (required)
    fees: { type: Number, required: true },

    // The address of the doctor (required, stored as an object)
    address: { type: Object, required: true },

    // Date of creation (usually used for registration or creation date)
    date: { type: Number, required: true },

    // Object to keep track of booked slots (defaults to an empty object)
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false } // Prevent mongoose from removing empty objects (e.g., slots_booked)
);

// Define the model for the doctor schema, checking if it already exists
const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

// Export the doctor model for use in other parts of the application
export default doctorModel;
