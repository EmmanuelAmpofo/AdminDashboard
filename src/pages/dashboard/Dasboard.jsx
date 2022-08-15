import React from 'react'
import CardFooter from '../../utils/reusables/maincard/CardFooter'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({}))


function Dasboard() {

  const classes = useStyles()
  return (
    <div>
      <CardFooter/>
    </div>
  )
}

export default Dasboard