import { Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({

}))

function CardContent({children}) {
  const classes =  useStyles()
  return (
    <Box className={classes.cardChildrenWrapper}>
      {children}
    </Box>
  )
}

export default CardContent