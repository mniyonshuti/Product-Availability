import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import ProductDetail from "./product-detail";
import SearchLocationId from "./search-location-id";
import SearchProductId from "./search-product-id";
import SearchZipCode from "./search-zipdcode";
import Home from "./home";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/product-id"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Find Product
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/product-id">
                    By Product Id
                  </Link>
                  <Link className="dropdown-item" to="/location-id">
                    By Location Id
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/zipcode">
                    By ZipCode
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" aria-disabled="true">
                  About Us
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                disabled={true}
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <Route path="/ " exact Component={Home}></Route>
        <Route path="/products" exact Component={ProductDetail}></Route>
        <Route path="product-id " exact Component={SearchProductId}></Route>
        <Route path="/ location-id" exact Component={SearchLocationId}></Route>
        <Route path="/zipcode " exact Component={SearchZipCode}></Route>
      </div>
    );
  }
}

export default NavBar;
