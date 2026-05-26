# 🎨 PARTH SHARMA PORTFOLIO — DESIGN SYSTEM v1.0

## PROJECT IDENTITY

This is a personal developer portfolio styled as a **Cyberpunk OS / Dark Media Player Interface** — 
the visual language sits at the intersection of **Netflix**, **YouTube Music**, **Apple Music**, 
and a terminal-grade developer dashboard.

### The Three Commandments
1. **It must feel like software, not a webpage.** Fixed sidebars, OS-style headers, scrollable content panes.
2. **Red is sacred. Use it with restraint.** Red is for active state, CTA, and critical emphasis only.
3. **Transitions must feel weighted.** Things slide, lift, and reveal — never just appear.

---

## 📦 COLOR SYSTEM

### Core Palette (Non-Negotiable)

```css
--bg-base:           #0a0a0a    /* Main app background — true dark */
--bg-elevated:       #121212    /* Sidebar, header */
--bg-surface:        #1a1a1a    /* Cards, panels */
--bg-hover:          #242424    /* Hover states */

--accent:            #ff0000    /* RED — primary accent */
--accent-dim:        #cc0000    /* Pressed states */
--accent-glow:       rgba(255, 0, 0, 0.15)    /* Ambient glow */
--accent-soft:       rgba(255, 0, 0, 0.08)    /* Subtle tint */
--accent-strong:     rgba(255, 0, 0, 0.4)     /* Heavy glow */

--text-primary:      #ffffff
--text-secondary:    #aaaaaa
--text-muted:        #666666
--text-on-accent:    #000000

--border-default:    rgba(255, 255, 255, 0.08)
--border-hover:      rgba(255, 255, 255, 0.15)
--border-active:     rgba(255, 0, 0, 0.4)
```

### Color Rules
- ✅ Never use pure #000000 — use `--bg-base` (#0a0a0a)
- ✅ Red appears in: active nav items, primary buttons, glowing dots, hover borders, section bars
- ✅ No gradients on backgrounds — keep flat, minimal, focused
- ✅ Grayscale filters on images (80% default, lifted on hover)

---

## 🔤 TYPOGRAPHY SYSTEM

### Font Stack
```css
Headers & UI:   'Space Grotesk', sans-serif
Body text:      'Inter', sans-serif
Monospace:      'JetBrains Mono', monospace
```

### Type Scale

| Size | Font | Weight | Tracking | Use Case |
|------|------|--------|----------|----------|
| 64–80px | Space Grotesk | 700–800 | -0.04em | Hero title |
| 48–56px | Space Grotesk | 700 | -0.03em | H1 (names) |
| 32–40px | Space Grotesk | 600 | -0.02em | H2 (section) |
| 20–24px | Inter | 600 | -0.01em | H3 (card titles) |
| 17–18px | Inter | 400 | 0 | Body Large |
| 14–15px | Inter | 400 | 0 | Body |
| 11–12px | JetBrains Mono | 500–600 | 0.06em | Caption/Tag (UPPERCASE) |
| 13px | JetBrains Mono | 400 | 0 | Mono labels |

### Typography Rules
- Section titles use uppercase + bold + white, never gradient text
- Tech stack tags are monospace, uppercase, small (11–12px), red accent
- Body text max-width: 65ch (prevents long line lengths)
- Sidebar nav labels: 13–14px, `--text-secondary`, transition to white on hover

---

## 🏗️ LAYOUT ARCHITECTURE

### OS Shell Structure
```
┌─────────────────────────────────────────────────┐
│  HEADER (sticky, 60px, glass, full-width)       │
├──────────────┬─────────────────────────────────┤
│ SIDEBAR      │  MAIN CONTENT (scrollable)      │
│ (fixed, 260) │  padding: 32–48px              │
│              │                                 │
│ nav items    │  section content               │
│ clock widget │                                 │
└──────────────┴─────────────────────────────────┘
```

### Desktop (769px+)
- **Sidebar:** Fixed, 260px wide, scrollable
- **Header:** Sticky at top, 60px tall
- **Main:** Flex 1, overflow-y auto, scrollable

### Mobile (<768px)
- **Sidebar:** Horizontal bar, scrollable x
- **Header:** Sticky, full width
- **Main:** Full width, normal scroll

---

## 💎 GLASSMORPHISM PATTERNS

