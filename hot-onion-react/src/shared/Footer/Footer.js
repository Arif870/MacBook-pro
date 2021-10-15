import React from "react";
import logo from "../../utilities/images/footerlogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-dark text-light text-center pt-3 py-2 footer mt-5 ">
      <img src={logo} alt="" />
      <p>All right Reserved &copy; redonion</p>
    </div>
  );
}
