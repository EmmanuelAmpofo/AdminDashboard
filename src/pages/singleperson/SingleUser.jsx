import React from "react";
import { Grid } from "@material-ui/core";
import IndividualUser from "../../components/singleuser/IndividualUser";
import Graph from "../../components/revenuegrapgh/Graph";
import { makeStyles } from "@material-ui/core";
import DashboardTable from "../../components/dashboardtable/DashboardTable";

const useStyles = makeStyles((theme) => ({
  userSpending: {
    border: "1px solid",
  },
  latestTransaction:{
    marginTop: 13
  }
}));

function SingleUser({ className }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <IndividualUser />
        </Grid>
        <Grid item xs={8}>
          <Graph
            title="User Spending (Last 6 Months)"
            aspect={4.1 / 1}
            className={`${classes.userSpending} ${className}`}
          />
        </Grid>
        <Grid item xs={12} className={classes.latestTransaction}>
          <DashboardTable title="Latest Transactions" className={`${classes.userSpendingTable} ${className}`}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleUser;