### Standard Glass Panel
```css
background: rgba(18, 18, 18, 0.75);
backdrop-filter: blur(12px) saturate(150%);
-webkit-backdrop-filter: blur(12px) saturate(150%);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Elevated Glass (Modal, Hover)
```css
background: rgba(30, 30, 30, 0.85);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.12);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

---

## 🎯 SHADOW SYSTEM

Never use flat gray shadows. Shadows are either neutral-dark or red-tinted.

```css
/* Card resting */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

/* Card hover — lifts */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 0, 0, 0.2);

/* Active element — red glow */
box-shadow: 0 0 15px rgba(255, 0, 0, 0.4),
            0 0 40px rgba(255, 0, 0, 0.15);

/* Sidebar neon edge */
box-shadow: 3px 0 20px rgba(255, 0, 0, 0.08);

/* Input focus */
box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.3),
            0 4px 16px rgba(255, 0, 0, 0.1);
```

---

## 🧩 COMPONENT PATTERNS

### HEADER
- **Height:** 60px, sticky, glass background
- **Bottom:** Laser line (linear gradient transparent → red → transparent)
- **Left:** Logo "PARTH SHARMA_" — Space Grotesk bold, red ">" prefix
- **Center:** Search bar — dark fill, pill shape, glows red on focus
- **Right:** Clock (monospace, red dot) + Avatar

### SIDEBAR NAVIGATION
- **Width:** 260px, fixed
- **Right edge:** 1px border + subtle red glow
- **Section labels:** 11px uppercase monospace, text-muted
- **Nav items:**
  - Default: text-secondary, no background
  - Hover: translateX(4px), tinted background, transparent→red border
  - Active: rgba(255,0,0,0.1) background, 4px solid red left border, text-primary

### BENTO PROJECT CARDS
- **Grid:** auto-fit, mixed sizes (wide, tall, square)
- **Images:** grayscale(80%) brightness(0.6) → lifted on hover
- **Hover:**
  - translateY(-5px) lift
  - Images: grayscale removed, brightness(0.85), scale(1.08)
  - Border: turns red
  - Box-shadow: red glow
  - Text/arrow reveals (opacity 0→1, translateY 10→0)

### SECTION HEADER
```html
<div class="section-header">
  <div class="section-accent-bar"></div>
  <div>
    <h2>MY WORK</h2>
    <p>Select a sector to view projects</p>
  </div>
</div>
```
- Accent bar: 4px solid red, full height
- Title: 56px bold, white, uppercase
- Subtitle: 14px secondary color

### BUTTONS

**Primary**
```css
background: #ff0000;
color: #000;
padding: 10px 22px;
border-radius: 6px;
font-weight: 600;
font-size: 13px;
```
- Hover: background #cc0000, translateY(-1px), red shadow
- Active: translateY(1px), no shadow

**Ghost**
```css
background: transparent;
color: #aaa;
border: 1px solid rgba(255,255,255,0.15);
```
- Hover: border → rgba(255,255,255,0.35), color → white

---

## 🎬 ANIMATION & MOTION

### Easing Functions
```css
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1)
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-standard:  cubic-bezier(0.25, 0.8, 0.25, 1)
```

### Signature Animations

#### 1. Pulsing Dot (LIVE Indicator)
```css
@keyframes pulse {
  0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
  70%  { transform: scale(1);    box-shadow: 0 0 0 6px rgba(255, 0, 0, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
}
```

#### 2. Marquee Scroll (Skills Section)
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
/* Pause on hover */
&:hover { animation-play-state: paused; }
```

#### 3. Timeline Slide-In
```css
.timeline-item.left  { opacity: 0; transform: translateX(-80px); }
.timeline-item.right { opacity: 0; transform: translateX(80px); }
.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### 4. Neon Pulse (Logo)
```css
@keyframes neonPulse {
  0%   { box-shadow: 0 0 5px #ff0000, 0 0 10px rgba(255,0,0,0.3); }
  100% { box-shadow: 0 0 15px #ff0000, 0 0 30px rgba(255,0,0,0.2); }
}
```

### Hover Interaction Rules
- **Cards:** translateY(-5px) + red border + image de-grayscale — never scale
- **Nav items:** translateX(4px) + tint background — never scale
- **Buttons:** translateY(-1px) on hover, translateY(1px) on active
- **Images:** scale(1.08) inside overflow:hidden wrapper
- **Timeline dots:** border → red + box-shadow: 0 0 30px #ff0000

---

## 📱 RESPONSIVE DESIGN

