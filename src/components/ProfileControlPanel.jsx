import { useState, useRef, useEffect } from 'react';
import { useSettings } from '../hooks/useSettings';

const ACCENT_COLORS = [
  { key: 'red',    hex: '#ff0000', label: 'Default' },
  { key: 'cyan',   hex: '#00d4ff', label: 'Cyber'   },
  { key: 'amber',  hex: '#f59e0b', label: 'Amber'   },
  { key: 'violet', hex: '#a855f7', label: 'Violet'  },
  { key: 'matrix', hex: '#22c55e', label: 'Matrix'  },
];

function Toggle({ label, value, onChange, disabled }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 12px', borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.15s',
        background: 'transparent',
      }}
      onClick={() => !disabled && onChange(!value)}
      onMouseEnter={e => !disabled && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: 'inherit' }}>
        {label}
      </span>
      <div style={{
        width: 32, height: 18, borderRadius: 9,
        background: value ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
        position: 'relative',
        transition: 'background 0.2s',
        flexShrink: 0,
      }}>
        <div style={{
          position: 'absolute',
          top: 3, left: value ? 17 : 3,
          width: 12, height: 12,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s cubic-bezier(0.16,1,0.3,1)',
        }}/>
      </div>
    </div>
  );
}

export default function ProfileControlPanel({ avatarSrc }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const { settings, update, toggleRecruiterMode, toggleHackerMode, ACCENT_MAP } = useSettings();

  useEffect(() => {
    const handler = e => { if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const clickCount = useRef(0);
  const clickTimer = useRef(null);
  const handleAvatarClick = () => {
    clickCount.current++;
    clearTimeout(clickTimer.current);
    if (clickCount.current >= 5) {
      toggleHackerMode();
      clickCount.current = 0;
      return;
    }
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
      setOpen(o => !o);
    }, 400);
  };

  return (
    <div ref={panelRef} style={{ position: 'relative' }}>
      <img
        src={avatarSrc}
        onClick={handleAvatarClick}
        alt="Settings"
        style={{
          width: 34, height: 34, borderRadius: '50%',
          cursor: 'pointer', objectFit: 'cover',
          border: open
            ? '2px solid var(--accent)'
            : settings.recruiterMode
              ? '2px solid #555'
              : '2px solid rgba(255,255,255,0.12)',
          transition: 'border-color 0.2s',
          outline: open ? '3px solid var(--accent-dim)' : 'none',
        }}
      />

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', right: 0,
          width: 260,
          background: '#1a1a1a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 10,
          boxShadow: '0 4px 6px rgba(0,0,0,0.3), 0 20px 48px rgba(0,0,0,0.6)',
          overflow: 'hidden',
          animation: 'dropdownReveal 0.2s cubic-bezier(0.16,1,0.3,1) both',
          zIndex: 9999,
        }}>

          <div style={{ padding: '12px 14px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'Courier New', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {settings.recruiterMode ? 'RECRUITER MODE' : settings.hackerMode ? 'HACKER MODE' : 'CONTROL PANEL'}
            </div>
          </div>

          <div style={{ padding: '10px 14px 8px' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'Courier New', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
              Accent Color
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {ACCENT_COLORS.map(({ key, hex, label }) => (
                <button
                  key={key}
                  title={label}
                  onClick={() => update('accent', key)}
                  style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: hex, border: 'none', cursor: 'pointer',
                    outline: settings.accent === key ? `3px solid ${hex}` : '2px solid transparent',
                    outlineOffset: 2,
                    transform: settings.accent === key ? 'scale(1.15)' : 'scale(1)',
                    transition: 'transform 0.15s, outline 0.15s',
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '0 14px' }}/>

          <div style={{ padding: '8px 2px' }}>
            <div style={{ padding: '4px 12px 6px', fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'Courier New', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Visual FX
            </div>
            <Toggle label="CRT Scanlines"  value={settings.scanlines}   onChange={v => update('scanlines', v)}   disabled={settings.recruiterMode}/>
            <Toggle label="Film Grain"     value={settings.filmGrain}   onChange={v => update('filmGrain', v)}   disabled={settings.recruiterMode}/>
            <Toggle label="Cursor Trail"   value={settings.cursorTrail} onChange={v => update('cursorTrail', v)} disabled={settings.recruiterMode}/>
          </div>

          <div style={{ padding: '4px 14px 10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, marginTop: 8 }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'Courier New', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Motion Speed
              </span>
              <span style={{ fontSize: 10, color: 'var(--accent)', fontFamily: 'Courier New' }}>
                {settings.motionSpeed === 0 ? 'OFF' : settings.motionSpeed === 0.5 ? '0.5×' : settings.motionSpeed === 1 ? '1×' : '2×'}
              </span>
            </div>
            <input
              type="range" min="0" max="2" step="0.5"
              value={settings.motionSpeed}
              onChange={e => update('motionSpeed', parseFloat(e.target.value))}
              disabled={settings.recruiterMode}
              style={{ width: '100%', accentColor: 'var(--accent)', opacity: settings.recruiterMode ? 0.4 : 1 }}
            />
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }}/>

          <Toggle label="UI Sound Effects" value={settings.sound} onChange={v => update('sound', v)} disabled={settings.recruiterMode}/>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }}/>

          <div
            onClick={toggleRecruiterMode}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 14px', cursor: 'pointer',
              background: settings.recruiterMode ? 'rgba(255,215,0,0.07)' : 'transparent',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => !settings.recruiterMode && (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
            onMouseLeave={e => !settings.recruiterMode && (e.currentTarget.style.background = 'transparent')}
          >
            <div>
              <div style={{ fontSize: 12, color: settings.recruiterMode ? '#ffd700' : 'rgba(255,255,255,0.7)' }}>
                Recruiter Mode
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
                {settings.recruiterMode ? 'Professional view' : 'For interviews'}
              </div>
            </div>
            <div style={{
              fontSize: 9, fontFamily: 'Courier New',
              color: settings.recruiterMode ? '#ffd700' : 'rgba(255,255,255,0.25)',
              border: `1px solid ${settings.recruiterMode ? '#ffd700' : 'rgba(255,255,255,0.12)'}`,
              padding: '2px 6px', borderRadius: 4,
            }}>
              {settings.recruiterMode ? 'ON' : 'OFF'}
            </div>
          </div>

          <div style={{ padding: '6px 14px 10px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,0,0,0.25)', fontFamily: 'Courier New', textAlign: 'center', letterSpacing: '0.04em' }}>
              {settings.hackerMode ? 'HACKER MODE ACTIVE' : 'click avatar 5x for easter egg'}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
