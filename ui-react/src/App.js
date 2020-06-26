import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter } from "react-router-dom";
import ProductDetail from "./components/product-detail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar></NavBar>
          <Home></Home>
          <ProductDetail></ProductDetail>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
