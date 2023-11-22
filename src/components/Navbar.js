import React from "react";
import { FaPhone, FaTicketAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <span>Basic Technology</span>
      </div>

      <div>
        <a href="5">
          <FaPhone /> CallTeacher
        </a>
        <a href="6">
          <FaTicketAlt />
          Support
        </a>
      </div>
    </div>
  );
};

export default Navbar;
