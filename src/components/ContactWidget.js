import React, { useState } from "react";
import { Mail, Phone, X } from "lucide-react";

function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email handling (you can integrate with EmailJS or your backend)
    window.location.href = `mailto:parth.sharma1@somaiya.edu?subject=Contact from ${contactForm.name}&body=${contactForm.message}`;
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Contact Button - Top Right Corner */}
      {!isOpen && (
        <div className="contact-widget-button" onClick={() => setIsOpen(true)}>
          <Mail size={20} />
        </div>
      )}

      {/* Contact Modal */}
      {isOpen && (
        <div className="contact-widget-overlay" onClick={() => setIsOpen(false)}>
          <div className="contact-widget-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="contact-widget-header">
              <div>
                <h3>Get in Touch</h3>
                <p className="contact-subtitle">Recruiters, collaborators, or just curious? Let's talk!</p>
              </div>
              <button className="contact-close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Quick Contact Options */}
            <div className="contact-quick-options">
              <a href="mailto:parth.sharma1@somaiya.edu" className="contact-option">
                <Mail size={18} />
                <div>
                  <p className="option-label">Email</p>
                  <p className="option-value">parth.sharma1@somaiya.edu</p>
                </div>
              </a>
              <a href="tel:+919324769799" className="contact-option">
                <Phone size={18} />
                <div>
                  <p className="option-label">Phone</p>
                  <p className="option-value">+91 9324769799</p>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div className="contact-divider"></div>

            {/* Quick Buttons */}
            <div className="contact-quick-buttons">
              <button 
                className="quick-button"
                onClick={() => {
                  window.location.href = "mailto:parth.sharma1@somaiya.edu?subject=Job Opportunity";
                  setIsOpen(false);
                }}
              >
                💼 Hiring Opportunity
              </button>
              <button 
                className="quick-button" 
                onClick={() => {
                  window.location.href = "mailto:parth.sharma1@somaiya.edu?subject=Let's Collaborate";
                  setIsOpen(false);
                }}
              >
                🤝 Collaboration
              </button>
              <button 
                className="quick-button"
                onClick={() => {
                  window.location.href = "mailto:parth.sharma1@somaiya.edu?subject=General Inquiry";
                  setIsOpen(false);
                }}
              >
                ❓ Just Saying Hi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactWidget;
