import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  cardfooter:{
    display: "flex",
    justifyContent: "space-between"
  }
}))


function CardFooter() {
  const classes = useStyles()
  return (
    <Box className={classes.cardfooter}>
      <Box className={classes.footerLink}>Footer link</Box>
      <Box className={classes.footericon}>Footer icon</Box>
    </Box>
  )
}

export default CardFooter