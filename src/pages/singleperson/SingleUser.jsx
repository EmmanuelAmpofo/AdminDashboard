import React from "react";
import { Grid } from "@material-ui/core";
import IndividualUser from "../../components/singleuser/IndividualUser";
import Graph from "../../components/revenuegrapgh/Graph";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userSpending: {
    border: "1px solid",
  },
}));

function SingleUser({ title, className }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <IndividualUser />
        </Grid>
        <Grid item xs={8}>
          <Graph
            title="User Spending"
            className={`${classes.userSpending} ${className}`}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleUser;
