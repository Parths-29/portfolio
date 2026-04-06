import React, { useState, useEffect } from "react";
// Import AnimatePresence and motion for the smooth transitions
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";

// --- REACT ICONS FOR DEVELOPER SKILLS ---
import { SiPython, SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiGit, SiFigma, SiTensorflow, SiGooglecloud } from "react-icons/si";
import { FaDatabase, FaCode, FaEye } from "react-icons/fa";

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
import HoloCard from "./components/Holocard";
import ContactWidget from "./components/ContactWidget";
import "./App.css";

// --- 3D & Animation Imports ---
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Image Imports (for projects only) ---
import iplImg from "./components/ipl.jpg"; 
import receiptImg from "./components/receipt.webp";
import voteImg from "./components/vote.jpg";   
import drImg from "./components/dr.jpeg";
import aiImg from "./components/ai.png";
import emotionImg from "./components/gen.jpg";
import healthcareImg from "./components/healthcare.jpg";      

// --- SKILL DATA WITH ICONS (No image files needed) ---
const skillsData = [
  { icon: SiTensorflow, title: "Generative AI", desc: "Building LLM agents & RAG pipelines.", color: "#FF6B6B" },
  { icon: SiPython, title: "Python & ML", desc: "Advanced scripting & TensorFlow models.", color: "#3776AB" },
  { icon: SiGooglecloud, title: "Google Cloud", desc: "Deploying scalable infrastructure.", color: "#4285F4" },
  { icon: FaCode, title: "Java & OOP", desc: "Enterprise system architecture.", color: "#ED8B00" },
  { icon: SiReact, title: "React Ecosystem", desc: "Dynamic component-driven UIs.", color: "#61DAFB" },
  { icon: SiNodedotjs, title: "Node.js & Backend", desc: "High-performance REST APIs.", color: "#68A063" },
  { icon: SiMongodb, title: "MongoDB & SQL", desc: "Complex data modeling & schemas.", color: "#13AA52" },
  { icon: SiTypescript, title: "TypeScript", desc: "Type-safe scalable development.", color: "#3178C6" },
  { icon: FaCode, title: "DSA & Algorithms", desc: "Optimized problem solving.", color: "#FFD700" },
  { icon: SiGit, title: "Git & DevOps", desc: "Version control & CI/CD.", color: "#F1502F" },
  { icon: SiFigma, title: "Figma & UI/UX", desc: "High-fidelity prototyping.", color: "#F24E1E" },
  { icon: FaDatabase, title: "Visual Design", desc: "Creative branding & assets.", color: "#FF1493" },
];

const infiniteSkills = [...skillsData, ...skillsData];

// --- SCROLL TO TOP COMPONENT ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the .main-content element to top (not the window)
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

