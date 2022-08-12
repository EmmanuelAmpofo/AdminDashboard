import { AppBar, Badge, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { SearchRounded, NotificationsNoneRounded } from "@material-ui/icons";
import logoImage from "../../assets/sancho.jpg"

const sideBarWidth = 250;
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.global.white,
    color: theme.palette.global.black,
    width: `calc(100% - ${sideBarWidth}px)`,
    borderBottom: '1px solid #80808017'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    border: `1px solid gray`,
    borderRadius: "5px",
    padding: "5px 10px",
  },
  searchinput: {
    border: "none",
    outline: "none",
  },
  searchicon: {
    cursor: "pointer",
  },
  notifprofile: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    width: "40px",
    borderRadius: '50%'
  },
  badge: {
    marginRight: '25px'
  }
}));

function TopBar() {
  const classes = useStyles();

  return (
    <Box className={classes.topBarWrapper}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.search}>
            <input placeholder="Search" className={classes.searchinput} />
            <SearchRounded className={classes.searchicon} />
          </Box>
          <Box className={classes.notifprofile}>
            <Badge badgeContent={4} color="error" className={classes.badge}>
              <NotificationsNoneRounded />
            </Badge>
            <img src={logoImage} alt="profile" className={classes.logoImage} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
