import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ThemeProvider } from "@material-ui/core";
import Theme from "./themimg/Theme";
import MainLayout from "./mainLayout/MainLayout";
import {routes} from "./utils/routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <MainLayout>
          <Routes>
            {routes.map(({path, element}, key)=>
              <Route exact path={path} element={element} key={key}/>
            )}
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>  
  
  );
}

export default App;
