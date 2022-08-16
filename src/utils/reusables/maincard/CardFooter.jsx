import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Link } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  cardfooter:{
    display: "flex",
    justifyContent: "space-between"
  }
}))


function CardFooter({footerlink, footericon}) {
  const classes = useStyles()
  return (
    <Box className={classes.cardfooter}>
      <Box className={classes.footerLink}>
        <Link href="https://google.com" target="_blank" >{footerlink}</Link> 
      </Box>
      <Box className={classes.footericon}>{footericon}</Box>
    </Box>
  )
}

export default CardFooter