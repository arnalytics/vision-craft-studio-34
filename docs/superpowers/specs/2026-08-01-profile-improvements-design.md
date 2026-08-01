# Profile Improvements Design Spec

## Overview
This sub-project (Phase 2) implements an "Experience" section to the main page to highlight the user's professional background (PhD, Sinfon.ia, SEAT, Coach) based on their LinkedIn profile. It strictly adheres to the existing minimalist, lowercase, and snap-scroll aesthetic of the website.

## Scope
1. **`src/components/Experience.tsx`**: Refactor the current component (which currently displays news) to display a clean, timeline-style list of professional experience. 
2. **`src/pages/Index.tsx`**: Insert the `Experience` component as a new snap-scroll section between `AboutMe` and `LatestNews`.
3. **`src/components/AboutMe.tsx`**: Minor polish to the text if necessary, ensuring it perfectly complements the new Experience section without redundancy.

## Architecture & Data
The `Experience.tsx` component will use a local hardcoded array (for simplicity and minimalism, avoiding unnecessary separate data files):

```typescript
const experiences = [
    { date: "2025 - present", title: "phd student @ ub-cvc" },
    { date: "2023 - present", title: "co-founder @ sinfon.ia" },
    { date: "2023 - 2024", title: "software developer @ seat" },
    { date: "2020 - present", title: "basketball coach" },
];
```

The styling will mirror the `LatestNews.tsx` component:
- Date on the left (monospace, muted).
- Role on the right (regular text, slight hover effect).
- Animations using `framer-motion` (fade in and slight vertical translate on scroll).

## Success Criteria
- The home page scroll works seamlessly with the new section.
- The design perfectly matches the existing minimalist aesthetic.
- The `Experience` section accurately reflects the provided LinkedIn information in a condensed format.
