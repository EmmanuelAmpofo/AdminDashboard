import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paper, ThemeProvider } from "@material-ui/core";
import MainLayout from "./mainLayout/MainLayout";
import { routes } from "./utils/routes/AppRoutes";
import { lightTheme, darkTheme } from "./themimg/Theme";
import { useState } from "react";



function App() {
  const [themeSelector, setThemeSelector] = useState(false);
  
  return (
    <Paper className="darkMode">
      <ThemeProvider theme={themeSelector ? darkTheme : lightTheme}>
        <Router>
          <MainLayout setTheme={setThemeSelector}>
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
