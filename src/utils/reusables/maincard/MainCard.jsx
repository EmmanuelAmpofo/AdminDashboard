import { Card } from '@material-ui/core'
import CardHeader from "../../reusables/maincard/CardHeader"
import React from 'react'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
 import {makeStyles} from '@material-ui/core'

 const useStyles = makeStyles((theme)=>({
  mainCard: {
    padding: "0.9375rem"
  },
 }))

function MainCard({icon,percent, title, children, footerlink, footericon, className}) {

  const classes = useStyles()
  return (
    <Card className={classes.mainCard}>
        <CardHeader icon={icon} title={title} percent={percent} className={className}/>
        <CardContent children={children} title={title}/>
        <CardFooter footerlink={footerlink} footericon={footericon} title={title}/>
    </Card>
  )
}

export default MainCard