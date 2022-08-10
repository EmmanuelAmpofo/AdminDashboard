import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ThemeProvider } from "@material-ui/core";
import Theme from "./themimg/Theme";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SideBar/>
    </ThemeProvider>  
  
  );
}

export default App;
