import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { makeStyles } from '@material-ui/styles'
import TopBar from '../components/topbar/TopBar'

const useStyles = makeStyles((theme)=>{
    
})

function MainLayout({children}) {
    const classes = useStyles()
  return (
    <div className={classes.mainLayout}>
        <SideBar/>
        <TopBar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout