import React from 'react'
import { makeStyles } from '@material-ui/core'
import MainCard from '../../utils/reusables/maincard/MainCard'

const useStyles = makeStyles((theme)=>({}))


function Dasboard() {

  const classes = useStyles()
  return (
    <div>
      <MainCard/>
    </div>
  )
}

export default Dasboard