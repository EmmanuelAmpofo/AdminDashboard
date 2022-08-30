import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./themimg/Theme";
import MainLayout from "./mainLayout/MainLayout";
import { routes } from "./utils/routes/AppRoutes";

function App() {
  return (
    <div className="darkMode">
      <ThemeProvider theme={Theme}>
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
