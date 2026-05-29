import { useState, useEffect, useRef } from 'react';
import tudumSound from './netflix-tudum.mp3';
import profileImg from './image1.jpg';

// ── Timing constants ──────────────────────────────────────────────
const T = {
  logoZoomDuration: 1400,   // name animation duration
  logoHoldDuration: 400,    // extra hold (baked into nameSlam keyframe)
  logoFadeOut: 400,         // (baked into nameSlam keyframe)
  selectFadeIn: 500,        // SELECT OPERATOR fade in
  cardStagger: 80,          // ms between card appearances
  cardFlash: 150,           // brightness flash on click
  screenFadeOut: 400,       // intro fades to black
  appFadeIn: 300,           // main app fades in from black
};

export default function IntroSequence({ onComplete }) {
  const [act, setAct] = useState('logo');       // 'logo' | 'select' | 'entering' | 'done'
  const [selectedCard, setSelectedCard] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const audioRef = useRef(null);

  // ── Act 1+2: Auto-advance logo → select ─────────────────────────
  useEffect(() => {
    if (act !== 'logo') return;

    // Play tudum immediately on mount
    const playAudio = async () => {
      try {
        const audio = new Audio(tudumSound);
        audioRef.current = audio;
        audio.volume = 1;
        audio.muted = false;
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('✓ Netflix tudum playing');
              setSoundPlayed(true);
            })
            .catch((error) => {
              console.warn('⚠️ Autoplay blocked. Browser policy:', error.name);
              console.log('💡 Click anywhere to play sound');
              setSoundPlayed(false);
            });
        }
      } catch (error) {
        console.warn('Error loading sound file:', error);
      }
    };

    playAudio();

    // Auto-advance to select after logo sequence
    const total = T.logoZoomDuration + T.logoHoldDuration + T.logoFadeOut;
    const timer = setTimeout(() => setAct('select'), total);

    return () => {
      clearTimeout(timer);
    };
  }, [act]);

  // ── Handle click to play sound (if autoplay was blocked) ─────────
  const handleClick = () => {
    if (!soundPlayed && audioRef.current) {
      audioRef.current.play().then(() => {
        setSoundPlayed(true);
        console.log('✓ Sound played on click');
      }).catch(err => console.warn('Play failed:', err));
    }
  };

  // ── Act 4: Handle card selection ────────────────────────────────
  const handleSelect = (cardType) => {
    if (act !== 'select') return;
    setSelectedCard(cardType);
    setAct('entering');

    // Step 1: brief card flash (handled by isSelected prop)
    // Step 2: fade entire intro to black after 150ms
    setTimeout(() => {
      const intro = document.getElementById('intro-container');
      if (intro) {
        intro.style.transition = 'opacity 400ms ease';
        intro.style.opacity = '0';
      }
    }, 150);

    // Step 3: call onComplete — app fades in on its own
    setTimeout(() => {
      setAct('done');
      onComplete(cardType);
    }, 600);
  };

  if (act === 'done') return null;

  return (
    <div
      id="intro-container"
      onClick={handleClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: !soundPlayed && act === 'logo' ? 'pointer' : 'default',
        // Grid background stays here if you had one
      }}
    >
      {/* ── ACT 1+2: LOGO SEQUENCE ── */}
      {act === 'logo' && (
        <div style={{ textAlign: 'center' }}>
          {/* Main name — slams in at tudum beat */}
          <div
            style={{
              fontSize: 'clamp(52px, 12vw, 120px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              fontFamily: 'Space Grotesk, sans-serif',
              animation: 'nameSlam 2.2s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            PARTH
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 12,
              fontFamily: 'Courier New, monospace',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginTop: 14,
              animation: 'subtitleFade 2.2s 350ms cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            SHARMA
          </div>

          {/* Red line — draws left to right after name appears */}
          <div
            style={{
              height: 2,
              background: 'var(--accent, #ff0000)',
              borderRadius: 1,
              marginTop: 18,
              animation: 'drawLine 0.35s 500ms ease-out both',
            }}
          />

          {/* Click hint if sound was blocked */}
          {!soundPlayed && (
            <div
              style={{
                marginTop: 32,
                fontSize: 11,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.15em',
                animation: 'fadeIn 0.6s 1.5s ease-out both',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              }}
            >
              ▶ CLICK TO PLAY SOUND
            </div>
          )}
        </div>
      )}

      {/* ── ACT 3: SELECT OPERATOR ── */}
      {(act === 'select' || act === 'entering') && (
        <div
          style={{
            textAlign: 'center',
            animation:
              act === 'select'
                ? `headerReveal ${T.selectFadeIn}ms cubic-bezier(0.16,1,0.3,1) both`
                : 'none',
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: 13,
              fontFamily: 'Courier New, monospace',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            SELECT OPERATOR
          </div>

          {/* Cards row */}
          <div style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
            {/* ── PARTH CARD ── */}
            <OperatorCard
              type="parth"
              label="PARTH"
              avatarSrc={profileImg}
              delay={0}
              isSelected={selectedCard === 'parth'}
              onClick={() => handleSelect('parth')}
              actPhase={act}
            />

            {/* ── GUEST CARD ── */}
            <OperatorCard
              type="guest"
              label="GUEST"
              badge="READ ONLY"
              delay={80}
              isSelected={selectedCard === 'guest'}
              onClick={() => handleSelect('guest')}
              actPhase={act}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ── OPERATOR CARD COMPONENT ──────────────────────────────────────────
function OperatorCard({
  type,
  label,
  badge,
  avatarSrc,
  delay,
  isSelected,
  onClick,
  actPhase,
}) {
  const [hovered, setHovered] = useState(false);
  const isParth = type === 'parth';

  return (
    <div
      onClick={actPhase === 'select' ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: 220,
        cursor: actPhase === 'select' ? 'pointer' : 'default',
        animation:
          actPhase === 'select'
            ? `cardReveal 0.55s ${delay}ms cubic-bezier(0.16,1,0.3,1) both`
            : 'none',
      }}
    >
      {/* Card image/visual */}
      <div
        style={{
          width: '100%',
          aspectRatio: '3/4',
          borderRadius: 10,
          overflow: 'hidden',
          background: isParth ? '#1a1a1a' : '#111',
          border: hovered
            ? '2px solid var(--accent, #ff0000)'
            : '2px solid rgba(255,255,255,0.06)',
          transition: isSelected
            ? 'filter 0.15s ease'
            : 'border-color 0.2s, box-shadow 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered && !isSelected ? 'scale(1.03)' : 'scale(1)',
          // Hovered: very subtle red inner glow
          boxShadow: hovered
            ? '0 0 0 1px rgba(255,0,0,0.2), 0 16px 40px rgba(0,0,0,0.6)'
            : '0 8px 24px rgba(0,0,0,0.5)',
          position: 'relative',
          filter: isSelected
            ? 'brightness(1.8) saturate(0)'
            : hovered
              ? 'brightness(1.1)'
              : 'brightness(0.85)',
        }}
      >
        {isParth && avatarSrc ? (
          <>
            <img
              src={avatarSrc}
              alt="Parth"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: hovered
                  ? 'grayscale(0%) brightness(1)'
                  : 'grayscale(100%) brightness(0.7)',
                transition: 'filter 0.5s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
            {/* Scan line decoration on image hover */}
            {hovered && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,0,0,0.03) 3px, rgba(255,0,0,0.03) 4px)',
                  pointerEvents: 'none',
                }}
              />
            )}
          </>
        ) : (
          // Guest card
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                border: `1.5px solid ${
                  hovered
                    ? 'rgba(255,0,0,0.4)'
                    : 'rgba(255,255,255,0.12)'
                }`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s',
                color: hovered
                  ? 'rgba(255,0,0,0.5)'
                  : 'rgba(255,255,255,0.2)',
                fontSize: 22,
                fontWeight: 300,
              }}
            >
              +
            </div>
          </div>
        )}
      </div>

      {/* Label */}
      <div
        style={{
          textAlign: 'center',
          marginTop: 16,
          fontFamily: 'Space Grotesk, monospace',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.7)',
          transition: 'color 0.2s',
        }}
      >
        {label}
      </div>

      {/* Badge (READ ONLY etc.) */}
      {badge && (
        <div
          style={{
            textAlign: 'center',
            marginTop: 6,
            display: 'inline-block',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '3px 8px',
              borderRadius: 3,
            }}
          >
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
