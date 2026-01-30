import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";

// --- Components ---
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

// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- ICON COMPONENTS (YouTube Music Style) ---
const HomeIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "white" : "#909090"}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
);
const ExploreIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "white" : "#909090"}><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>
);
const SamplesIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "white" : "#909090"}><path d="M8 5v14l11-7z"/></svg>
);
const LibraryIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "white" : "#909090"}><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
);


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

  // --- THIS DEFINES THE HOME FEED COMPONENT ---
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVE PROTOCOLS */}
      <div className="section" data-aos="fade-up">
        <div className="section-header" style={{ borderLeftColor: '#00ccff', borderBottomColor: 'rgba(0, 204, 255, 0.3)' }}>
          <h2 style={{ textShadow: '0 0 10px rgba(0, 204, 255, 0.8)' }}>Active Protocols</h2>
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
      
      {/* --- MASTER WRAPPER --- */}
      <div className="app-master-wrapper fade-in-active yt-music-theme">
        
        {/* 3D BACKGROUND (Kept but subtle) */}
        <div className="cyber-grid-container">
            <div className="cyber-grid"></div>
            <div className="cyber-sun"></div>
        </div>
        
        {/* --- 1. YTM HEADER (Mobile Only) --- */}
        <div className="ytm-header">
            <div className="ytm-top-bar">
                <div className="ytm-logo">
                    <div className="ytm-logo-icon">P</div>
                    <span className="ytm-logo-text">Music</span>
                </div>
                <div className="ytm-actions">
                    <span className="material-icons" style={{fontSize: '24px'}}>search</span>
                    <div className="ytm-avatar-placeholder" style={{width:'26px', height:'26px', background:'purple', borderRadius:'50%', textAlign:'center', lineHeight:'26px', fontSize:'12px'}}>P</div>
                </div>
            </div>

            {/* SCROLLABLE PILLS */}
            <div className="ytm-pills-container">
                <div className="ytm-pill active">All</div>
                <div className="ytm-pill">DevOps</div>
                <div className="ytm-pill">AI/ML</div>
                <div className="ytm-pill">Web3</div>
                <div className="ytm-pill">Design</div>
                <div className="ytm-pill">React</div>
            </div>
        </div>

        {/* --- 2. MAIN CONTENT AREA --- */}
        <div className="ytm-content main-content">
            <Routes>
              {/* NOW HOMEFEED IS DEFINED, SO THIS WORKS */}
              <Route path="/" element={<HomeFeed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
        </div>

        {/* --- 3. BOTTOM NAV (Fixed Dock) --- */}
        <div className="ytm-bottom-nav">
            <Link to="/" className="ytm-nav-item active" style={{textDecoration: 'none'}}>
                <HomeIcon active={true} />
                <span className="label">Home</span>
            </Link>
            <Link to="/experience" className="ytm-nav-item" style={{textDecoration: 'none'}}>
                <SamplesIcon active={false} />
                <span className="label">Samples</span>
            </Link>
            <Link to="/explore" className="ytm-nav-item" style={{textDecoration: 'none'}}>
                <ExploreIcon active={false} />
                <span className="label">Explore</span>
            </Link>
            <Link to="/about" className="ytm-nav-item" style={{textDecoration: 'none'}}>
                <LibraryIcon active={false} />
                <span className="label">Library</span>
            </Link>
        </div>

      </div>
    </Router>
  );
}

export default App;