import React, { useState, useEffect } from "react";
import profileImg from "../img1.jpg"; // Your profile image

function EntryPage({ onEnter }) {
  const [booting, setBooting] = useState(true);
  const [unlocking, setUnlocking] = useState(false);

  // 1. THE COOL BOOT SEQUENCE (Restored)
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2500); // 2.5s boot time
    return () => clearTimeout(timer);
  }, []);

  // 2. TRIGGER THE "ACCESS GRANTED" ANIMATION
  const handleAccess = () => {
    setUnlocking(true);
    
    // Wait 3 seconds for the "Code Rain" & "Access Granted" to finish
    setTimeout(() => {
      onEnter();
    }, 3000);
  };

  return (
    <div className="entry-container">
      
      {/* STAGE 1: THE COOL BOOT LOADER (Restored) */}
      {booting && (
        <div className="boot-sequence">
           <div className="tech-loader">
             <div className="loader-ring"></div>
             <div className="loader-core"></div>
           </div>
           <div className="boot-text">INITIALIZING NEURAL LINK...</div>
           <div className="boot-bar-container">
              <div className="boot-progress-fill"></div>
           </div>
        </div>
      )}

      {/* STAGE 2: RED/BLACK TECH PROFILE SELECTION */}
      {!booting && !unlocking && (
        <div className="profile-selection-container">
          <h1 className="tech-title">SELECT OPERATOR</h1>
          
          <div className="tech-grid">
            
            {/* ADMIN USER */}
            <div className="tech-profile-card" onClick={handleAccess}>
               <div className="tech-img-box">
                  <img src={profileImg} alt="Parth" className="tech-avatar" />
                  <div className="tech-overlay"></div>
               </div>
               <div className="tech-info">
                  <h2 className="tech-name">PARTH</h2>
                  <div className="tech-badge">SYSTEM ADMIN</div>
               </div>
            </div>

            {/* GUEST USER */}
            <div className="tech-profile-card guest">
               <div className="tech-img-box guest-box">
                  <span className="guest-icon">+</span>
               </div>
               <div className="tech-info">
                  <h2 className="tech-name">GUEST</h2>
                  <div className="tech-badge gray">READ ONLY</div>
               </div>
            </div>

          </div>
        </div>
      )}

      {/* STAGE 3: THE "ACCESS GRANTED" SEQUENCE (Restored) */}
      {unlocking && (
        <div className="unlock-sequence">
           <h1 className="access-title">ACCESS GRANTED</h1>
           
           <div className="console-log">
              <p className="log-line">>> DECRYPTING USER DATA...</p>
              <p className="log-line delay-1">>> LOADING PORTFOLIO MODULES...</p>
              <p className="log-line delay-2">>> ESTABLISHING SECURE CONNECTION...</p>
              <p className="log-line delay-3 success">>> WELCOME BACK, ADMIN.</p>
           </div>
        </div>
      )}

    </div>
  );
}

export default EntryPage;