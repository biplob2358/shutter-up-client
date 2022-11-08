import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-400 text-base-content mt-4">
        <div>
          <img className="w-24" src={logo} alt="logo" />
          <p>
            Shutter Up
            <br />
            Providing reliable Photoshoot since 2020
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>

        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
