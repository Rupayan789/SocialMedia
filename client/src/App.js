import "./scss/main.scss"
import  Homepage from "./pages/homepage/homepage.jsx"
import {Switch,Route,Redirect } from 'react-router-dom'
import { Home } from "@material-ui/icons"
import LoginSignupPage from "./pages/loginSignupPage/loginsignuppage"
import ApplicationPage from "./pages/applicationPage/applicationPage"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path ="/register" component={LoginSignupPage}/>
        <Route path="/login" component={LoginSignupPage}/>
        <Route path="/application" component={ApplicationPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
