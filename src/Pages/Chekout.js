import React from "react";
import { Button } from "react-bootstrap";


import Checkouts from "./Chekout/Checkouts";
import { useNavigate } from "react-router-dom";

function Chekout() {
  const navigate = useNavigate();

  const handleback = () => {
    navigate("/cart");
  };

  return (
    <>
      <Button onClick={handleback} className="m-2 " size="lg">
        Back
      </Button>
      
        <div >
          {" "}
          <Checkouts />
        </div>
      
    </>
  );
}

export default Chekout;
