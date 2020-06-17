
import React from "react";
import NavBar from "./components/NavBar";
import { Router, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DoASurvey from "./components/DoASurvey";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/survey" component={DoASurvey} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;