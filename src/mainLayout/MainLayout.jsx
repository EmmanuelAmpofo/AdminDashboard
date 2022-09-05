import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { makeStyles } from '@material-ui/styles'
import TopBar from '../components/topbar/TopBar'
import { Paper } from '@material-ui/core'

const sideBarWidth = 250

const useStyles = makeStyles((theme)=>({
  mainLayout:{
    display: 'flex',
    height: "100vh",

  },
  childWrap: {
    width: `calc(100% - ${sideBarWidth}px)`,
    background: theme.palette.global.dashboardBackground,
    padding: "1.875rem",
    height: "100vh",

  },
    toolbarHeight: {
      ...theme.mixins.toolbar
    }
}));

function MainLayout({children, check, change,setTheme}) {
    const classes = useStyles()
  return (
    <Paper className={classes.mainLayout}>
        <SideBar setTheme = {setTheme}/>
        <TopBar/>
        <Paper className={classes.childWrap}>
          <div className={classes.toolbarHeight}></div>
            {children}
        </Paper>
    </Paper>
  )
}

export default MainLayout