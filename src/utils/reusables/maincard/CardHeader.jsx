import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headiconpercent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headicon: {
    marginRight: 10,
  },
}));

function CardHeader({ title, icon, percent }) {
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <Box className={classes.headtitle}>
        <Typography>{title}</Typography>
      </Box>
      <Box className={classes.headiconpercent}>
        <Box className={classes.headicon}>{icon}</Box>
        <Box className={classes.headpercent}>
          <Typography>{percent}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CardHeader;
