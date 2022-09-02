import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import MainLayout from "./mainLayout/MainLayout";
import { routes } from "./utils/routes/AppRoutes";
import { lightTheme, darkTheme } from "./themimg/Theme";
import { useState } from "react";

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className="darkMode">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Router>
          <MainLayout>
            <Routes>
              <Route exact path={"/"}>
                {routes.map(({ path, element, nested }, key) => (
                  <Route exact path={path} element={element} key={key}></Route>
                ))}
              </Route>
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
