import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 

function Sidebar() {
  const location = useLocation(); 
  const active = location.pathname;
  
  // --- COLLAPSE STATE ---
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // --- ICONS (Clean SVG Code - No Installs Needed) ---
  const Icons = {
    Home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    Explore: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    About: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    Experience: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    Certifications: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    Connect: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    )
  };

  const navItems = [
    { icon: Icons.Home, label: "Home", path: "/" }, 
    { icon: Icons.Explore, label: "Explore", path: "/explore" }, 
  ];

  const portfolioItems = [
    { icon: Icons.About, label: "About Me", path: "/about" }, 
    { icon: Icons.Experience, label: "Experience", path: "/experience" }, 
    { icon: Icons.Certifications, label: "Certifications", path: "/certifications" }, 
  ];

  const connectItem = { icon: Icons.Connect, label: "Connect Me", path: "/connect" };

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* --- TOGGLE BUTTON (The "Netflix" Slider) --- */}
      <div className="sidebar-toggle-area">
         <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
         </button>
      </div>

      <div className="nav-group">
        <div className="nav-section">
            {!collapsed && <div className="section-title">Main</div>}
            
            {navItems.map((item) => (
            <Link key={item.label} to={item.path} className={`nav-item ${active === item.path ? "active" : ""}`}>
                {/* DIRECT SVG RENDER INSTEAD OF IMG TAG */}
                <span className="nav-icon svg-icon">
                    {item.icon}
                </span>
                <span className="nav-text">{item.label}</span>
            </Link>
            ))}
        </div>

        <div className="nav-section">
            {!collapsed && <div className="section-title">Portfolio</div>}
            {portfolioItems.map((item) => (
            <Link key={item.label} to={item.path} className={`nav-item ${active === item.path ? "active" : ""}`}>
                <span className="nav-icon svg-icon">
                    {item.icon}
                </span>
                <span className="nav-text">{item.label}</span>
            </Link>
            ))}
        </div>

        <div className="nav-section">
            {!collapsed && <div className="section-title">Reach Out</div>}
            <Link to={connectItem.path} className={`nav-item ${active === connectItem.path ? "active" : ""}`}>
                <span className="nav-icon svg-icon">
                    {connectItem.icon}
                </span>
                <span className="nav-text">{connectItem.label}</span>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;