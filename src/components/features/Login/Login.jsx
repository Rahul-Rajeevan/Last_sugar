import React from "react";
import image from "../../../assets/images/Login/image.png";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="containers">
    <div class="login">      
        <img src={image} alt="" />
        <div>
        <Link to="/"><span class="material-symbols-outlined">arrow_back</span></Link>
          <h5>Login/Sign Up Using Phone</h5>
          <input
            type="tel"
            name="phone"
            value="+91"
            placeholder="Enter Mobile Number"
          />
          <p>
            Registering for this site allows you to access your order status and
            history. Just fill in the above fields, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </p>
          <button type="button" class="btn btn-secondary" disabled>
            SEND ME OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
