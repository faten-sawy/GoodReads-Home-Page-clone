import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Details from "./Pages/Details/details";
import MyBooks from "./Pages/MyBooks/myBooks";
import Nav from "../src/Components/NavBar/nav";

import Home from "./Pages/Home/home";

function BooksApp() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details:id" component={Details} />
        <Route path="/myBooks" component={MyBooks} />
      </Switch>
    </Router>
  );
}
export default BooksApp;
