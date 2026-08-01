# Publications Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create two dedicated, highly visual pages for the user's publications, and update the routing to make them accessible.

**Tech Stack:** React, Tailwind CSS, Framer Motion, react-router-dom, lucide-react (if icons needed, or basic html).

## Global Constraints

- Keep styling consistent with the existing minimalist, lowercase, and smooth-animated aura.
- Do not use deleted components like `Card`, `Accordion`, etc. Use native `div`s with Tailwind for layouts.
- Ensure the project builds successfully with `npm run build`.

---

### Task 1: Update Routing and Publications List

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Publications.tsx`

**Interfaces:**
- Consumes: None
- Produces: Updated app routing.

- [ ] **Step 1: Add new routes in App.tsx**
Import `BioimagingPublication` and `BasketballPublication` (we will create them in the next tasks) and add them to the `<Routes>` in `src/App.tsx`.
Use paths: `/publications/bioimaging` and `/publications/basketball`.

- [ ] **Step 2: Modify Publications.tsx**
Update the `publications` array to include an `internalLink` field.
Modify the rendering to use `Link` from `react-router-dom` to go to the `internalLink` as the primary action, and perhaps keep the `details` as an external `<a>` link to the actual paper.
Example:
```tsx
<Link to={pub.internalLink} className="block">
  <div className="flex justify-between items-start mb-2">...</div>
</Link>
<a href={pub.link} target="_blank" className="text-sm text-text-muted hover:underline">Read full paper: {pub.details}</a>
```

- [ ] **Step 3: Commit**
Commit changes with `feat: setup routing for internal publication pages`.

---

### Task 2: Create Bioimaging Page

**Files:**
- Create: `src/pages/BioimagingPublication.tsx`

- [ ] **Step 1: Create the Bioimaging page component**
Create a minimalist "Scroll Storytelling" page using `<Navigation />` and `<Footer />`.
Content:
- Hero: Use `/bioimaging_hero.jpg` via a large `div` or `img` with overlay text "revealing hidden bioimaging information".
- The Challenge: Explain the problem with isotropic depolarization masking tissue structure.
- The Filter (IDF): Explain the solution briefly.
- Interactive Results: Use the `Tabs` and `TabsList`, `TabsTrigger`, `TabsContent` from `@/components/ui/tabs` to show "heart tissue" vs "brain tissue".

- [ ] **Step 2: Verify Build**
Run `npm run build`.

- [ ] **Step 3: Commit**
Commit changes with `feat: create bioimaging publication page`.

---

### Task 3: Create Basketball Page

**Files:**
- Create: `src/pages/BasketballPublication.tsx`

- [ ] **Step 1: Create the Basketball page component**
Similar layout to Task 2.
Content:
- Hero: Use `/basketball_hero.jpg` with title "see it before you grab it".
- The Challenge: Anticipating rebounds is chaotic due to occlusions and multi-agent dynamics.
- The Dataset: NBA Rebounds (100k clips, 300 hours).
- Interactive Results: Use `Tabs` for "ai vs human" and "visual cues". AI matches humans at 1.5s but loses at 0.5s because AI ignores ball tracking.

- [ ] **Step 2: Verify Build**
Run `npm run build`.

- [ ] **Step 3: Commit**
Commit changes with `feat: create basketball publication page`.
