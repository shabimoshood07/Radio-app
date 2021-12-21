import React, { useState } from "react";

import logo from "./logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "./Data";
import { Link } from "react-router-dom";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  // useEffect(() => {
  //   setShowLinks(false);
  // });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
