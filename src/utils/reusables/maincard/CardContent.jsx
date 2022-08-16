import { Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  cardChildrenWrapper:{
    fontSize: 30,
    margin: "1.25rem  0",
    color: theme.palette.global.black,
    fontWeight: 600
  }
}))

function CardContent({children, title}) {
  console.log(title)
  const classes =  useStyles()
  return (
    <Box className={classes.cardChildrenWrapper}>
      {title === "Balance" || title === "Earnings" ? "$ "+ children : children}
    </Box>
  )
}

export default CardContent