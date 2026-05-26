import React, { useState } from "react";
// --- IMAGE IMPORTS (DOMAINS) ---
import devopsImg from "./devops.jpg";
import aiImg from "./ai.png";
import blockchainImg from "./block.webp";
import frontendImg from "./reacts.jpg";
import figmaImg from "./fig.jpg";

// --- IMAGE IMPORTS (PROJECTS) ---
import resilientImg from "./Resilient.png";
import receiptImg from "./receipt.png";
import voteImg from "./vote.jpg";
import iplImg from "./ipl.jpg";
import emotionImg from "./gen.jpg";
import interviewImg from "./interview.png";
import fintechImg from "./fintech.jpg";

function Explore() {
  const [activeTab, setActiveTab] = useState("domains");

  // --- DOMAIN CONFIGURATION ---
  const domains = [
    {
      id: "devops",
      title: "DevOps & Web Architect",
      subtitle: "CI/CD • Cloud • Full Stack",
      img: devopsImg,
      size: "standard",
      desc: "Scalable infrastructure and full-stack ecosystems.",
      link: "https://github.com/Parths-29/Web-Engineering-Archives"
    },
    {
      id: "frontend",
      title: "Web Dev Engineering",
      subtitle: "React • Three.js • Motion",
      img: frontendImg,
      size: "standard",
      desc: "Crafting pixel-perfect, immersive UI.",
      link: "https://github.com/Parths-29/Web-Engineering-Archives"
    },
    {
      id: "ai",
      title: "AI & Deep Learning",
      subtitle: "Neural Networks • NLP",
      img: aiImg,
      size: "standard",
      desc: "Training models that think and adapt.",
      link: "https://github.com/Parths-29/AI-Neural-Systems"
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      subtitle: "Smart Contracts • DApps",
      img: blockchainImg,
      size: "standard",
      desc: "Decentralized solutions for the future web.",
      link: "https://github.com/Parths-29/Decentralized-Web3"
    },
    {
      id: "figma",
      title: "Figma & UI/UX Design",
      subtitle: "Prototyping • Design Systems",
      img: figmaImg,
      size: "standard",
      desc: "Designing intuitive user journeys and interfaces.",
      link: "https://github.com/Parths-29/UI-UX-Design-Lab"
    },
  ];

  // --- PROJECT CONFIGURATION (DEPLOYED ONLY) ---
  const projects = [
    {
      id: "resilient",
      title: "ResiliNet",
      subtitle: "Python • Graph Neural Networks • Game Theory",
      img: resilientImg,
      size: "standard",
      desc: "Network resilience optimization system.",
      liveLink: "https://resilinet-core.vercel.app/",
      codeLink: "https://github.com/Parths-29/Resilinet-core"
    },
    {
      id: "receipt",
      title: "Smart Receipt Coach",
      subtitle: "MERN Stack • OCR • AI",
      img: receiptImg,
      size: "standard",
      desc: "AI-powered receipt scanning and analysis.",
      liveLink: "https://receipt-scanner-frontend-woad.vercel.app/",
      codeLink: "https://github.com/Parths-29/Web-Engineering-Archives"
    },
    {
      id: "voting",
      title: "Decentralized Voting",
      subtitle: "Solidity • Blockchain",
      img: voteImg,
      size: "standard",
      desc: "Transparent, secure voting on blockchain.",
      liveLink: null,
      codeLink: "https://github.com/Parths-29/Decentralized-Web3/tree/main/decentralized-voting"
    },
    {
      id: "ipl",
      title: "IPL Win Predictor",
      subtitle: "Python • Streamlit • ML",
      img: iplImg,
      size: "standard",
      desc: "Machine learning model for IPL match predictions.",
      liveLink: "https://ipl-win-predictor-be6tyhrvdccfgcfwihxf8u.streamlit.app/",
      codeLink: "https://github.com/Parths-29/ipl-win-predictor"
    },
    {
      id: "emotion",
      title: "Emotion Analysis",
      subtitle: "NLP • Deep Learning • AI",
      img: emotionImg,
      size: "standard",
      desc: "Neural network for sentiment and emotion detection.",
      liveLink: null,
      codeLink: "https://github.com/Parths-29/Ai-ml/tree/main/emotion-analysis"
    },
    {
      id: "interview",
      title: "Interview Prep AI",
      subtitle: "Computer Vision • ML • Speech Recognition",
      img: interviewImg,
      size: "standard",
      desc: "AI-powered interview preparation and practice assistant.",
      liveLink: "https://ai-neural-systems-client.vercel.app/",
      codeLink: "https://github.com/Parths-29/Interview-Prep-AI"
    },
    {
      id: "fintech",
      title: "Fintech - Stock Trading Platform",
      subtitle: "React 19 • Django • Recharts • Real-time Trading",
      img: fintechImg,
      size: "standard",
      desc: "Modern stock trading platform with real-time portfolio tracking and analytics.",
      liveLink: null,
      codeLink: "https://github.com/Parths-29/Internship-projects/tree/main/fintech-intern"
    },
  ];

  return (
    <div className="explore-page">
      {/* Dynamic Header */}
      <div className="section-header explore-header">
        <div>
          <h2 className="neon-text">MY WORK</h2>
          <p className="explore-subtitle">Explore projects and domains</p>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="explore-tabs">
        <button
          className={`tab-btn ${activeTab === "domains" ? "active" : ""}`}
          onClick={() => setActiveTab("domains")}
        >
          Explore Domains
        </button>
        <button
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Explore Projects
        </button>
      </div>

      {/* DOMAINS TAB */}
      {activeTab === "domains" && (
        <div className="bento-grid">
          {domains.map((domain) => (
            <a
              key={domain.id}
              href={domain.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bento-card ${domain.size}`}
              style={{ textDecoration: "none" }}
            >
              <div className="bento-bg-wrapper">
                <img src={domain.img} alt={domain.title} className="bento-img" />
                <div className="bento-overlay"></div>
              </div>

              <div className="bento-content">
                <h4 className="bento-subtitle">{domain.subtitle}</h4>
                <h3 className="bento-title">{domain.title}</h3>
                <p className="bento-desc">{domain.desc}</p>
                <div className="bento-arrow">→</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* PROJECTS TAB */}
      {activeTab === "projects" && (
        <div className="bento-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bento-card ${project.size} project-card`}
              style={{ textDecoration: "none" }}
            >
              <div className="bento-bg-wrapper">
                <img src={project.img} alt={project.title} className="bento-img" />
                <div className="bento-overlay"></div>
              </div>

              <div className="bento-content">
                <h4 className="bento-subtitle">{project.subtitle}</h4>
                <h3 className="bento-title">{project.title}</h3>
                <p className="bento-desc">{project.desc}</p>

                {/* Project Links */}
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      Live
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link code"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;