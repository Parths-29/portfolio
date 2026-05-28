import { useState, useRef, useEffect } from 'react';

function ProfileMenu({ avatarSrc }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }} className="profile-menu-container">
      <img
        src={avatarSrc}
        alt="Profile"
        onClick={() => setOpen(o => !o)}
        className="profile-avatar-clickable"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          cursor: 'pointer',
          border: open ? '2px solid #ff0000' : '2px solid rgba(255,255,255,0.15)',
          transition: 'border-color 0.2s',
          objectFit: 'cover',
        }}
      />
      {open && (
        <div className="profile-dropdown">
          {/* Profile Header */}
          <div className="dropdown-profile-header">
            <img 
              src={avatarSrc} 
              alt="Profile" 
              style={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
            />
            <div>
              <div className="dropdown-name">Parth Sharma</div>
              <div className="dropdown-role">Full Stack · AI Engineer</div>
            </div>
          </div>
          
          <div className="dropdown-divider" />
          
          {/* Status Items */}
          <div className="dropdown-status">⚡ Actively shipping code</div>
          <div className="dropdown-status">🇩🇪 Learning German (A1)</div>
          
          <div className="dropdown-divider" />
          
          {/* Action Links */}
          <a 
            href="https://github.com/Parths-29" 
            target="_blank" 
            rel="noreferrer" 
            className="dropdown-item"
          >
            <span>🐙</span> GitHub Profile
          </a>
          <a 
            href="https://www.linkedin.com/in/parth-sharma-16469a293" 
            target="_blank" 
            rel="noreferrer" 
            className="dropdown-item"
          >
            <span>💼</span> LinkedIn
          </a>
          
          <div className="dropdown-divider" />
          
          {/* Resume Actions */}
          <a 
            href="https://drive.google.com/file/d/1ZsHSWVdyWksoH5eIu2aTiUrlLG2Oi5fX/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="dropdown-item primary"
          >
            View Resume ↗
          </a>
          <a 
            href="https://drive.google.com/file/d/1ZsHSWVdyWksoH5eIu2aTiUrlLG2Oi5fX/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="dropdown-item"
          >
            ⬇ Download CV
          </a>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
