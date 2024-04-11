import React from "react";
import logo from "../../../assets/images/Navbar/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" id="logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                id="stylish-input"
                type="search"
                placeholder='Try "Liquid Lipstick"'
                aria-label="Search"
              />
              <button class="btn btn-light" type="submit">
                <span class="material-symbols-outlined">search</span>
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
        <p>
          <span class="material-symbols-outlined">account_circle</span>
          <span>Login/Register</span>
        </p>
        <div>
          <span class="material-symbols-outlined">favorite</span>
          <span class="material-symbols-outlined">shopping_bag</span>
          <span class="material-symbols-outlined">star</span>
        </div>
      </div>
    </nav>    
  );
};

export default Navbar;
