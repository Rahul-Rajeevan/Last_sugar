import React from "react";
import logo from "../../../assets/images/Navbar/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logo" id="logo" />
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 search"
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
            <span>
              {" "}
              <Link to="/login">Login/Register</Link>
            </span>
          </p>
          <div>
            <span class="material-symbols-outlined">favorite</span>
            <span class="material-symbols-outlined">shopping_bag</span>
            <span class="material-symbols-outlined">star</span>
          </div>
        </div>
      </nav>
      <div id="nav_sub">
        <span>LIPS</span>
        <span>EYES</span>
        <span>FACE</span>
        <span>NAILS</span>
        <span>SKINCARE</span>
        <span>ACCESSORIES</span>
        <span>GIFTING</span>
        <span>BESTSELLERS</span>
        <span>NEW LAUNCHES</span>
        <span>OFFERS</span>
        <span>BLOG</span>
      </div>
    </div>
  );
};

export default Navbar;
