import React, { useState } from "react";
import logo from "../images/logo.png";
import line from "../images/line.png";
import humcross from "../images/humcross.png";

export default function Navbar() {
  const [showhum, setshowhum] = useState(false);

  const handlehumclick = () => {
    setshowhum(!showhum);
  };
  return (
    <div>
      <img
        src={showhum ? humcross : line}
        onClick={handlehumclick}
        className="hum"
        alt="hum"
      />
      <nav className="larger">
        <div className="first">
          <img src={logo} className="logo" alt="logo" />
          <li>Home</li>
          <li>Find Doctors</li>
          <li>About Us</li>
        </div>
        <div className="second">
          <p className="navc">Login</p>

          <p className="navc">Sign-up</p>
        </div>
      </nav>
      {showhum && (
        <nav className="smaller">
          <span
            onClick={() => {
              setshowhum(false);
            }}
          >
            Home
          </span>
          <span
            onClick={() => {
              setshowhum(false);
            }}
          >
            Find Doctors
          </span>
          <span
            onClick={() => {
              setshowhum(false);
            }}
          >
            About Us
          </span>
          <span
            onClick={() => {
              setshowhum(false);
            }}
          >
            Login
          </span>
          <span
            onClick={() => {
              setshowhum(false);
            }}
          >
            Sign-up
          </span>
        </nav>
      )}
    </div>
  );
}
