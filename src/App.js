import Login from "./components/Login";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path ='/' component={Home}/>
                  <Route exact path ='/login' component={Login}/>
                  <Route exact path='/Dashboard' component={Dashboard} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
