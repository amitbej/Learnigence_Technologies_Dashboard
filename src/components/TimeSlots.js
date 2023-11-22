import React from 'react';
import { FaChalkboard, FaChalkboardTeacher, FaVideo, FaFileAlt, FaFolderOpen, FaVideoSlash } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="tsnavbar">
      <div className="navdiv">
        <ul>
          <li>
            <a href="2">
              <FaChalkboard /> Classroom
            </a>
          </li>
          <li>
            <a href="3">
              <FaChalkboardTeacher /> Whiteboard
            </a>
          </li>
          <li>
            <a href="4">
              <FaVideo /> Videos
            </a>
          </li>
          <li>
            <a href="4">
              <FaFileAlt /> Slide Show
            </a>
          </li>
          <li>
            <a href="4">
              <FaFolderOpen /> Documents
            </a>
          </li>
          <li>
            <a href="4">
              <FaVideoSlash /> Doc.Cam
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
