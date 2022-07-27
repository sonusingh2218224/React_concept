import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("user");
    
    if (!login) {
      navigate("/register");
    }
  },[navigate]);

  return (
    <>
    <Component/>
    </>
)
}

export default Protected;
