import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Services" },
    { id: 3, link: "HowWeWork", display: "How we work" },
    { id: 4, link: "Benefits" },
  ];

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        {links.map(({ id, link, display }) => (
          <li key={id} className="nav-item">
            <Link
              to={link}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              {display || link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
