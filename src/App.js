import React, {useState} from 'react';
import {Switch, Route,} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Login from "./pages/Login";
import Blogoverview from "./pages/Blogoverview";
import Blogpost from "./pages/Blogpost";
import Topmenu from "./components/Topmenu"
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
   <>
            <Topmenu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated}/>
                </Route>

                <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                    <Blogoverview/>
                </PrivateRoute>

                <PrivateRoute exact path="/blog/:id" isAuth={isAuthenticated}>
                    <Blogpost/>
                </PrivateRoute>
            </Switch>
    </>
    );
}

export default App;
