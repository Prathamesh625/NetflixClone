import React, { useEffect, useState } from "react";
import logo from "./netf.png";
import "./Navbar.css";
import user from "./user (1).png";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="img" />
      <img className="nav_avatar" src={user} alt="img" />
    </div>
  );
}

export default Navbar;
