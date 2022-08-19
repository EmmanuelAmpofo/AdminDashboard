import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Users from "../../components/boardWidgets/Users"
import Orders from "../../components/boardWidgets/Orders"
import Balance from "../../components/boardWidgets/Balance"
import Earning from "../../components/boardWidgets/Earning"
import TotalRevenue from "../../components/revenuegrapgh/TotalRevenue";
import Graph from "../../components/revenuegrapgh/Graph";
import DashboardTable from "../../components/dashboardtable/DashboardTable";

const useStyles = makeStyles((theme) => ({
  uppersection:{
    marginBottom: "1rem"
  },
  middlesection: {
    marginBottom: "1rem"
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
      <Grid container spacing={2} className={classes.middlesection}>
        <Grid item xs={4}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={8}>
          <Graph />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <DashboardTable/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dasboard;
