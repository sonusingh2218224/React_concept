
import { Container, Grid, Typography } from "@mui/material";

import React from "react";

function Editing() {
  return (
    <div>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "white",
          color: "blue",
          width: "100%",
          height: "30vh",
        }}
      > 
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Welcome{" "}
        </Typography>
        <Grid container spacing={2} style={{marginTop:"4px"}}>
          <Grid
            item
            lg={3}
            xs={12}
            md={6}
            style={{ width: "30%", height: "20vh" , border:"2px solid red"}}
          >
           
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
            md={6}
            style={{ width: "30%", height: "20vh" ,  border:"2px solid red"}}
          >
            PIXLERLAB
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
            md={6}
            style={{ width: "30%", height: "20vh"  , border:"2px solid red"}}
          >
            PIXLERLAB
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
            md={6}
            style={{ width: "30%", height: "20vh" , border:"2px solid red"}}
          >
            PIXLERLAB
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Editing;
