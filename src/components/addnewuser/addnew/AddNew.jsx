import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { InsertPhoto } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  addNewContainer: {
    display: "flex",
    gap: 10,
  },
  imgWrapper: {
    flex: 1,
    textAlign: "center",
  },
  addNewImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  formWrapper: {
    flex: 2,
    display: "flex",
  },
  fileInput: {
    display: "none",
  },
  imgLabel: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: 5,
    width: "40%"
  },
  imgSpan: {
    fontSize: "14px",
  },
  underline: {
    "&&&:before": {
      transition: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  formTextField:{
    width: "100%"
  },
  form:{
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "space-around"
  },
  formInput: {
    width: "40%"
  },
  input: {
    width: "100%"
  },
  SendBtn: {
    width: "150px",
    padding: "10px",
    backgroundColor: theme.palette.global.teal,
    color: theme.palette.global.white,
    border: "none",
    marginTop: "10px"
  }
  
}));

function AddNew() {
  const classes = useStyles();
  return (
    <Box className={classes.addNewContainer}>
      <Box className={classes.imgWrapper}>
        <img
          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt="emptyAvatar"
          className={classes.addNewImg}
        />
      </Box>
      <Box className={classes.formWrapper}>
        <Box>
          <form action="" className={classes.form}>
            <label htmlFor="file" className={classes.imgLabel}>
              <InsertPhoto />
              <span className={classes.imgSpan}>Upload Image</span>
            </label>
            <input type="file" id="file" className={classes.fileInput}></input>
            <Box className={classes.formInput}>
              <TextField placeholder="Username"  className={classes.formTextField} InputProps={{classes}} fullWidth={true} />
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Full Name" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Email" type="mail" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Phone" type="number" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Password" type="password" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Address" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Box className={classes.formInput}>
              <TextField placeholder="Country" type="country" InputProps={{classes}} fullWidth={true}/>
            </Box>
            <Button variant="outlined" className={classes.SendBtn} >Add User</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default AddNew;
