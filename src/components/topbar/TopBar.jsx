import { AppBar, Box, Toolbar } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    appBar:{
        background: theme.palette.global.white,
        color: theme.palette.global.black
    }
}));

function TopBar() {
    const classes = useStyles()
  return (
    <Box className={classes.topBarWrapper}>
        <AppBar className={classes.appBar}>
            <Toolbar>

            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default TopBar