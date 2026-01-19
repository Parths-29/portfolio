import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

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

  if (!hasEntered) {
    return <EntryPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      {/* FADE IN ANIMATION */}
      <div className="app-master-wrapper fade-in-active">
        <Header />
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              
              {/* --- HOME PAGE --- */}
              <Route
                path="/"
                element={
                  <>
                    <Bio />

                    {/* SKILLS MARQUEE */}
                    <div className="section">
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

                    {/* --- 1. DEPLOYED PROJECTS (LIVE) --- */}
                    <div className="section">
                      <div className="section-header">
                        <h2>Deployed Systems</h2>
                      </div>

                      <div className="holo-grid">
                        
                        {/* Project 1: IPL Win Predictor */}
                        <div className="holo-card">
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

                        {/* Project 2: Smart Receipt Coach */}
                        <div className="holo-card">
                          <div className="holo-img-wrapper">
                            <img src={receiptImg} alt="Receipt Scanner" className="holo-img" />
                            <div className="holo-content">
                              <span className="holo-tech">MERN Stack • OCR • AI</span>
                              <h3 className="holo-title">Smart Receipt Coach</h3>
                              <div className="holo-actions">
                                {/* FIX: Replaced '#' with valid repo link to pass Vercel build */}
                                <a href="https://github.com/Parths-29/Web-Engineering-Archives" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Source</a>
                                <a href="https://github.com/Parths-29/Web-Engineering-Archives" target="_blank" rel="noopener noreferrer" className="holo-btn secondary">Code</a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* --- 2. ACTIVE DEVELOPMENT PROTOCOLS (IN PROGRESS) --- */}
                    <div className="section">
                      <div className="section-header" style={{ borderLeftColor: '#00ccff', borderBottomColor: 'rgba(0, 204, 255, 0.3)' }}>
                        <h2 style={{ textShadow: '0 0 10px rgba(0, 204, 255, 0.8)' }}>Active Development Protocols</h2>
                      </div>

                      <div className="holo-grid">
                        
                        {/* In-Dev 1: Decentralized Voting */}
                        <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
                          <div className="holo-img-wrapper">
                            <img src={voteImg} alt="Voting DApp" className="holo-img" />
                            <div className="holo-content">
                              <span className="holo-tech" style={{ color: '#00ccff' }}>Solidity • Blockchain</span>
                              <h3 className="holo-title">Decentralized Voting Grid</h3>
                              <div className="holo-actions">
                                <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress...</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* In-Dev 2: Neural Med-Assist */}
                        <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
                          <div className="holo-img-wrapper">
                            <img src={drImg} alt="Medical AI" className="holo-img" />
                            <div className="holo-content">
                              <span className="holo-tech" style={{ color: '#00ccff' }}>HealthTech • AI Chat</span>
                              <h3 className="holo-title">Neural Med-Assist</h3>
                              <div className="holo-actions">
                                <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress...</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* In-Dev 3: AI Visual Proctor */}
                        <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
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
                }
              />

              {/* --- OTHER ROUTES --- */}
              <Route path="/explore" element={<Explore />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;