import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// Create a context for the admin state management
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  // State to hold the authentication token for the admin
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );

  const [doctors, setDoctors] = useState([]);

  // URL for the backend, obtained from environment variables
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/admin/change-avilability",
        { docId },
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      getAllDoctors();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Value to be provided to components that consume this context
  const value = {
    aToken,
    setAToken,
    backEndUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    // Provide the context value to children components
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

// Export the context provider for use in other parts of the application
export default AdminContextProvider;
