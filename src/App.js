import React, { useState, useEffect } from "react";
// We import Link so the bottom dock buttons work
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";

// --- Components ---
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Bio from "./components/Bio";
import Explore from "./components/Explore";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Connect from "./components/Connect"; 
import EntryPage from "./components/Entrypage";
import "./App.css";

// --- 3D & Animation Imports ---
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Image Imports ---
import iplImg from "./components/ipl.jpg"; 
import receiptImg from "./components/receipt.webp";
import voteImg from "./components/vote.jpg";   
import drImg from "./components/dr.jpeg";      

import pythonImg from "./components/python.webp";
import javaImg from "./components/java.png";
import dsaImg from "./components/dsa.png";
import reactImg from "./components/reacts.jpg";
import nodeImg from "./components/nodejs.png";
import dbImg from "./components/mongo.png";     
import genAiImg from "./components/gen.jpg";    
import tsImg from "./components/ts.jpg";        
import cloudImg from "./components/google.png"; 
import figmaImg from "./components/fig.jpg";
import gitImg from "./components/git.webp";
import canvaImg from "./components/canvas.webp";

// --- HELPER: SCROLL TO TOP ON ROUTE CHANGE ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll the window (For Mobile)
    window.scrollTo(0, 0);
    
    // 2. Scroll the main content container (For Desktop)
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};


function App() {
  const [hasEntered, setHasEntered] = useState(false);

  // --- 1. INITIALIZE SCROLL ANIMATIONS ---
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-cubic',
      once: false,    
      mirror: true    
    });
  }, []);

  // --- SKILLS DATA ---
  const skillsData = [
    { img: genAiImg, title: "Generative AI", desc: "Building LLM agents & RAG pipelines." },
    { img: pythonImg, title: "Python & ML", desc: "Advanced scripting & TensorFlow models." },
    { img: cloudImg, title: "Google Cloud", desc: "Deploying scalable infrastructure." },
    { img: javaImg, title: "Java & OOP", desc: "Enterprise system architecture." },
    { img: reactImg, title: "React Ecosystem", desc: "Dynamic component-driven UIs." },
    { img: nodeImg, title: "Node.js & Backend", desc: "High-performance REST APIs." },
    { img: dbImg, title: "MongoDB & SQL", desc: "Complex data modeling & schemas." },
    { img: tsImg, title: "TypeScript", desc: "Type-safe scalable development." },
    { img: dsaImg, title: "DSA & Algorithms", desc: "Optimized problem solving." },
    { img: gitImg, title: "Git & DevOps", desc: "Version control & CI/CD." },
    { img: figmaImg, title: "Figma & UI/UX", desc: "High-fidelity prototyping." },
    { img: canvaImg, title: "Visual Design", desc: "Creative branding & assets." },
  ];

  const infiniteSkills = [...skillsData, ...skillsData];

  // --- HOME FEED COMPONENT ---
  // This bundles your Bio, Skills, and Projects into one "Page" so the Router can render it cleanly
  const HomeFeed = () => (
    <>
      <Bio />

      {/* SKILLS MARQUEE */}
      <div className="section" data-aos="fade-up">
        <div className="section-header">
          <h2>Featured Skills</h2>
        </div>
        <div className="skill-marquee-container">
          <div className="skill-marquee-track">
            {infiniteSkills.map((skill, index) => (
              <div className="marquee-card" key={index}>
                <img src={skill.img} alt={skill.title} className="marquee-img" />
                <div className="marquee-overlay">
                  <h3 className="marquee-title">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEPLOYED SYSTEMS */}
      <div className="section" data-aos="fade-up">
        <div className="section-header">
          <h2>Deployed Systems</h2>
        </div>
        <div className="holo-grid">
          {/* Project 1 */}
          <div className="holo-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="holo-img-wrapper">
              <img src={iplImg} alt="IPL Predictor" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech">Python • Streamlit • ML</span>
                <h3 className="holo-title">IPL Win Predictor</h3>
                <div className="holo-actions">
                  <a href="https://ipl-win-predictor-be6tyhrvdccfgcfwihxf8u.streamlit.app/" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Live App</a>
                  <a href="https://github.com/Parths-29/ipl-win-predictor" target="_blank" rel="noopener noreferrer" className="holo-btn secondary">Code</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="holo-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="holo-img-wrapper">
              <img src={receiptImg} alt="Receipt Scanner" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech">MERN Stack • OCR • AI</span>
                <h3 className="holo-title">Smart Receipt Coach</h3>
                <div className="holo-actions">
                  <a href="https://github.com/Parths-29/Web-Engineering-Archives" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Source</a>
                  <a href="https://github.com/Parths-29/Web-Engineering-Archives" target="_blank" rel="noopener noreferrer" className="holo-btn secondary">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVE PROTOCOLS */}
      <div className="section" data-aos="fade-up">
        <div className="section-header" style={{ borderLeftColor: '#00ccff', borderBottomColor: 'rgba(0, 204, 255, 0.3)' }}>
          <h2 style={{ textShadow: '0 0 10px rgba(0, 204, 255, 0.8)' }}>Active Development Protocols</h2>
        </div>
        <div className="holo-grid">
          <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }} data-aos="flip-up">
            <div className="holo-img-wrapper">
              <img src={voteImg} alt="Voting" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech" style={{ color: '#00ccff' }}>Solidity • Blockchain</span>
                <h3 className="holo-title">Decentralized Voting</h3>
                <div className="holo-actions">
                  <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress</span>
                </div>
              </div>
            </div>
          </div>
          <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }} data-aos="flip-up" data-aos-delay="100">
            <div className="holo-img-wrapper">
              <img src={drImg} alt="Medical" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech" style={{ color: '#00ccff' }}>HealthTech • AI</span>
                <h3 className="holo-title">Neural Med-Assist</h3>
                <div className="holo-actions">
                   <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress</span>
                </div>
              </div>
            </div>
          </div>
           <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }} data-aos="flip-up" data-aos-delay="200">
            <div className="holo-img-wrapper">
              <img src={pythonImg} alt="AI Proctor" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech" style={{ color: '#00ccff' }}>Computer Vision • ML</span>
                <h3 className="holo-title">AI Visual Proctor</h3>
                <div className="holo-actions">
                  <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (!hasEntered) {
    return <EntryPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      
      {/* 1. MAIN APP WRAPPER (Desktop & Mobile Content) */}
      <div className="app-master-wrapper fade-in-active yt-music-theme">
        
        {/* 3D Background Grid */}
        <div className="cyber-grid-container">
            <div className="cyber-grid"></div>
            <div className="cyber-sun"></div>
        </div>
        
        <Header />
        
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              {/* WE USE THE 'HomeFeed' COMPONENT HERE */}
              <Route path="/" element={<HomeFeed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </main>
        </div>
      </div> 
      {/* ⬆️ WRAPPER ENDS HERE ⬆️ */}


      {/* 2. MOBILE DOCK (Outside wrapper so it stays fixed) */}
      {/* The CSS controls Hiding this on Desktop and Showing on Mobile */}
      <div className="mobile-bottom-dock">
            <Link to="/" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span className="dock-label">Home</span>
            </Link>

            <Link to="/explore" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>
                <span className="dock-label">Explore</span>
            </Link>

            {/* EXPERIENCE TAB */}
            <Link to="/experience" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                <span className="dock-label">Exp.</span>
            </Link>

            <Link to="/about" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span className="dock-label">About</span>
            </Link>

            <Link to="/connect" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span className="dock-label">Connect</span>
            </Link>
      </div>

    </Router>
  );
}

export default App;