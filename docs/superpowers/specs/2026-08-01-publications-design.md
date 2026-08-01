# Publications Pages Design Spec

## Overview
This sub-project (Phase 3) adds two dedicated, visually immersive pages for the user's publications. The pages will use a "Scroll Storytelling" approach with custom AI-generated conceptual hero images, clean typography, and interactive components (`Tabs`, `Carousel`) to summarize complex research into high-level, engaging content in English.

## Scope
1. **`src/App.tsx`**: Add two new routes: `/publications/bioimaging` and `/publications/basketball`.
2. **`src/pages/PublicationsPage.tsx`**: Update the links to point to these new internal routes instead of the raw PDF URLs.
3. **`src/pages/BioimagingPublication.tsx`**: Create the Bioimaging page.
4. **`src/pages/BasketballPublication.tsx`**: Create the Basketball Anticipation page.

## Assets
Two new AI-generated hero images have been created and placed in the `public/` directory:
- `/bioimaging_hero.jpg`: Abstract macro photography of glowing fibrous tissue.
- `/basketball_hero.jpg`: Abstract minimalist 3D render of a basketball with analytics concepts.

## Design Components

### Common Layout for Both Pages
- **Hero Section**: Full-screen or large aspect-ratio banner using the generated image, overlaid with a dramatic gradient and the title of the paper.
- **Content Flow**: Minimalist, single-column text flow (max-w-3xl) to maintain the site's lowercase/clean aura.
- **Interactive Sections**: Using `Tabs` to allow the user to explore the results interactively without scrolling through walls of text.

### Bioimaging Page (`BioimagingPublication.tsx`)
- **Title**: revealing hidden bioimaging information by isotropic depolarization filtering
- **The Challenge**: Standard microscopes struggle to see hidden structures (like myocardial fibers) because of isotropic depolarization (scattered light noise).
- **The Solution**: An Isotropic Depolarization Filter (IDF) that mathematically removes this noise from Mueller matrix images.
- **Interactive Results (Tabs)**:
  - Tab 1: "Heart Tissue" (Highlights the unmasking of myocardial vs subendocardial tissues).
  - Tab 2: "Brain Tissue" (Highlights the discovery of previously invisible white matter fiber tracts).

### Basketball Page (`BasketballPublication.tsx`)
- **Title**: see it before you grab it: deep learning-based rebound anticipation
- **The Challenge**: Predicting rebounds in basketball is highly chaotic due to occlusions, multiple players contesting, and irregular ball bounces.
- **The Dataset**: *NBA Rebounds* - A custom dataset of 100,000 clips (over 300 hours) annotated for rebounds.
- **Interactive Results (Tabs)**:
  - Tab 1: "AI vs Humans" (AI matches humans at 1.5s anticipation, but humans win at 0.5s due to ball tracking).
  - Tab 2: "Visual Cues" (AI focuses on player positioning and momentum, ignoring the ball, while humans track the ball).

## Success Criteria
- The new pages are accessible from the main publications list.
- The design strictly adheres to the site's minimalist aesthetic, relying on native `div` layouts since `Card` was removed.
- Interactive elements (`Tabs`) work smoothly.
- The content successfully distills the PDFs into accessible high-level English summaries.
