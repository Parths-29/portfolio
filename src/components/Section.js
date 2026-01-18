import React, { useRef } from "react";
import Card from "./Card";

function Section({ title, linkText, arrows, items, headerClass }) {
    // 1. New: Create a reference for the cards container
    const carouselRef = useRef(null);

    // 2. New: Function to handle horizontal scroll (e.g., when clicking arrows)
    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 300; // Pixels to scroll
            const currentScroll = carouselRef.current.scrollLeft;

            if (direction === 'left') {
                carouselRef.current.scrollLeft = currentScroll - scrollAmount;
            } else if (direction === 'right') {
                carouselRef.current.scrollLeft = currentScroll + scrollAmount;
            }
        }
    };

    // Determine the class for the item type (skills/projects)
    const cardGridClass = 
        items[0]?.type === "skill" ? "skills-carousel" : 
        items[0]?.type === "project" ? "projects-carousel" : 
        "";

    return (
        <section className="section">
            <div className={`section-header ${headerClass || ''}`}>
                <h2>{title}</h2>
                {linkText ? (
                    <a href="#" className="view-all">{linkText}</a>
                ) : arrows ? (
                    <div className="nav-arrows">
                        {/* New: Attach click handlers to arrows */}
                        <div className="nav-arrow" onClick={() => scroll('left')}>‹</div>
                        <div className="nav-arrow" onClick={() => scroll('right')}>›</div>
                    </div>
                ) : null}
            </div>
            
            {/* 3. CRITICAL CHANGE: Use a new wrapper for horizontal flow */}
            <div
                ref={carouselRef} // Attach the ref here
                className={`horizontal-carousel ${cardGridClass}`}
            >
                {items.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </div>
            {/* The old 'cards-grid' div is replaced by 'horizontal-carousel' */}

        </section>
    );
}

export default Section;