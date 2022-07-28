import React from "react";
import Slider from "@mui/material/Slider";

function Sliders() {
  return (
    <div style={{ width: 280, margin: 40 }}>
      <Slider color="primary" defaultValue={60}></Slider>
    </div>
  );
}

export default Sliders;
