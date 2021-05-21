import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";

export class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route to="/" component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
