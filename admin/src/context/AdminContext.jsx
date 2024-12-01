import React, { createContext, useState } from "react";

// Create a context for the admin state management
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  // State to hold the authentication token for the admin
  const [aToken, setAToken] = useState("");

  // URL for the backend, obtained from environment variables
  const backEndUrl = "http://localhost:4000";
  console.log(backEndUrl);

  // Value to be provided to components that consume this context
  const value = {
    aToken,
    setAToken,
    backEndUrl,
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
