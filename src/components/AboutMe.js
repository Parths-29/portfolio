import React from 'react';
import profileImage from "./img1.jpeg"; 
import receiptImg from "./receipt.webp"; // <--- Make sure to import this!

function AboutMe() {
  
  return (
    <div className="about-container">
      
      {/* --- SECTION 1: INTRO --- */}
      <div className="about-split-layout" style={{marginTop: '0px'}}>
        
        <div className="holo-id-card">
          <div className="id-photo-wrapper">
             <img src={profileImage} alt="Parth Profile" className="id-photo" />
             <div className="scan-line"></div>
          </div>
          <div className="id-details">
            <h1 className="id-name">Parth Sharma</h1>
            <h3 className="id-role">Full Stack & AI Developer</h3>
            <div style={{marginTop: '15px', color: '#00ff00', fontSize: '0.9rem', letterSpacing: '2px'}}>
               ● ONLINE
            </div>
          </div>
        </div>

        <div className="mission-control">
          <div className="section-header">
             <div className="section-title-group">
               <h2>About Me</h2>
             </div>
          </div>
          <p className="mission-text">
            I'm from Mumbai. Seventh semester at KJSCE, Information Technology.
            I got into coding properly in first year when I couldn't find a tool
            that did what I needed — so I built it. That's still how it works.
            <br /><br />
            The academic side: <span className="accent-text">9.4 GPA</span>, decent at OOSE,
            really into anything that touches data or security. The non-academic side:
            two hackathons, one national-level pitch, and an internship at
            <span className="accent-text"> a fintech startup</span> where I built things
            that people actually used.
            <br /><br />
            Outside code I'm learning <span className="accent-text">German</span> —
            which is harder than any ML paper I've read — and thinking about
            where I want to be in five years. Probably a grad school lab in Berlin or Munich.
            Probably working on something I can't fully describe yet.
          </p>
          <div className="social-buttons" style={{marginBottom: '30px'}}>
             <a href="https://github.com/Parths-29" target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
             <a href="https://www.linkedin.com/in/parth-sharma-16469a293" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">LinkedIn</a>
             <a href="https://leetcode.com/u/Procriminal29/" target="_blank" rel="noopener noreferrer" className="btn btn-leetcode">LeetCode</a>
             <a href="https://drive.google.com/file/d/1ZsHSWVdyWksoH5eIu2aTiUrlLG2Oi5fX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-resume">Resume</a>
          </div>
        </div>
      </div>


      {/* --- SECTION 2: EDUCATION --- */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-title-group">
            <h2>Education</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="education-grid">
            <div className="education-card">
              <h3 className="education-title">B.Tech in Information Technology</h3>
              <p className="education-institution">KJ Somaiya College of Engineering (KJSCE)</p>
              <p className="education-description">
                Currently Semester VII. <span className="accent-text">9.4 GPA</span>, decent at systems courses, 
                really into anything with data or security. Learning the kind of stuff that doesn't go on tests.
              </p>
            </div>
            <div className="education-card">
              <h3 className="education-title">High School</h3>
              <p className="education-institution">DAV Public School, Panvel</p>
              <p className="education-description">
                Built my foundation in Science and Math here before moving into engineering. 
                Made some lifelong friends. Still the place where I learned how to actually learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LEADERSHIP --- */}
      <section className="content-section">
        <div className="section-header">
           <div className="section-title-group">
             <h2>Leadership & Teamwork</h2>
           </div>
        </div>
        <div className="council-grid">
          <div className="council-card">
            <div className="council-header">
              <span className="council-role">Core Member</span>
            </div>
            <h3 className="council-name">SMLRA (ML Council)</h3>
            <p className="council-desc">
              Helped students get started with ML, organized workshops. Built community of developers 
              who actually enjoy building things. Handled branding and creative work too.
            </p>
          </div>
          <div className="council-card">
            <div className="council-header">
              <span className="council-role">Creative Team</span>
            </div>
            <h3 className="council-name">Robocon (Robotics)</h3>
            <p className="council-desc">
              Built branding and design identity for the robotics team. Saw our logos represent them 
              at national competitions. Real work with real impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TECHNICAL SKILLS --- */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-title-group">
            <h2>Tech Stack</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="skills-grid">
            <div className="skill-category-card">
              <h3 className="skill-category-title">AI / ML</h3>
              <p className="skill-list">TensorFlow • PyTorch • scikit-learn</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '8px'}}>
                Fraud detection, anomaly detection, image classifiers.
                Mostly supervised learning — getting into RL slowly.
              </p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Web & Full Stack</h3>
              <p className="skill-list">React • Node.js • MongoDB • Express</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '8px'}}>
                MERN is what I default to. Built fintech projects with it.
                Would use <span className="accent-text">Next.js</span> if I started fresh today.
              </p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Infrastructure</h3>
              <p className="skill-list">Google Cloud • Docker • Git</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '8px'}}>
                Cloud for deployment, Docker when environment matters,
                Git for everything. I don't do DevOps by choice but I can.
              </p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Security</h3>
              <p className="skill-list">Blockchain • Smart Contracts • Cryptography</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '8px'}}>
                <span className="accent-text">MedChain</span> is my deepest dive here —
                EHR system on blockchain with role-based access. It works.
              </p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Learning Right Now</h3>
              <p className="skill-list">German (A1 → A2) • Advanced ML • System design</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '8px'}}>
                These don't belong on a resume yet. They will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: KEY PROJECTS --- */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-title-group">
            <h2>Key Highlights</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="projects-grid">
            
            {/* 1. IPL Project */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">IPL Win Predictor</h3>
                <span className="project-tech">ML & Analytics</span>
              </div>
              <p className="project-description">
                A machine learning model that predicts the probability of an IPL team winning based on current match stats.
              </p>
            </div>
            {/* --- NEW MAIN PROJECT: VOTING DAPP --- */}
            <div className="project-card" style={{ borderLeft: '4px solid #6368f1' }}> {/* Custom Purple/Blue for Blockchain */}
              <div className="project-header">
                <h3 className="project-title">Decentralized Voting DApp</h3>
                <span className="project-tech">Solidity • Python • Blockchain</span>
              </div>
              <p className="project-description">
                A secure, blockchain-based election system. I wrote smart contracts in Solidity to make votes tamper-proof and used Python (Brownie) to automate testing and deployment.
              </p>
            </div>

            {/* 2. RECEIPT SCANNER (NEW!) */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Smart Receipt Coach</h3>
                <span className="project-tech">MERN • OCR • AI</span>
              </div>
              <p className="project-description">
                An expense tracker that extracts data from receipts using OCR and provides AI-driven budgeting tips.
              </p>
              {/* Optional: Add Image inside or keep text only for cleaner look */}
            </div>
            {/* --- Bluestock Internship --- */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Bluestock Internship</h3>
                <span className="project-tech">Fintech & Web</span>
              </div>
              <p className="project-description">
                Worked on real-world fintech modules, improving the user interface and handling backend data integration.
              </p>
            </div>

            {/* 3. AI Proctor */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">AI Visual Proctor</h3>
                <span className="project-tech">Computer Vision</span>
              </div>
              <p className="project-description">
                Built an AI system that monitors exams automatically, detecting multiple faces or suspicious movement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONNECT SECTION --- */}
      <section className="connect-section">
        <h2 className="connect-title">Let's Connect!</h2>
        <p className="connect-description">
          I'm always open to discussing new ideas or collaborating on projects.
        </p>
      </section>

    </div>
  );
}

export default AboutMe;