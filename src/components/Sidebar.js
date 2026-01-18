import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 

// Keep your image imports
import HomeIcon from "./Home.png"; 
import ExploreIcon from "./Explore.png"; 
import AboutIcon from "./About.webp"; 
import ExperienceIcon from "./Skill.webp"; 
import CertIcon from "./Certificate.jpg"; 
import ConnectIcon from "./connect.webp"; 

function Sidebar() {
  const location = useLocation(); 
  const active = location.pathname;
  
  // --- COLLAPSE STATE ---
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { icon: HomeIcon, label: "Home", path: "/" }, 
    { icon: ExploreIcon, label: "Explore", path: "/explore" }, 
  ];

  const portfolioItems = [
    { icon: AboutIcon, label: "About Me", path: "/about" }, 
    { icon: ExperienceIcon, label: "Experience", path: "/experience" }, 
    { icon: CertIcon, label: "Certifications", path: "/certifications" }, 
  ];

  const connectItem = { icon: ConnectIcon, label: "Connect Me", path: "/connect" };

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* --- TOGGLE BUTTON (The "Netflix" Slider) --- */}
      <div className="sidebar-toggle-area">
         <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {/* Simple Hamburger Icon Logic */}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
         </button>
      </div>

      <div className="nav-group">
        <div className="nav-section">
            {/* Show Title only if NOT collapsed */}
            {!collapsed && <div className="section-title">Main</div>}
            
            {navItems.map((item) => (
            <Link key={item.label} to={item.path} className={`nav-item ${active === item.path ? "active" : ""}`}>
                <span className="nav-icon">
                    <img src={item.icon} alt={item.label} />
                </span>
                <span className="nav-text">{item.label}</span>
            </Link>
            ))}
        </div>

        <div className="nav-section">
            {!collapsed && <div className="section-title">Portfolio</div>}
            {portfolioItems.map((item) => (
            <Link key={item.label} to={item.path} className={`nav-item ${active === item.path ? "active" : ""}`}>
                <span className="nav-icon">
                    <img src={item.icon} alt={item.label} />
                </span>
                <span className="nav-text">{item.label}</span>
            </Link>
            ))}
        </div>

        <div className="nav-section">
            {!collapsed && <div className="section-title">Reach Out</div>}
            <Link to={connectItem.path} className={`nav-item ${active === connectItem.path ? "active" : ""}`}>
                <span className="nav-icon">
                    <img src={connectItem.icon} alt={connectItem.label} />
                </span>
                <span className="nav-text">{connectItem.label}</span>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;