import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Login from "./pages/Login";
import Blogoverview from "./pages/Blogoverview";
import Blogpost from "./pages/Blogpost";
import Topmenu from "./pages/Topmenu"

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <Router>
        <Topmenu />
        <Switch>
            <Route exact path="/">
      <Home />
            </Route>
        </Switch>

        <Switch>
            <Route path="/login">
            <Login />
            </Route>
        </Switch>

        <Switch>
            <Route exact path="/blogposts">
            <Blogoverview />
            </Route>
        </Switch>

        <Switch>
            <Route path="/blogposts/:blogId">
            <Blogpost />
            </Route>
        </Switch>

    </Router>
  );
}

export default App;
