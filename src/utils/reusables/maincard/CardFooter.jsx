import React from "react";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cardfooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center"
  },
  footericon: {
    color: theme.palette.global.red,
    background: "rgba(255, 0, 0, 0.2)",
    borderRadius: "15%",
    padding: "0.3125rem",
    fontSize: "0.3125rem",
  },
  orders: {
    color: theme.palette.global.goldenrod,
    background: "rgba(218, 165, 32, 0.2)",
    borderRadius: "15%",
    padding: "0.3125rem",
    fontSize: "0.3125rem",
  },
  earnings: {
    color: "green",
    background: "rgba(0, 128, 0, 0.2)",
    borderRadius: "15%",
    padding: "0.3125rem",
    fontSize: "0.3125rem",
  },
  balance: {
    color: "purple",
    background: "rgba(128, 0, 128, 0.2)",
    borderRadius: "15%",
    padding: "0.3125rem",
    fontSize: "0.3125rem",
  },
  footerLink: {
    color: theme.palette.global.black,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function CardFooter({ footerlink, footericon, title }) {
  const classes = useStyles();
  return (
    <Box className={classes.cardfooter}>
      <Box className={classes.footerLink}>{footerlink}</Box>
      <Box
        className={`
      ${title === "Orders" ? `${classes.orders}` : 
      title === "Earnings" ? `${classes.earnings}`:
      title === "Balance" ? `${classes.balance}`: 
      title === "Users" ? `${classes.footericon}` : null }`}
      >
        {footericon}
      </Box>
    </Box>
  );
}

export default CardFooter;
