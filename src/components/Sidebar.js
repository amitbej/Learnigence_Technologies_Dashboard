import React from "react";
import { FaUser, FaBell, FaClock, FaChess, FaEye, FaChartBar, FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaBars />
        
      </div>
      <div className="sidebar-item">
        <FaBell />
        
      </div>
      <div className="sidebar-item">
        <FaClock />
        
      </div>
      <div className="sidebar-item">
        <FaChess />
        
      </div>
      
      <div className="sidebar-item">
        <FaEye />
      </div>
      <div className="sidebar-item">
        <FaUser />
        
      </div>
      <div className="sidebar-item">
        <FaChartBar />
        
      </div>
      
    </div>
  );
};

export default Sidebar;
