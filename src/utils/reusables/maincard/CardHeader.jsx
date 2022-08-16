import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: '3px'
  },
  headiconpercent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    color: theme.palette.global.green
  },
  headicon: {
    marginRight: 0,
    fontSize: 20,
  },
  headtitle:{
    fontSize: "20px",
    color: theme.palette.global.grayLight
  },
 
}));

function CardHeader({ title, icon, percent, className }) {
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <Box className={`${classes.headtitle} ${className}`}>
        {title}
      </Box>
      <Box className={classes.headiconpercent}>
        <Box className={classes.headicon}>{icon}</Box>
        <Box className={classes.headpercent}>
         {percent}
        </Box>
      </Box>
    </Box>
  );
}

export default CardHeader;
