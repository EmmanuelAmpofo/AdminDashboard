import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Link } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  cardfooter:{
    display: "flex",
    justifyContent: "space-between"
  },
  footericon: {
    color: 'crimson',
    background: 'rgba(255, 0, 0, 0.2)',
    borderRadius: "50%",
    padding: "5px",
    fontSize: "5px"
  },
  footerLink:{
    color: theme.palette.global.black,
    textDecoration: 'underline',
    "&:hover":{
      cursor: "pointer",
    }
  }
}))


function CardFooter({footerlink, footericon}) {
  const classes = useStyles()
  return (
    <Box className={classes.cardfooter}>
      <Box className={classes.footerLink}>
        {footerlink}
      </Box>
      <Box className={classes.footericon}>{footericon}</Box>
    </Box>
  )
}

export default CardFooter