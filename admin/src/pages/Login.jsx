// Import necessary dependencies
import React, { useContext, useState } from "react"; // React and its hooks
import { assets } from "../assets/assets"; // Import assets (if used later in the component)
import { AdminContext } from "../context/AdminContext"; // Context to access admin-related data
import axios from "axios"; // For making HTTP requests
import { toast } from "react-toastify";

// Define the Login component
const Login = () => {
  // State to manage the login type (Admin or Doctor)
  const [state, setState] = useState("Admin");

  // States to store the email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Extract values from the AdminContext
  const { setAToken, backendUrl } = useContext(AdminContext);

  // Function to handle the form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      if (state === "Admin") {
        // If the user is an Admin, make an API request to the admin login endpoint
        const { data } = await axios.post(
          "http://localhost:4000" + "/api/admin/login",
          {
            email,
            password,
          }
        );

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token); // Log the received token (replace this with real handling, e.g., saving token)
        } else {
          toast.error(data.message);
        }
      } else {
        // Add handling for Doctor login here (if applicable)
      }
    } catch (error) {
      console.log(error); // Log any errors during the login process
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="text"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
