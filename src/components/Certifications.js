import React from 'react';

// Images (Ensure these files are in your src/components folder)
import cert2 from '../hack2skill-certificate.png'; // GenAI Hackathon
import cert3 from '../GenAi.png';                  // GenAI Hackathon Winner
import cert4 from '../ipl.jpg';                    // IPL Quiz
import cert5 from '../bft11947-internship.jpg';    // Bluestock Internship
import lorealImg from "./loreal.jpg";              // L'Oreal Image
import praitImg from "./prait.png";                // Pratinik Image

function Certifications() {
  const certs = [
    { 
      id: 1,
      title: "Google Cloud Agentic AI", 
      issuer: "Google Cloud", 
      date: "2024", 
      img: cert2 
    },
    { 
      id: 2,
      title: "Software Dev Internship", 
      issuer: "Bluestock Fintech", 
      date: "2025", 
      img: cert5 
    },
    { 
      id: 3,
      title: "GenAI Hackathon Participation", 
      issuer: "NxtWave", 
      date: "2024", 
      img: cert3 
    },
    { 
      id: 4,
      title: "IPL Auction Quiz", 
      issuer: "KJSCE", 
      date: "2023", 
      img: cert4 
    },
    // --- NEW CERTIFICATIONS ADDED BELOW ---
    { 
      id: 5,
      title: "Sustainability Challenge", 
      issuer: "L'Oréal", 
      date: "2025", 
      img: lorealImg // Using your L'Oreal image
    },
    { 
      id: 6,
      title: "Web Development Internship", 
      issuer: "Pratinik Infotech", 
      date: "2025", 
      img: praitImg // Using your Pratinik image
    }
  ];

  return (
    <div className="cert-page">
      <div className="section-header">
        <h2 className="neon-text">Credentials & Honors</h2>
      </div>

      <div className="trophy-case">
        {certs.map((cert) => (
          <div key={cert.id} className="glass-trophy">
            <div className="trophy-shine"></div>
            
            <div className="trophy-img-wrapper">
                {cert.img ? (
                    <img src={cert.img} alt={cert.title} className="trophy-thumbnail" />
                ) : (
                    <div className="trophy-icon">🏆</div>
                )}
            </div>

            <h3 className="trophy-title">{cert.title}</h3>
            <span className="trophy-issuer">{cert.issuer}</span>
            <span className="trophy-date">{cert.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;