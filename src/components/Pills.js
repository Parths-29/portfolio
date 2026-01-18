import React from "react";

function Pills({ activePill, setActivePill }) {
  const pills = [
    "Web Development",
    "AI/ML",
    "Python",
    "Java",
    "React",
    "Node.js",
    "Projects",
    "Certifications",
  ];

  return (
    <div className="category-pills">
      {pills.map((pill) => (
        <div
          key={pill}
          className={`pill ${activePill === pill ? "active" : ""}`}
          onClick={() => setActivePill(pill)}
        >
          {pill}
        </div>
      ))}
    </div>
  );
}

export default Pills;
