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
      <Link to="/lips"><span>LIPS</span></Link>
      <Link to="/eyes"><span>EYES</span></Link>  
      <Link to="/face"><span>FACE</span></Link>  
      <Link to="/nails"><span>NAILS</span></Link>  
      <Link to="/skincare"><span>SKINCARE</span></Link> 
      <Link to="/accessories"><span>ACCESSORIES</span></Link>  
      <Link to="/bestsellers"><span>BESTSELLERS</span></Link>        
      <Link to="/newlanches"><span>NEW LAUNCHES</span></Link>  
      <Link to="/offers"><span>OFFERS</span></Link>  
      <Link to="/blog"><span>BLOG</span></Link> 
      </div>
    </div>
  );
};

export default Navbar;
