import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";

const Doctorslist = () => {
  const { doctors, aToken, getAllDoctors } = useContext(AdminContext);

  useEffect(() => {
    console.log("aToken:", aToken);
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  return <div></div>;
};

export default Doctorslist;
