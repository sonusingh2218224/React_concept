import React from "react";
import { Grid } from "@mui/material";

function Grids() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} xs={12} style={{ backgroundColor: "blue" }}>
          block1
        </Grid>
        <Grid item lg={3} md={6} xs={12} style={{ backgroundColor: "yellow" }}>
          block2
        </Grid>
        <Grid item lg={3} md={6} xs={12} style={{ backgroundColor: "black" }}>
          block3
        </Grid>
        <Grid item lg={3} md={4} xs={12} style={{ backgroundColor: "yellow" }}>
          block4
        </Grid>
      </Grid>
    </div>
  );
}

export default Grids;
