import React from 'react';

// Images (Ensure these files are in your src/components folder)
import cert2 from '../hack2skill-certificate.png'; // GenAI Hackathon
import cert3 from '../GenAi.png';                  // GenAI Hackathon Winner
import cert4 from '../ipl.jpg';                    // IPL Quiz
import cert5 from '../bft11947-internship.jpg';    // Bluestock Internship
import lorealImg from "./loreal.jpg";              // L'Oreal Image
import praitImg from "./prait.png";                // Pratinik Image
import samarthImg from "./samarth.png";            // Samarth Editory Image
// Internship images (will be added later)
// import intern1Img from "./internship1.png";     // Software Dev Internship
// import intern2Img from "./internship2.png";     // Web Dev Internship
// import intern3Img from "./internship3.png";     // K.J. Somaiya In-House
// import intern4Img from "./internship4.png";     // Samarth Editory

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
      title: "GenAI Hackathon Participation", 
      issuer: "NxtWave", 
      date: "2024", 
      img: cert3 
    },
    { 
      id: 3,
      title: "IPL Auction Quiz", 
      issuer: "KJSCE", 
      date: "2023", 
      img: cert4 
    },
    // --- NEW CERTIFICATIONS ADDED BELOW ---
    { 
      id: 4,
      title: "Sustainability Challenge", 
      issuer: "L'Oréal", 
      date: "2025", 
      img: lorealImg // Using your L'Oreal image
    }
  ];

  const internships = [
    { 
      id: 1,
      title: "Software Development Internship", 
      company: "Bluestock Fintech", 
      date: "2025", 
      img: cert5 // Using Bluestock internship certificate
    },
    { 
      id: 2,
      title: "Web Development Internship", 
      company: "Pratinik Infotech", 
      date: "2025", 
      img: praitImg // Using your Pratinik image
    },
    { 
      id: 3,
      title: "In-House Internship", 
      company: "K.J. Somaiya College of Engineering", 
      date: "2025", 
      img: null // Image to be added later
    },
    { 
      id: 4,
      title: "Content & Editorial Internship", 
      company: "Samarth Editory", 
      date: "2025", 
      img: samarthImg// Image to be added later
    }
  ];

  return (
    <div className="cert-page">
      {/* CERTIFICATIONS SECTION */}
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

      {/* INTERNSHIPS SECTION */}
      <div className="section-header" style={{ marginTop: '60px' }}>
        <h2 className="neon-text">Professional Experience & Internships</h2>
      </div>

      <div className="trophy-case">
        {internships.map((intern) => (
          <div key={intern.id} className="glass-trophy">
            <div className="trophy-shine"></div>
            
            <div className="trophy-img-wrapper">
                {intern.img ? (
                    <img src={intern.img} alt={intern.title} className="trophy-thumbnail" />
                ) : (
                    <div className="trophy-icon">💼</div>
                )}
            </div>

            <h3 className="trophy-title">{intern.title}</h3>
            <span className="trophy-issuer">{intern.company}</span>
            <span className="trophy-date">{intern.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;