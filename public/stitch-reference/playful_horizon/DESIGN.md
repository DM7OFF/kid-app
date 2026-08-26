---
name: Playful Horizon
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e4850'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#47c1ff'
  on-primary-container: '#004d6c'
  inverse-primary: '#81cfff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd029'
  on-secondary-container: '#6f5900'
  tertiary: '#9f4119'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9d78'
  on-tertiary-container: '#802b03'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#81cfff'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#ffe085'
  secondary-fixed-dim: '#eec215'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#7f2b02'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-xl:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  touch-target-min: 64px
  gutter: 24px
  margin-mobile: 24px
  margin-tablet: 48px
  margin-desktop: 80px
  stack-gap: 32px
---

## Brand & Style

The design system is centered on **Joyful Discovery**. It targets early learners (ages 3-8) by blending a premium startup aesthetic with a tactile, gamified environment. The goal is to evoke a sense of safety, excitement, and accomplishment.

The design style is a hybrid of **Modern Minimalism** and **Tactile Playfulness**. It utilizes high-quality "squishy" elements that feel physical and reactive. Every interaction should feel like a toy—responsive, bouncy, and rewarding. We avoid all visual clutter, secondary navigation, or "adult" patterns like complex dropdowns or dense data tables.

## Colors

The palette is vibrant yet balanced by soft, pastel backdrops to prevent eye strain during long learning sessions. 

- **Primary (Sky Blue):** Used for the main brand elements and primary progress indicators.
- **Secondary (Sun Yellow):** Reserved for high-value rewards, "Level Up" moments, and stars.
- **Tertiary (Bright Orange):** Used for critical interactive prompts.
- **Backgrounds:** Use the pastel variants of the primary colors to define different "worlds" or subjects (e.g., light green for science, light pink for reading).
- **Contrast:** Ensure all text maintains a high contrast ratio against its specific background, targeting WCAG AA standards for accessibility.

## Typography

Typography must be highly legible and friendly. We use **Plus Jakarta Sans** for headlines to provide a modern, clean structure, and **Quicksand** for body text due to its rounded terminals which appear softer to children. 

**Lexend** is utilized for functional labels and buttons because its character spacing is specifically designed to reduce visual stress and improve reading fluency. Avoid font sizes below 18px to ensure easy reading on tablets held at arm's length.

## Layout & Spacing

This design system uses a **Fluid, Centered Grid** optimized for landscape tablet orientation. 

- **The Big Button Rule:** Every interactive element must be at least 64px tall/wide to accommodate developing motor skills.
- **White Space:** Use generous margins (minimum 24px) to separate interactive zones. This prevents accidental taps and helps kids focus on one task at a time.
- **Vertical Rhythm:** Content should flow in a single column or simple 2-column grid. Avoid complex sidebars; use a bottom-tab bar for navigation on tablets and mobile.

## Elevation & Depth

Depth is used to signal "Tappability." This system uses **Tactile Layering**:

- **Active Elements:** Use a "3D" effect—a solid bottom border (4px to 8px) that is a darker shade of the element's color. When pressed, the element translates downward and the shadow disappears, mimicking a physical button.
- **Surface Depth:** Use soft, multi-layered ambient shadows (low opacity, high blur) to lift cards off the pastel backgrounds.
- **No Floating:** Elements should feel grounded. Avoid high-elevation floating action buttons; keep everything within the perceived "play surface."

## Shapes

The shape language is strictly **Pill-shaped and Ultra-Rounded**. There are no sharp corners in the design system. 

- **Primary Buttons:** Fully rounded (pill).
- **Cards/Containers:** Use `rounded-xl` (1.5rem / 24px) or larger.
- **Icons:** Use thick strokes (3px+) with rounded caps and joins to match the typography.

## Components

### Buttons & Inputs
- **Primary Action:** Large, colorful buttons with the "3D" bottom-border effect. Use "Wiggle" animations for the primary "Play" or "Next" button to draw attention.
- **Selection Chips:** Use large icons with text labels. Selected states should have a thick, colored border (4px) and a subtle bounce animation.
- **Input Fields:** Oversized text entry areas with thick borders. Use a "speech-to-text" icon prominently to assist non-readers.

### Navigation & Progress
- **The Progress Bar:** A thick, rounded track. The filler should be a vibrant gradient (e.g., Green to Lime) with a "sparkle" or "character head" at the leading edge.
- **Navigation:** A simple bottom bar with large, high-contrast icons. Use labels beneath icons for kids who are learning to read.

### Feedback & Rewards
- **Cards:** White containers with soft shadows. Content inside should be limited to one "Idea" or "Task" per card.
- **Success State:** When a task is completed, trigger a "Confetti" overlay and a large, high-quality badge/star illustration.
- **Character Guidance:** A consistent character should appear in the top-left or right corner to provide visual cues (e.g., a pointing hand or a cheering animation).