const HomeFeed = () => (
  <>
    <Bio />

    {/* SKILLS MARQUEE - SVG ICONS WITH TRANSPARENT BACKGROUNDS */}
    <div className="section">
      <div className="section-header">
        <h2>Featured Skills</h2>
      </div>
      <div className="skill-marquee-container">
        <div className="skill-marquee-track">
          {infiniteSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div className="marquee-card" key={index}>
                <div className="marquee-icon-wrapper" style={{ color: skill.color }}>
                  <IconComponent className="marquee-icon" />
                </div>
                <div className="marquee-text-overlay">
                  <h3 className="marquee-tech-name">{skill.title}</h3>
                  <p className="marquee-tech-desc">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* DEPLOYED SYSTEMS */}
    <div className="section">
      <div className="section-header">
        <h2>Deployed Systems</h2>
      </div>
      <div className="holo-grid">
        
        <HoloCard>
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
        </HoloCard>

        <HoloCard>
          <div className="holo-card">
            <div className="holo-img-wrapper">
              <img src={receiptImg} alt="Receipt Scanner" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech">MERN Stack • OCR • AI</span>
                <h3 className="holo-title">Smart Receipt Coach</h3>
                <div className="holo-actions">
                  <a href="https://receipt-scanner-frontend-woad.vercel.app/" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Live Demo</a>
                  <a href="https://github.com/Parths-29/Web-Engineering-Archives" target="_blank" rel="noopener noreferrer" className="holo-btn secondary">Code</a>
                </div>
              </div>
            </div>
          </div>
        </HoloCard>

        <HoloCard>
          <div className="holo-card">
            <div className="holo-img-wrapper">
              <img src={voteImg} alt="Voting" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech">Solidity • Blockchain</span>
                <h3 className="holo-title">Decentralized Voting</h3>
                <div className="holo-actions">
                  <a href="https://github.com/Parths-29/Decentralized-Web3/tree/main/decentralized-voting" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Code</a>
                </div>
              </div>
            </div>
          </div>
        </HoloCard>

        <HoloCard>
          <div className="holo-card">
            <div className="holo-img-wrapper">
              <img src={emotionImg} alt="Emotion Analysis" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech">NLP • Deep Learning • AI</span>
                <h3 className="holo-title">Emotion Analysis</h3>
                <div className="holo-actions">
                  <a href="https://github.com/Parths-29/AI-Neural-Systems/tree/main/emotion-analysis/Emotion%20analysis%20using%20NLP%20-code" target="_blank" rel="noopener noreferrer" className="holo-btn primary">Code</a>
                </div>
              </div>
            </div>
          </div>
        </HoloCard>

      </div>
    </div>

    {/* ACTIVE PROTOCOLS */}
    <div className="section">
      <div className="section-header" style={{ borderLeftColor: '#00ccff', borderBottomColor: 'rgba(0, 204, 255, 0.3)' }}>
        <h2 style={{ textShadow: '0 0 10px rgba(0, 204, 255, 0.8)' }}>Active Development Protocols</h2>
      </div>
      <div className="holo-grid">
        
        <HoloCard>
          <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
            <div className="holo-img-wrapper">
              <img src={healthcareImg} alt="Healthcare Network" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech" style={{ color: '#00ccff' }}>Hyperledger • AI • React</span>
                <h3 className="holo-title">Healthcare Blockchain Network</h3>
                <div className="holo-actions">
                  <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Development</span>
                </div>
              </div>
            </div>
          </div>
        </HoloCard>

        <HoloCard>
          <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
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
        </HoloCard>

        <HoloCard>
          <div className="holo-card" style={{ borderLeft: '1px solid #00ccff' }}>
            <div className="holo-img-wrapper">
              <img src={aiImg} alt="Visual Proctor" className="holo-img" />
              <div className="holo-content">
                <span className="holo-tech" style={{ color: '#00ccff' }}>Computer Vision • ML</span>
                <h3 className="holo-title">AI Visual Proctor</h3>
                <div className="holo-actions">
                  <span className="holo-btn secondary" style={{ borderColor: '#00ccff', color: '#00ccff' }}>In Progress...</span>
                </div>
              </div>
            </div>
          </div>
        </HoloCard>

      </div>
    </div>
  </>
);

// --- ANIMATION WRAPPER ---
// This component wraps every page to give it the "Fade In" effect
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }} // Start slightly lower and smaller
      animate={{ opacity: 1, y: 0, scale: 1 }}     // Animate to normal
      exit={{ opacity: 0, y: -20, scale: 1.02 }}   // Fade out upward and slightly zoom in
      transition={{ duration: 0.4, ease: "easeInOut" }} // "Normal Slow" speed
    >
      {children}
    </motion.div>
  );
};

// --- ANIMATED ROUTES COMPONENT ---
// This handles the logic of detecting page changes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // 'mode="wait"' ensures the old page fades out BEFORE the new one fades in
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomeFeed /></PageTransition>} />
        <Route path="/explore" element={<PageTransition><Explore /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutMe /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/connect" element={<PageTransition><Connect /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// --- MAIN APP ---
function App() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-cubic',
      once: false,    
      mirror: true    
    });
  }, []);

  if (!hasEntered) {
    return <EntryPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      
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
            {/* Replaced standard <Routes> with our new Animated Version */}
            <AnimatedRoutes />
          </main>
        </div>

        {/* Global Contact Widget - Available on ALL Pages */}
        <ContactWidget />
      </div> 

      {/* MOBILE DOCK */}
      <div className="mobile-bottom-dock">
            <Link to="/" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span className="dock-label">Home</span>
            </Link>

            <Link to="/explore" className="dock-item">
                <svg viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>
                <span className="dock-label">Explore</span>
            </Link>

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