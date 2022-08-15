import { Card } from '@material-ui/core'
import CardHeader from "../../reusables/maincard/CardHeader"
import React from 'react'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
 import {makeStyles} from '@material-ui/core'

 const useStyles = makeStyles((theme)=>({
  mainCard: {
    padding: "0.9375rem"
  }
 }))

function MainCard() {

  const classes = useStyles()
  return (
    <Card className={classes.mainCard}>
        <CardHeader/>
        <CardContent/>
        <CardFooter/>
    </Card>
  )
}

export default MainCard