import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { mainMenuData } from "./MenuData";
import logo from "../../assets/color.svg"
import { IoSunny } from "react-icons/io5";
import { RiMoonFill } from "react-icons/ri";

const sideBarWidth = 250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: sideBarWidth,
    cursor: "pointer",
  },
  paper: {
    width: sideBarWidth,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  menuIcon: {
    minWidth: "35px",
  },
  toggleWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  toggleBtn: {
    display: "flex",
    border: "1px solid gray",
    borderRadius: 50,
    margin: "0 10px",
  },
  light: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px",
    padding: "5px 7px",
    flex: 1,
    borderRadius: 50,
    border: "1px solid gray",
  },
  dark: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 50,
    margin: "2px",
    padding: "5px 7px",
  },
}));

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebarRoot}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.paper }}
      >
        <div className={classes.logo}>
            <img src={logo} alt="company"/>
        </div>
        <hr/>
        <List>
          {mainMenuData.map((menuItem) => (
            <ListItem key={menuItem.text}>
              <ListItemIcon className={classes.menuIcon}>
                <Typography>{menuItem.icon}</Typography>
              </ListItemIcon>
              <ListItemText className={classes.menuText}>
                <Typography>{menuItem.text}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Box className={classes.toggleWrapper}>
          <hr />
          <Box className={classes.toggleBtn}>
            <Box className={classes.light}>
              <IoSunny />
              <Typography>Light</Typography>
            </Box>
            <Box className={classes.dark}>
              <RiMoonFill />
              <Typography>Dark</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default SideBar;
