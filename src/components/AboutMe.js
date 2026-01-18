import React from 'react';
import profileImage from "../img1.jpg"; 
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
             <h2>About Me</h2>
          </div>
          <p className="mission-text">
            Hey! I'm Parth. I'm a 3rd-year IT student who loves building things that actually work. 
            I started with web development because I liked seeing my code come to life instantly, 
            and now I'm diving deep into AI because I want to build systems that can think.
            <br /><br />
            When I'm not coding, you'll probably find me  gaming or just exploring new things.
          </p>
          <div className="social-buttons" style={{marginBottom: '30px'}}>
             <a href="https://github.com/Parths-29" target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
             <a href="https://www.linkedin.com/in/parth-sharma-16469a293" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">LinkedIn</a>
             <a href="https://leetcode.com/u/Procriminal29/" target="_blank" rel="noopener noreferrer" className="btn btn-leetcode">LeetCode</a>
             <a href="./D Parth%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-resume">Resume</a>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: EDUCATION --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="section-content">
          <div className="education-grid">
            <div className="education-card">
              <h3 className="education-title">B.Tech in Information Technology</h3>
              <p className="education-institution">KJ Somaiya College of Engineering (KJSCE)</p>
              <p className="education-description">
                Currently in my 3rd year. I'm focusing on becoming a strong developer, learning how 
                large software systems are built, and maintaining a good CGPA while working on my projects.
              </p>
            </div>
            <div className="education-card">
              <h3 className="education-title">High School</h3>
              <p className="education-institution">DAV Public School, Panvel</p>
              <p className="education-description">
                This is where I grew up. I had a great time here, made some lifelong friends, 
                and built my foundation in Science and Math before moving into engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LEADERSHIP --- */}
      <section className="content-section">
        <div className="section-header">
           <h2>Leadership & Teamwork</h2>
        </div>
        <div className="council-grid">
          <div className="council-card">
            <div className="council-header">
              <span className="council-role">Core Member</span>
            </div>
            <h3 className="council-name">SMLRA (ML Council)</h3>
            <p className="council-desc">
              I was part of the AI council where we helped students get started with Ml and handled creative work. 
              We organized workshops and built a community of developers who love building cool stuff.
            </p>
          </div>
          <div className="council-card">
            <div className="council-header">
              <span className="council-role">Creative Team</span>
            </div>
            <h3 className="council-name">Robocon (Robotics)</h3>
            <p className="council-desc">
              I helped the robotics team with their branding and designs. It was an amazing experience 
              to see our logos and visuals representing the team at national competitions.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TECHNICAL SKILLS --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>Tech Stack</h2>
        </div>
        <div className="section-content">
          <div className="skills-grid">
            <div className="skill-category-card">
              <h3 className="skill-category-title">Web Development</h3>
              <p className="skill-list">React.js • Node.js • Express • HTML/CSS • Tailwind </p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Machine Learning</h3>
              <p className="skill-list">Python • TensorFlow • Scikit-learn • Pandas</p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">DSA & Core</h3>
              <p className="skill-list">Java • LeetCode • Problem Solving • OOPs</p>
            </div>
            <div className="skill-category-card">
              <h3 className="skill-category-title">Others</h3>
              <p className="skill-list">Git/GitHub • SQL • OS • Canva • Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: KEY PROJECTS --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>Key Highlights</h2>
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