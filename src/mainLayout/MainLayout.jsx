import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { makeStyles } from '@material-ui/styles'
import TopBar from '../components/topbar/TopBar'

const sideBarWidth = 250

const useStyles = makeStyles((theme)=>({
  mainLayout:{
    display: 'flex'
  },
  childWrap: {
    width: `calc(100% - ${sideBarWidth}px)`,
    background: theme.palette.global.dashboardBackground,
    padding: "1.875rem"
  },
    toolbarHeight: {
      ...theme.mixins.toolbar
    }
}));

function MainLayout({children}) {
    const classes = useStyles()
  return (
    <div className={classes.mainLayout}>
        <SideBar/>
        <TopBar/>
        <div className={classes.childWrap}>
          <div className={classes.toolbarHeight}></div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout