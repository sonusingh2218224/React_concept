import React, { useRef } from "react";
import firestore from "../Config/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { Typography } from "@mui/material";

function Firebasepages() {
  const messageRef = useRef();
  const ref = collection(firestore, "message");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(messageRef.current.value);
    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="container "
      style={{ border: "2px solid grey", margin: "3rem", padding: "3rem" }}
    >
      <Typography variant="h3" style={{ textAlign: "center" }}>
        From
      </Typography>
      <form
        onSubmit={handlesubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
      
        
        <label>Address</label>
        <textarea type="text" ref={messageRef} /> 
        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default Firebasepages;
