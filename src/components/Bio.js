import React from "react";
import profileImg from "../img1.jpg"; 

function Bio() {
  return (
    <section className="hero-section">
      
      {/* --- LEFT SIDE: TEXT (No Changes) --- */}
      <div className="hero-content">
        <p className="hero-greeting"> ACCESS GRANTED // WELCOME</p>
        <h1 className="hero-name glitch" data-text="PARTH SHARMA">
          PARTH SHARMA
        </h1>
        
        <div className="hero-tagline">
          FULL STACK ARCHITECT | AI OPERATIVE | 3RD YEAR @ KJSCE
        </div>

        <div className="hero-manifesto">
          <p>
            Hi, I'm Parth. I'm a developer who loves breaking things just to see how to fix them. 
            I have a <span className="highlight-red">9.4 CGPA</span>, but I believe my real education 
            happens on GitHub, not just in the classroom.
          </p>
          <p>
            Right now, I'm balancing three things: building scalable Web Apps, training Deep Learning models, 
            and learning <span className="highlight-red">German (Deutsch)</span> for my future master's plans. 
            Always looking for the next big problem to solve.
          </p>
        </div>

        <div className="hero-personal">
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#888' }}>
            <span>⚡ <b>Status:</b> Shipping Code</span>
            <span>🇩🇪 <b>Language:</b> Learning German (A1)</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: TACTICAL HUD FRAME (New Design) --- */}
      <div className="hero-visual">
        <div className="hud-frame-container">
            {/* The Image */}
            <img src={profileImg} alt="Parth Sharma" className="hud-img" />
            
            {/* The Overlay Corners (The "Targeting" Look) */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            {/* Optional: A small "Live" tag in the corner */}
            <div className="hud-tag">ProCriminal29</div>
        </div>
        
        {/* Background Atmosphere */}
        <div className="hero-glow-spot left"></div>
        <div className="hero-glow-spot right"></div>
      </div>

    </section>
  );
}

export default Bio;