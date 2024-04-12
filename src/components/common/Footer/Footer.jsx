import React from "react";
import logo from "../../../assets/images/Footer/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div>
        <img id="f_logo" src={logo} alt="logo" />
      </div>
      <div>
        <span>Stores</span>
        <span>Elite</span>
        <span>Terms & Conditions</span>
        <span>Returns</span>
        <span>FAQs</span>
        <span>About Us</span>
      </div>
      <div>
      Copyright © 2024 SUGAR Cosmetics. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
