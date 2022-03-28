import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";



export default function Routers() {
  return <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/destination">
        <Destination />
      </Route>
      <Route exact path="/technology">
        <Technology />
      </Route>
      <Route exact path="/crew">
        <Crew />
      </Route>
    </Switch>
  </Router>
}