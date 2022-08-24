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
          <Route exact path={"/"} >
            {routes.map(({path, element,nested}, key)=>
              <Route exact path={path} element={element} key={key}>
                {/* {nested.length > 0 && nested.map((value,idx)=> {
                  console.log(value)
                  return <Route exact path={value.path} element={value.element} key={idx}/>
                })} */}
              </Route>
            )}
          </Route>           
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>  
  
  );
}

export default App;
