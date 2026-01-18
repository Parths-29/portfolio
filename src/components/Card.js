import React from "react";

function Card({ icon, title, category, desc, type }) {
  return (
    <div
      className="card"
      onClick={() => console.log(`${title || "Project"} clicked`)}
    >
      <div className={`card-image ${type}`}>
        {/* CRITICAL FIX: Renders image using <img> with styling to fit container */}
        {icon && 
            <img 
                src={icon} 
                alt={title} 
                className="card-icon-img" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
        }
        <div className="play-overlay">▶</div>
        
        {/* If you want the title to overlay the image, you would add it here 
            instead of relying on the content div below */}

      </div>
      {title && (
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-category">{category}</div>
          <div className="card-description">{desc}</div>
        </div>
      )}
    </div>
  );
}

export default Card;