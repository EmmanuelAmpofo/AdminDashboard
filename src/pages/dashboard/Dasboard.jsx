import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Users from "./boardWidgets/Users";
import Orders from "./boardWidgets/Orders";
import Earning from "./boardWidgets/Earning";
import Balance from "./boardWidgets/Balance";
import TotalRevenue from "./revenuegrapgh/TotalRevenue";
import Graph from "./revenuegrapgh/Graph";

const useStyles = makeStyles((theme) => ({
  uppersection:{
    marginBottom: "1.875rem"
  }
}));

function Dasboard() {
  const classes = useStyles();
  return (
    <div className={classes.toplayout}>
      <Grid container spacing={2} className={classes.uppersection}>
        <Grid item xs={3}>
          <Users />
        </Grid>
        <Grid item xs={3}>
          <Orders />
        </Grid>
        <Grid item xs={3}>
          <Earning />
        </Grid>
        <Grid item xs={3}>
          <Balance />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={8}>
          <Graph />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dasboard;