### Desktop (769px+)
```css
body { display: flex; flex-direction: column; overflow: hidden; }
.sidebar { width: 260px; position: fixed; height: calc(100vh - 60px); }
.main-content { flex: 1; overflow-y: auto; margin-left: 260px; }
```

### Mobile (<768px)
```css
body { overflow-y: auto; }
.sidebar { width: 100%; height: auto; overflow-x: auto; display: flex; flex-direction: row; }
.main-content { width: 100%; }
.bento-grid { grid-template-columns: 1fr; }
.timeline-item { width: 100%; }
```

---

## ❌ ABSOLUTE DON'TS

These break the theme and must never be added:

| Don't | Why | Alternative |
|-------|-----|-------------|
| Purple, pink, blue accents | Breaks cyberpunk red-on-black | Stick to red only |
| White backgrounds | Destroys dark mode | Use `--bg-*` variables |
| `transition: all` | Vague, hard to debug | Name specific properties |
| `transform: scale()` on cards | Looks cheap | Use translateY instead |
| Generic shadows | `0 4px 6px rgba(0,0,0,0.1)` | Use red-tinted variants |
| `border-radius: 20px` | Applies everywhere | 6–8px cards, 4px tags, 9999px pills |
| Multiple red glows | Loses focus | One red glow per view |
| Gradient text on headings | Outdated | Solid white only |
| `linear-gradient(135deg, #667eea, #764ba2)` | Non-thematic | No place in this codebase |
| Page-load animations below fold | Bad UX | Animate on scroll only |
| New font families | Consistency | Space Grotesk, Inter, JetBrains Mono |
| `<br>` for spacing | Bad markup | Use margin/padding/gap |
| Centered page layout | Against shell design | Left-anchored OS shell always |

---

## ✅ IMPLEMENTATION CHECKLIST

Before writing any new component or feature:

- [ ] Colors sourced from CSS vars only (no hardcoded hex except `:root`)
- [ ] Red used only where functionally justified (active, CTA, emphasis)
- [ ] All transitions name specific properties (no `transition: all`)
- [ ] Hover states use translateY on cards/buttons, never scale
- [ ] New images default to `grayscale(80%) brightness(0.6)` — lifted on hover
- [ ] Glass effect present on panels (`backdrop-filter: blur`)
- [ ] New sections follow fixed sidebar + scrollable main layout
- [ ] Monospace font used for: clock, tags, tech labels, version strings
- [ ] `prefers-reduced-motion` wraps all animations
- [ ] Mobile: sidebar goes horizontal, grid collapses to 1 column
- [ ] All text uses type scale classes (`.type-h1`, `.type-body`, etc.)
- [ ] No hardcoded spacings — use `--spacing-*` vars
- [ ] Button interactions use weight, not shape (no pill→square)
- [ ] Every interactive element has a focus state

---

## 🎯 REFERENCE AESTHETIC

This portfolio lives at the intersection of:
- **YouTube Music:** Dark card grids, grayscale-to-color hover, red accent
- **Netflix:** Full-bleed content, bold titles, media-forward cards
- **Apple Music:** Refined glass panels, tight type, premium surfaces
- **GitHub/Linear:** Developer credibility, monospace, technical density

**North Star Question:** *"Would this feel at home inside YouTube Music's dark sidebar?"*

If yes, ship it. If no, rethink it.

---

## 🚀 INTEGRATION

### Import in `src/index.js` or App Component
```javascript
import './design-system.css';  // Load before component styles
import './index.css';           // Component-specific overrides
```

### Use Variables & Classes
```jsx
// ✅ Good
<div className="card">
  <div className="card-image">
    <img src="..." alt="..." />
  </div>
  <div className="card-content">
    <h3 className="card-title type-h3">Project Name</h3>
    <p className="card-category">React • Node.js</p>
  </div>
</div>

// ❌ Bad
<div style={{ background: '#1a1a1a', padding: '20px' }}>
  ...
</div>
```

---

## 📝 Version History

**v1.0** — 2026-05-26
- Initial design system
- Full color, typography, layout specs
- Animation library
- Component patterns
- Implementation checklist

---

## 🤝 Contributing

When adding new components or styles:
1. Reference this document first
2. Use CSS variables and utility classes
3. Follow the checklist before committing
4. Ensure mobile responsive
5. Test with `prefers-reduced-motion`
6. Keep red accents minimal and purposeful

---

**Built with ❤️ for a cyberpunk portfolio that feels like real software.**
