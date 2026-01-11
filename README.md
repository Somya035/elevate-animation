# Animation Assignment

## Overview
This project recreates the animation from the reference video using **HTML, CSS, and JavaScript**. The focus is on visual accuracy, performance, and instant playback on page load.

---

## Tech & Decisions
- **HTML / CSS / JavaScript**
- No frameworks or animation libraries were used as the animation is self-contained and does not require state or runtime abstraction.
- This ensures instant load, minimal complexity, and easy CSS-based re-triggering.

---

## Implementation Notes
- Layout and alignment were finalized before adding animation logic.
- Use **CSS masking and clip-path techniques** for shapes .
- Animations are implemented with **CSS keyframes**, primarily animating `transform` and `opacity` for smooth, GPU-accelerated performance.
- JavaScript is used only to toggle CSS classes for replaying animations.

---

## Performance
- No dynamic imports
- No layout-heavy animations where avoidable
- Animation starts immediately on page load

---

## Running Locally
Open `index.html` in a browser  
or use a local server:
