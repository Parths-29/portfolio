import React from "react";
import profileImg from "./img1.jpeg";

function Bio() {
  return (
    <section className="hero-section">
      
      {/* --- LEFT SIDE: TEXT WITH PREMIUM STYLING --- */}
      <div className="hero-content">
        <p className="hero-greeting">7th Semester • KJSCE Mumbai</p>
        <h1 className="hero-name glitch" data-text="PARTH SHARMA">
          Parth Sharma
        </h1>
        
        <div className="hero-tagline">
          Full-stack developer & AI enthusiast building systems that actually work.
        </div>

        <div className="hero-manifesto">
          <p>
            I'm a seventh-semester IT student from KJSCE with a <span className="accent-text">9.4 GPA</span>.
            I've spent the last few years learning how to build things — web apps, ML models, blockchain systems —
            and more importantly, learning how to build them right. Not just demos that look good.
            Real systems that solve real problems.
          </p>
          <p>
            I work with <span className="accent-text">React, Node.js, Python, and TensorFlow</span> mostly.
            I'm learning <span className="accent-text">German</span> on the side because I want to do grad school in Germany.
            I take code seriously. I take learning seriously. Everything else I'm pretty relaxed about.
          </p>
        </div>

        <div className="hero-personal">
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#888' }}>
            <span>⚡ Shipping code daily</span>
            <span>🇩🇪 A1 → A2 in progress</span>
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