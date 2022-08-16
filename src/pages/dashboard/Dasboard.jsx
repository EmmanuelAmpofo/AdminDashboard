import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Users from './boardWidgets/Users'
import Orders from './boardWidgets/Orders'
import Earning from './boardWidgets/Earning'
import Balance from './boardWidgets/Balance'

const useStyles = makeStyles((theme)=>({}))


function Dasboard() {

  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Users/>
        </Grid>
        <Grid item xs={3} >
          <Orders/>
        </Grid>
        <Grid item xs={3} >
          <Earning/>
        </Grid>
        <Grid item xs={3} >
          <Balance/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dasboard