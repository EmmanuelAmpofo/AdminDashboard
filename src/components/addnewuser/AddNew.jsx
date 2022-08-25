import { Box } from "@material-ui/core";
import React from "react";
import MainCard from "../../utils/reusables/maincard/MainCard";
import Add from "./addnew/Add";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  add: {
    marginBottom: 20,
  },
}));

function AddNew({title, inputs}) {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.add}>
        <MainCard title={title} />
      </Box>
      <MainCard children={<Add inputs={inputs}/>} />
    </div>
  );
}

export default AddNew;
