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
      const { datas } = await axios.post(
        "http://localhost:4000/api/admin/all-doctors",
        {},
        { headers: aToken }
      );

      if (datas.success) {
        setDoctors(datas.doctors);
      } else {
        toast.error(datas.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  // Value to be provided to components that consume this context
  const value = {
    aToken,
    setAToken,
    backEndUrl,
    doctors,
    getAllDoctors,
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
