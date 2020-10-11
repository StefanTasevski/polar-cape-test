import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LoginFormContainer from "./containers/LoginFormContainer";
import HomeContainer from "./containers/HomeContainer";

export default class App extends Component {
  
  render() {
    let user;
    if(localStorage.getItem("user")!=null)
      user = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={user===undefined ? LoginFormContainer : HomeContainer} />

          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}