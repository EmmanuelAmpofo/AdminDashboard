import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paper, ThemeProvider } from "@material-ui/core";
import MainLayout from "./mainLayout/MainLayout";
import { routes } from "./utils/routes/AppRoutes";
import { lightTheme, darkTheme } from "./themimg/Theme";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./utils/context/darkModeContext";



function App() {
  // const [themeSelector, setThemeSelector] = useState(false);
  const {darkMode} = useContext(DarkModeContext);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(()=>{
    setIsDarkMode(darkMode)
    console.log(darkMode)
  },[darkMode])
  
  return (
    <Paper
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router>
          {/* <MainLayout setTheme={setThemeSelector}> */}
          <MainLayout>
            <Routes>
              <Route exact path={"/"}>
                {routes.map(({ path, element }, key) => (
                  <Route exact path={path} element={element} key={key} ></Route>
                ))}
              </Route>
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </Paper>
  );
}

export default App;
