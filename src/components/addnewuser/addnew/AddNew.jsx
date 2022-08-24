import { Box, TextField } from "@material-ui/core";
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
  },
  imgSpan: {
    fontSize: "14px",
  },
  textfieldXXX: {
    borderBottom: "none !important",
    "& input::after":{
        borderBottom: "none !important",

    }
   
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
          <form action="">
            <label htmlFor="file" className={classes.imgLabel}>
              <InsertPhoto />
              <span className={classes.imgSpan}>Upload Image</span>
            </label>
            <input type="file" id="file" className={classes.fileInput}></input>
            <Box>
              <TextField placeholder="Name"  className={classes.textfieldXXXX + ' textfieldInput'} />
            </Box>
            <Box>
              <TextField placeholder="Name" />
            </Box>
            <Box>
              <TextField placeholder="Name" />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default AddNew;
