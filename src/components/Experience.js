import React, { useEffect, useRef } from "react";

function Experience() {
  // --- IMPROVISED EXPERIENCE DATA ---
  const timelineData = [
    {
      id: 1,
      role: "Lead Research Author (AI Safety)",
      company: "In-House Research Lab",
      date: "Jan 2026 - Present",
      desc: "Authoring a critical paper titled 'AI Psychosis & Media-Induced Delusions.' Investigating LLM sycophancy—where AI flattery contradicts clinical best practices—and designing safeguards to prevent AI-amplified psychotic thinking in vulnerable users.",
      tags: ["AI Safety", "LLM Research", "Psychology"],
      category: "research"
    },
    {
      id: 2,
      role: "Full Stack Systems Architect",
      company: "Private Healthcare Clinic",
      date: "Jan 2026 - Present",
      desc: "Architecting a secure Patient Data Management System (PDMS). Engineered a digitized workflow for doctor-patient history, appointment scheduling, and encrypted medical record storage, reducing manual data entry by 40%.",
      tags: ["HealthTech", "React", "Node.js", "Data Security"],
      category: "dev"
    },
    {
      id: 3,
      role: "Computer Vision Engineer",
      company: "In-House AI Project",
      date: "Jan 2026 - Present",
      desc: "Developing an AI-driven Visual Test Taker. Utilizing OpenCV and Deep Learning models to automate visual comprehension tests, implementing gaze tracking and object detection for automated proctoring environments.",
      tags: ["Computer Vision", "Python", "OpenCV", "TensorFlow"],
      category: "ai"
    },
    {
      id: 4,
      role: "Freelance Web Developer",
      company: "Samarth Editary & Co.",
      date: "Dec 2025 - Jan 2026",
      desc: "Designed and deployed a high-performance production website for a Navi Mumbai-based media house. Optimized SEO and asset loading, resulting in a 95+ Lighthouse performance score and increased client lead generation.",
      tags: ["Freelance", "Web Optimization", "SEO"],
      category: "dev"
    },
    {
      id: 5,
      role: "Core Committee Member",
      company: "SMLRA (Somaiya Machine Learning Research)",
      date: "Nov 2024 - Dec 2025",
      desc: "Spearheaded technical workshops and hackathons focused on Generative AI. Collaborated on open-source ML models and fostered a community of 200+ student developers.",
      tags: ["Leadership", "Community", "GenAI"],
      category: "community"
    },
    {
      id: 6,
      role: "Fintech Web Developer Intern",
      company: "Bluestock Fintech",
      date: "May 2025 - July 2025",
      desc: "Contributed to the core trading dashboard. Integrated real-time stock APIs and implemented secure user authentication flows. Enhanced the frontend architecture for high-frequency data updates.",
      tags: ["Fintech", "React", "API Integration"],
      category: "dev"
    },
    {
      id: 7,
      role: "Web Development Intern",
      company: "Praitnik",
      date: "May 2025 - July 2025",
      desc: "Developed responsive client-facing web solutions. Focused on component modularity and UI consistency, translating Figma designs into pixel-perfect React code for local businesses.",
      tags: ["Frontend", "UI/UX", "React"],
      category: "dev"
    },
    
    {
      id: 8,
      role: "Visual Design Strategist",
      company: "Robocon (Robotics Council)",
      date: "Aug 2023 - Nov 2023",
      desc: "Managed the visual identity for the college robotics team. Created technical assets, event branding, and social media campaigns that increased engagement during national robotics competitions.",
      tags: ["Design", "Branding", "Robotics"],
      category: "creative"
    },
    
  ];

  // --- SCROLL ANIMATION LOGIC (Fixed for React) ---
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } 
    );

    const currentItems = itemsRef.current; // Fix for strict mode cleanup

    currentItems.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentItems.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="experience-page">
      <div className="section-header">
        <h2 className="neon-text">My Journey</h2>
      </div>

      <div className="timeline-container">
        {/* The Center Line */}
        <div className="center-line"></div>

        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {/* The Glowing Dot */}
            <div className="timeline-dot"></div>

            {/* The Content Card */}
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company">@ {item.company}</h4>
              <p className="timeline-desc">{item.desc}</p>
              
              <div className="timeline-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;