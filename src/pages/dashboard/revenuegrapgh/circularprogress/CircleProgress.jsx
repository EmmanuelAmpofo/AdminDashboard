import { Box } from '@material-ui/core';
import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import {makeStyles} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

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
    fontSize: "14px",
    color: theme.palette.global.grayLight,
    textAlign: "center"
  },
  summary:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "15px"
  },
  summ:{
    display: "flex",
    flexDirection: "column",
    justifyContent :"center",
    alignItems: "center"
  },
  summaryheader: {
    color: theme.palette.global.grayLight,
    fontSize: "16px"
  },
  summarybody:{
    display: "flex",
    fontSize: "16px",
    paddingTop: "10px"
  },
  targetred: {
    color: theme.palette.global.red
  },
  targetgreen: {
    color: theme.palette.global.green
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
        <Box className={classes.summary}>
          <Box className={classes.summ}>
            <Box className={classes.summaryheader}>Target</Box>
            <Box className={`${classes.summarybody} ${classes.targetred}`}>
            <Box><KeyboardArrowDown/></Box>
            <Box>$12.4k</Box>
            </Box>
          </Box>
          <Box className={classes.summ}>
            <Box className={classes.summaryheader}>Last Week</Box>
            <Box className={`${classes.summarybody} ${classes.targetgreen}`}>
            <Box><KeyboardArrowUp/></Box>
            <Box className={classes.target}>$12.4k</Box>
            </Box>
          </Box>
          <Box className={classes.summ}>
            <Box className={classes.summaryheader}>Last Month</Box>
            <Box className={`${classes.summarybody} ${classes.targetgreen}`}>
            <Box><KeyboardArrowUp/></Box>
            <Box className={classes.target}>$12.4k</Box>
            </Box>
          </Box>
          
        </Box>
    </div>
  )
}

export default CircleProgress