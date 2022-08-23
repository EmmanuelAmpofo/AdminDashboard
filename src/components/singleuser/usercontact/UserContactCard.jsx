import React from 'react'
import { Box } from '@material-ui/core'
import{ makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    contactWrapper:{
        display: "flex",
    },
    contactAvatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "20px"
    },
    contactText: {
        color: theme.palette.global.black,
        fontSize: "16px",
        lineHeight: 2
    }
}))


function UserContactCard() {
    const classes = useStyles()
  return (
    <Box className={classes.contactWrapper}>
        <Box className={classes.contactImg}>
            <img src="https://picsum.photos/200/300" alt="contact avatar" className={classes.contactAvatar} />
        </Box>
        <Box className={classes.contactText}>
            <Box>Jane Doe</Box>
            <Box> Email: janedoe@gmail.com</Box>
            <Box>Phone: +233 24123810</Box>
            <Box>Address: 27 Ama Akroma rd liberation crescent</Box>
            <Box>Country: Ghana</Box>
        </Box>
    </Box>
  )
}

export default UserContactCard