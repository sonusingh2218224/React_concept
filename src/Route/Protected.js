import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("user");
    
    
    if (!login) {
      navigate("/login");
    }
  },[navigate]);

  return (
    <>
    <Component/>
    </>
)
}

export default Protected;
// import { Navigate, Outlet } from "react-router-dom";
// const Protected = ({ isLoggedIn }) => {
//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// };
// export default Protected;
