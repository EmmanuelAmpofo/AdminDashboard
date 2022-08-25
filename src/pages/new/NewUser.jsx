import { Box } from '@material-ui/core'
import React from 'react'
import AddNew from '../../components/addnewuser/AddNew'

function New({title, inputs}) {
  return (
    <Box>
      <AddNew title={title} inputs={inputs}/>
    </Box>
  )
}

export default New