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
      <Route path="/">
        <Home />
      </Route>
      <Route path="/destination">
        <Destination />
      </Route>
      <Route path="/technology">
        <Technology />
      </Route>
      <Route path="/crew">
        <Crew />
      </Route>
    </Switch>
  </Router>
}