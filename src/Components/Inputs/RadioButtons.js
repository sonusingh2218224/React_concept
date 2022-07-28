import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";

function RadioButtons() {
    const [use, SetUse] =useState("male")
    function CheckFiekd(e){
        SetUse(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div>
      <span>Male</span>
      <Radio color="primary" value="male" onChange={CheckFiekd} checked={use==="male"}></Radio>
      <span>Female</span>
      <Radio color="secondary" value="female" onChange={CheckFiekd} checked={use==="female"}></Radio>
      <span>Female</span>
      <Radio color="secondary" value="extra" onChange={CheckFiekd} checked={use==="extra"}></Radio>
    </div>
  );
}

export default RadioButtons;
