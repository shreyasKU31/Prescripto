import mongoose from "mongoose";

// Define the schema for the 'user' collection
const userSchema = new mongoose.Schema({
  // 'name' is a required string field
  name: { type: String, required: true },

  // 'email' is a required string, must be unique
  email: { type: String, required: true, unique: true },

  // 'password' is a required string field
  password: { type: String, required: true },

  // 'image' field to store user's profile picture, default is a base64-encoded PNG
  image: {
    type: String,
    default:
      "data:image/png;base64,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",
  },

  // 'phone' is a required string
  phone: { type: String, required: true },

  // 'date' stores the registration date, default is the current date
  date: { type: Date, default: Date.now },
});

// Create and export the model from the schema
const User = mongoose.model("user", userSchema);

export default User;
