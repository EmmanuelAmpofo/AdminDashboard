import { Box} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnWrap: {
    color: theme.palette.global.black,
    border: "1px solid #aeaeae",
    padding: "10px",
    width: "100px",
    textAlign: "center",
    borderRadius: "4px",
    cursor: "pointer",
  },
}));

function Btn({ title }) {
  const classes = useStyles();
  return (
        <Box className={classes.btnWrap}>{title}</Box>
  );
}

export default Btn;
