import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;