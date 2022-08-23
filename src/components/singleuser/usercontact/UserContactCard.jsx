import React from 'react'
import { Box } from '@material-ui/core'
import{ makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    contactWrapper:{
        display: "flex",
        alignItems: "center"
    }
}))


function UserContactCard() {
    const classes = useStyles()
  return (
    <Box className={classes.contactWrapper}>
        <Box>img</Box>
        <Box>text</Box>
    </Box>
  )
}

export default UserContactCard