import React, { useContext } from "react";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { mainMenuData } from "./MenuData";
import logo from "../../assets/ventrinaLogo.svg";
import { IoSunny } from "react-icons/io5";
import { RiMoonFill } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";
import { DarkModeContext } from "../../utils/context/darkModeContext";

import "../../utils/reusables/btns/ToggleSwitch.css";


const sideBarWidth = "15.625rem";
const useStyles = makeStyles((theme) => ({
  sidebarRoot: {
    display: "flex",
  },
  drawer: {
    width: sideBarWidth,
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
    cursor: "pointer",
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.global.shadeGray,
    },
  },
  menuIcon: {
    minWidth: "35px",
  },
  toggleWrapper: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
  },
  toggleBtn: {
    display: "flex",
    border: "1px solid gray",
    borderRadius: 50,
    margin: "0 10px",
    cursor: "pointer",
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
  const navigate = useNavigate();

  // const [darkMode, setDarkMode] = useState(false)

  const { dispatch } = useContext(DarkModeContext);

  // const handleDarkMode = () => {
  //   setDarkMode(!darkMode)
  //   // window.location.reload()
  //   setTheme((prev)=>!prev)
  //   console.log(!darkMode)
  // }

  return (
    <div className={classes.sidebarRoot}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.paper }}
      >
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="company" />
          </Link>
        </div>
        <hr />
        <List>
          {mainMenuData.map((menuItem) => (
            <ListItem
              key={menuItem.text}
              className={classes.listItem}
              onClick={() => {
                navigate(menuItem.path);
              }}
            >
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
          <Box>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <IoSunny />
              </Grid>
              <Grid item>
                <div>
                  <label class="switch">
                    <input type="checkbox" onChange={()=> dispatch({type: "TOGGLE"})}/>
                    <span class="slider round"></span>
                  </label>
                </div>
              </Grid>
              <Grid item>
                <RiMoonFill />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default SideBar;
