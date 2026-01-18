import React from "react";
import profileImg from "../img1.jpg"; // Using your profile picture

function Bio() {
  return (
    <section className="hero-section">
      
      {/* --- LEFT SIDE: TEXT CONTENT --- */}
      <div className="hero-content">
        
        {/* 1. The Glitch Name Effect */}
        <p className="hero-greeting"> ACCESS GRANTED // WELCOME</p>
        <h1 className="hero-name glitch" data-text="PARTH SHARMA">
          PARTH SHARMA
        </h1>
        
        <div className="hero-tagline">
          FULL STACK ARCHITECT | AI OPERATIVE | 3RD YEAR @ KJSCE
        </div>

        {/* 2. Humanized Bio Text */}
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

        {/* 3. Personal Status Bar (The "Good Things") */}
        <div className="hero-personal">
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#888' }}>
            <span>⚡ <b>Status:</b> Shipping Code</span>
            <span>🇩🇪 <b>Language:</b> Learning German (A1)</span>
            <span>🎓 <b>Grade:</b> 9.4 CGPA</span>
          </div>
        </div>
      
      </div>

      {/* --- RIGHT SIDE: PHOTO WITH SCANNER --- */}
      <div className="hero-visual">
        <div className="hero-img-container">
          <img src={profileImg} alt="Parth Sharma" className="hero-img" />
          {/* The red laser scanning line */}
          <div className="hero-scanline"></div>
        </div>
        
        {/* Decorative Background Glows */}
        <div className="hero-glow-spot left"></div>
        <div className="hero-glow-spot right"></div>
      </div>

    </section>
  );
}

export default Bio;