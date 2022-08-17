import { Box } from '@material-ui/core';
import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  progress: {
    width: "100px",
    height: "100px"
  },
  totalsalewrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px"
  },
  totalsale:{
    fontSize: "16px",
    color: theme.palette.global.grayLight,
    marginTop: "15px"
  },
  text:{
    fontSize: "16px",
    color: theme.palette.global.grayLight,
    textAlign: "center"
  }
}))


function CircleProgress() {
  const classes = useStyles()
  const percentage = 85;
  return (
    <div className={classes.totalwrapper}>
      <CircularProgressbar className={classes.progress} value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}/>
        <Box className={classes.totalsalewrapper}>
          <Box className={classes.totalsale}>Total sales made today</Box>
          <Box className={classes.amt}>$416</Box>
          <Box className={classes.text}>Previous transactions processing. Last payments may not be included.</Box>
        </Box>
    </div>
  )
}

export default CircleProgress