import React, { Component } from "react";
import axios from "axios";

class HomeComponent extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8080/product/unique").then((result) => {
      console.log(result);
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <div>
        <h1>HomeComponent</h1>
      </div>
    );
  }
}

export default HomeComponent;
