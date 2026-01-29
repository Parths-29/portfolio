import React from "react";
// --- IMAGE IMPORTS ---
// Make sure these images exist in your src/components/ folder!
import devopsImg from "./devops.jpg";    // Was wedev.png
import aiImg from "./ai.png";            // Was ai.png
import mlopsImg from "./mlops.webp";     // Was node.png
import blockchainImg from "./block.webp"; // Was java.png
import frontendImg from "./reacts.jpg";  // Was react.avif
import figmaImg from "./fig.jpg";        // Was figma.webp

function Explore() {
  
  // --- DOMAIN CONFIGURATION ---
  const domains = [
    {
      id: "devops",
      title: "DevOps & Web Architect",
      subtitle: "CI/CD • Cloud • Full Stack",
      img: devopsImg,
      size: "large-wide", // Spans 2 columns
      desc: "Scalable infrastructure and full-stack ecosystems.",
      // LINK: Points to your Web Archive
      link: "https://github.com/Parths-29/Web-Engineering-Archives"
    },
    
    
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "React • Three.js • Motion",
      img: frontendImg,
      size: "standard",
      desc: "Crafting pixel-perfect, immersive UI.",
      // LINK: Points to Web Archive (Frontend section)
      link: "https://github.com/Parths-29/Web-Engineering-Archives"
    },
    {
      id: "ai",
      title: "AI & Deep Learning",
      subtitle: "Neural Networks • NLP",
      img: aiImg,
      size: "large-square", // Big box
      desc: "Training models that think and adapt.",
      // LINK: Points to your AI Lab
      link: "https://github.com/Parths-29/AI-Neural-Systems"
    },
    {
      id: "mlops",
      title: "MLOps Pipelines",
      subtitle: "Model Deployment • Automation",
      img: mlopsImg,
      size: "tall", // Spans 2 rows
      desc: "Bridging the gap between code and production AI.",
      // LINK: Points to AI Lab
      link: "https://github.com/Parths-29/AI-Neural-Systems"
    },
    
    {
      id: "design",
      title: "Figma & UX/UI",
      subtitle: "Prototyping • Design Systems",
      img: figmaImg,
      size: "standard",
      desc: "Designing intuitive user journeys.",
      // LINK: Points to Design Lab
      link: "https://github.com/Parths-29/UI-UX-Design-Lab"
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      subtitle: "Smart Contracts • DApps",
      img: blockchainImg,
      size: "standard",
      desc: "Decentralized solutions for the future web.",
      // LINK: Points to Web3 Repo
      link: "https://github.com/Parths-29/Decentralized-Web3"
    },
    
  ];

  return (
    <div className="explore-page">
      {/* Dynamic Header */}
      <div className="section-header explore-header">
        <div>
           <h2 className="neon-text">MY WORK</h2>
           <p className="explore-subtitle">Select a sector to view projects</p>
        </div>
      </div>

      {/* The Bento Grid */}
      <div className="bento-grid">
        {domains.map((domain) => (
          <a 
            key={domain.id} 
            href={domain.link}          // <--- The Magic Link
            target="_blank"             // Opens in new tab
            rel="noopener noreferrer"   // Security best practice
            className={`bento-card ${domain.size}`} // Keeps your layout
            style={{ textDecoration: 'none' }} // Removes underline
          >
            
            {/* Background Image with Dark Overlay */}
            <div className="bento-bg-wrapper">
                <img src={domain.img} alt={domain.title} className="bento-img" />
                <div className="bento-overlay"></div>
            </div>

            {/* Content */}
            <div className="bento-content">
              <h4 className="bento-subtitle">{domain.subtitle}</h4>
              <h3 className="bento-title">{domain.title}</h3>
              <p className="bento-desc">{domain.desc}</p>
              
              {/* Fake "Enter" Button for the tech feel */}
              <div className="bento-arrow">→</div>
            </div>

          </a>
        ))}
      </div>
    </div>
  );
}

export default Explore;