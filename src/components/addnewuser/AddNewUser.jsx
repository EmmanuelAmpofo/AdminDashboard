import { Box } from "@material-ui/core";
import React from "react";
import MainCard from "../../utils/reusables/maincard/MainCard";
import AddNew from "./addnew/AddNew";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  add: {
    marginBottom: 20,
  },
}));

function AddNewUser() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.add}>
        <MainCard title="Add new user" />
      </Box>
      <MainCard children={<AddNew />} />
    </div>
  );
}

export default AddNewUser;
