# Profile Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the profile sections by refactoring the `Experience.tsx` component and adding it to the main scroll layout.

**Architecture:** Modify `src/components/Experience.tsx` to display a hardcoded list of professional experiences instead of news milestones. Update `src/pages/Index.tsx` to include the `Experience` section between `AboutMe` and `LatestNews`.

**Tech Stack:** React, Tailwind CSS, Framer Motion.

## Global Constraints

- Keep all styling identical to the `LatestNews` component (minimalist, lowercase where possible, matching font colors).
- Ensure the project builds successfully with `npm run build`.

---

### Task 1: Refactor Experience Component

**Files:**
- Modify: `src/components/Experience.tsx:1-46`
- Create: None
- Test: None

**Interfaces:**
- Consumes: None
- Produces: `Experience` component with updated UI.

- [ ] **Step 1: Update component to show experience instead of news**

```tsx
import { motion } from "framer-motion";

const experiences = [
    { date: "2025 - present", title: "phd student @ ub-cvc" },
    { date: "2023 - present", title: "co-founder @ sinfon.ia" },
    { date: "2023 - 2024", title: "software developer @ seat" },
    { date: "2020 - present", title: "basketball coach" },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center px-8 pb-32">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-text-muted mb-12 uppercase tracking-wide"
      >
        Experience
      </motion.h3>
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 py-8 border-b border-foreground/10 hover:border-foreground/30 transition-colors duration-300">
            <span className="text-sm text-text-muted font-mono w-40 shrink-0 text-left">
              {exp.date}
            </span>
            <span className="text-xl md:text-2xl leading-snug text-foreground/80 hover:text-foreground transition-colors text-left max-w-2xl">
              {exp.title}
            </span>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Check for compilation errors**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/Experience.tsx
git commit -m "feat: refactor Experience component to show professional history"
```

---

### Task 2: Add Experience to Home Page

**Files:**
- Modify: `src/pages/Index.tsx`
- Create: None
- Test: None

**Interfaces:**
- Consumes: `Experience` component from Task 1.
- Produces: Updated `Index` page layout.

- [ ] **Step 1: Import and add Experience section**

In `src/pages/Index.tsx`:
Add `import Experience from "@/components/Experience";` at the top.
Add the section between `AboutMe` and `LatestNews`:
```tsx
      <div className="snap-start snap-always min-h-screen w-full flex items-center">
        <AboutMe />
      </div>
      <div className="snap-start snap-always min-h-screen w-full flex items-center">
        <Experience />
      </div>
      <div className="snap-start snap-always min-h-screen w-full flex items-center">
        <LatestNews />
      </div>
```

- [ ] **Step 2: Check for compilation errors**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: add experience section to home page layout"
```
