import React, { useState } from "react";

// --- Image Imports ---
import instaImg from "./insta.png";       // <--- Instagram Icon
import whatsappImg from "./whatsapp.jpg"; // <--- WhatsApp Icon

function Connect() {
  const [copied, setCopied] = useState(false);

  // Logic to copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("parth.sharma1@somaiya.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset message after 2s
  };

  // Helper style to make icons fit perfectly inside the circle
  const iconStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%' // Makes the square images circular
  };

  return (
    <div className="connect-page">
      
      {/* --- THE HEAVY "HOLO-BANNER" HEADER --- */}
      <div className="section-header">
        <h2 className="glitch-text" data-text="ESTABLISH UPLINK">
          ESTABLISH UPLINK
        </h2>
        
        {/* Tech Data Bar */}
        <div className="header-data-bar">
            <span>PROFILE_SYNC ▸ VERIFIED</span>
            <span className="spacer">///</span>
            <span>SKILL_MATRIX ▸ LOADED </span>
            <span className="spacer">///</span>
            <span>EXPERIENCE ▸ INDEXED</span>
        </div>
      </div>

      {/* --- THE INTERACTIVE GRID --- */}
      <div className="uplink-grid">
        
        {/* 1. EMAIL (Click to Copy) */}
        <div 
          className="uplink-card email" 
          onClick={handleCopyEmail}
          style={{borderTop: '4px solid #EA4335'}} /* Gmail Red */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <div className="icon-wrapper">✉️</div>
            <h3>SECURE MAIL</h3>
            <p className="link-text">parth.sharma1@somaiya.edu</p>
            <div className="action-status">
                {copied ? ">> COPIED TO CLIPBOARD <<" : "CLICK TO COPY"}
            </div>
          </div>
        </div>

        {/* 2. WHATSAPP */}
        <a 
          href="https://wa.me/919324769799" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card whatsapp"
          style={{borderTop: '4px solid #25D366'}} /* WhatsApp Green */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            {/* Image Icon */}
            <div className="icon-wrapper" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={whatsappImg} alt="WhatsApp" style={iconStyle} />
            </div>
            <h3>WHATSAPP</h3>
            <p className="link-text">+91 9324769799</p> 
          </div>
        </a>

        {/* 3. INSTAGRAM */}
        <a 
          href="https://instagram.com/Parth_s29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card instagram"
          style={{borderTop: '4px solid #E1306C'}} /* Insta Pink */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            {/* Image Icon */}
            <div className="icon-wrapper" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={instaImg} alt="Instagram" style={iconStyle} />
            </div>
            <h3>INSTAGRAM</h3>
            <p className="link-text">@Parth_s29</p>
          </div>
        </a>

        {/* 4. LINKEDIN */}
        <a 
          href="https://www.linkedin.com/in/parth-sharma-16469a293" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card linkedin"
          style={{borderTop: '4px solid #0A66C2'}} /* LinkedIn Blue */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <div className="icon-wrapper">in</div>
            <h3>PROFESSIONAL NET</h3>
            <p className="link-text">Connect on LinkedIn</p>
          </div>
        </a>

        {/* 5. GITHUB */}
        <a 
          href="https://github.com/Parths-29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card github"
          style={{borderTop: '4px solid #ffffff'}} /* GitHub White */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <div className="icon-wrapper">GIT</div>
            <h3>CODE REPOSITORY</h3>
            <p className="link-text">View Source Codes</p>
          </div>
        </a>

        {/* 6. LEETCODE */}
        <a 
          href="https://leetcode.com/u/Procriminal29/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card leetcode"
          style={{borderTop: '4px solid #FFA116'}} /* LeetCode Orange */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <div className="icon-wrapper">{`</>`}</div>
            <h3>ALGORITHM HUB</h3>
            <p className="link-text">LeetCode Profile</p>
          </div>
        </a>

        {/* 7. RESUME (Canva Link) */}
        <a 
          href="https://www.canva.com/design/DAG-mYmRPgc/L8w5WgxxdBX3zO7tdZT43g/edit?utm_content=DAG-mYmRPgc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uplink-card resume"
          style={{borderTop: '4px solid #00E5FF'}} /* Neon Cyan */
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <div className="icon-wrapper">📄</div>
            <h3>CLASSIFIED DOSSIER</h3>
            <p className="link-text">View / Download Resume</p>
          </div>
        </a>

      </div>
    </div>
  );
}

export default Connect;