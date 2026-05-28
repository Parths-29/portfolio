import { useState, useEffect } from 'react';

const DEFAULTS = {
  accent:        'red',
  scanlines:     true,
  filmGrain:     false,
  cursorTrail:   true,
  motionSpeed:   1,
  sound:         false,
  recruiterMode: false,
  hackerMode:    false,
};

const ACCENT_MAP = {
  red:    { hex: '#ff0000', rgb: '255,0,0',   hover: '#cc0000' },
  cyan:   { hex: '#00d4ff', rgb: '0,212,255',  hover: '#00aacc' },
  amber:  { hex: '#f59e0b', rgb: '245,158,11', hover: '#d97706' },
  violet: { hex: '#a855f7', rgb: '168,85,247', hover: '#9333ea' },
  matrix: { hex: '#22c55e', rgb: '34,197,94',  hover: '#16a34a' },
};

function applySettings(settings) {
  const root = document.documentElement;
  const body = document.body;

  // Accent
  const accent = ACCENT_MAP[settings.accent];
  root.style.setProperty('--accent',     accent.hex);
  root.style.setProperty('--accent-rgb', accent.rgb);
  root.style.setProperty('--accent-hover', accent.hover);
  root.style.setProperty('--accent-dim', `rgba(${accent.rgb},0.15)`);

  // Motion speed
  root.style.setProperty('--motion-speed', settings.motionSpeed);

  // Body classes
  body.classList.toggle('recruiter-mode', settings.recruiterMode);
  body.classList.toggle('hacker-mode',    settings.hackerMode && !settings.recruiterMode);

  // Overlays
  document.getElementById('scanline-overlay')?.style.setProperty(
    'display', settings.scanlines && !settings.recruiterMode ? 'block' : 'none'
  );
  document.getElementById('film-grain')?.style.setProperty(
    'display', settings.filmGrain && !settings.recruiterMode ? 'block' : 'none'
  );
}

export function useSettings() {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-settings');
      return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
    } catch { return DEFAULTS; }
  });

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem('portfolio-settings', JSON.stringify(settings));
  }, [settings]);

  const update = (key, value) => setSettings(prev => ({ ...prev, [key]: value }));

  const toggleRecruiterMode = () => {
    setSettings(prev => ({
      ...prev,
      recruiterMode: !prev.recruiterMode,
      hackerMode: false,
    }));
  };

  const toggleHackerMode = () => {
    setSettings(prev => ({
      ...prev,
      hackerMode: !prev.hackerMode,
      recruiterMode: false,
    }));
  };

  return { settings, update, toggleRecruiterMode, toggleHackerMode, ACCENT_MAP };
}
