import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
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
    //if show is true then append "nav__black class"
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="./img/netflix-logo.png"
        alt="netflix-logo"
      />
      <img
        className="nav__avatar"
        src="./img/netflix-avatar.png"
        alt="netflix-avatar"
      />
    </div>
  );
}

export default Nav;
