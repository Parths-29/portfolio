import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../img1.jpg";

function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // --- CLOCK LOGIC (Moved from Sidebar) ---
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // ----------------------------------------

  const searchablePages = [
    { name: "About Me", path: "/about" },
    { name: "Skills / Explore", path: "/explore" },
    { name: "Certifications", path: "/certifications" },
    { name: "Experience / Timeline", path: "/experience" },
    { name: "Connect Me", path: "/connect" },
    { name: "Home", path: "/" },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = searchablePages.filter((page) =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="glass-header">
      <div className="header-content-wrapper">
        
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")} style={{cursor:'pointer'}}>
          <div className="logo-icon">P</div>
          <span className="logo-text">Portfolio</span>
        </div>

        {/* Search Bar */}
        <div className="search-container" style={{position: 'relative'}}>
          <input
            type="text"
            className="search-box cyber-search-box"
            placeholder="Search command..."
            value={query}
            onChange={handleSearch}
          />
          {suggestions.length > 0 && (
            <div className="search-dropdown">
              {suggestions.map((page) => (
                <div key={page.name} className="search-item" onClick={() => handleSelect(page.path)}>
                  <span className="search-arrow">></span> {page.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE: CLOCK & PROFILE --- */}
        <div className="header-right-panel">
            {/* THE NEW CLOCK WIDGET */}
            <div className="header-clock">
                <span className="live-dot">●</span>
                <span className="header-time">{formattedTime}</span>
            </div>

            <div className="profile-section">
                <img src={profileImage} alt="Profile" className="profile-avatar-img" />
            </div>
        </div>

      </div>

      <div className="header-laser-line"></div>
    </div>
  );
}

export default Header;