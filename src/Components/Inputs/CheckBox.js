import React, { useState } from "react";
import { Checkbox, Typography } from "@mui/material";




function CheckBox() {
  const [name, SetName] = useState([]);
  function getValue(e) {
    let data = name;
    data.push(e.target.value);
    console.log(data);
    SetName(data);
  }
  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h4">{name}</Typography>
      <Checkbox
        color="primary"
        value="anil"
        
        onChange={(e) => {
          getValue(e);
        }}
        
        
      ></Checkbox>
      <Checkbox
        color="primary"
        value="sonu"
        onChange={(e) => {
          getValue(e);
        }}
      ></Checkbox>
      <Checkbox
        color="primary"
        value="nitesh"
    
        onChange={(e) => {
          getValue(e);
        }}
      ></Checkbox>
    </>
  );
}

export default CheckBox;
