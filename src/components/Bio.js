import React from "react";
import profileImg from "../img1.jpg";

function Bio() {
  return (
    <section className="hero-section">
      
      {/* --- LEFT SIDE: TEXT WITH PREMIUM STYLING --- */}
      <div className="hero-content">
        <p className="hero-greeting">Full-Stack Developer & AI Engineer</p>
        <h1 className="hero-name glitch" data-text="PARTH SHARMA">
          Parth Sharma
        </h1>
        
        <div className="hero-tagline">
          Building scalable systems • Training ML models • Learning & growing
        </div>

        <div className="hero-manifesto">
          <p>
            I'm a developer who loves solving complex problems. 
            I have a <span className="highlight-red">9.4 CGPA</span>, but I believe real learning 
            happens through building projects on GitHub, not just classrooms.
          </p>
          <p>
            Right now, I'm focused on building production-ready web applications, training deep learning models, 
            and actively learning <span className="highlight-red">German</span> for future opportunities. 
            I'm always looking for the next meaningful problem to solve.
          </p>
        </div>

        <div className="hero-personal">
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#888' }}>
            <span>⚡ Actively shipping code</span>
            <span>🇩🇪 Learning German (A1)</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: CLEAN PROFILE FRAME --- */}
      <div className="hero-visual">
        <div className="hud-frame-container">
            {/* The Image */}
            <img src={profileImg} alt="Parth Sharma" className="hud-img" />
            
            {/* The Overlay Corners (subtle) */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            {/* Subtle tag */}
            <div className="hud-tag">@Parths-29</div>
        </div>
        
        {/* Subtle background glow */}
        <div className="hero-glow-spot left"></div>
        <div className="hero-glow-spot right"></div>
      </div>

    </section>
  );
}

export default Bio;