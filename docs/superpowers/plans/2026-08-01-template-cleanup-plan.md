# Template Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Delete unused template components to leave a clean, lightweight foundation.

**Architecture:** Deletion of unused files in the `src/components/ui` directory, retaining only the visually useful ones (`carousel`, `tabs`, `aspect-ratio`, `scroll-area`).

**Tech Stack:** React, Tailwind CSS.

## Global Constraints

- Do not delete `carousel.tsx`, `tabs.tsx`, `aspect-ratio.tsx`, `scroll-area.tsx` from `src/components/ui/`.
- Make sure the project still builds using `npm run build`.

---

### Task 1: Delete unused UI components

**Files:**
- Modify: (None)
- Create: (None)
- Test: (None)

**Interfaces:**
- Consumes: None
- Produces: None

- [ ] **Step 1: Delete the unused component files**

```bash
cd src/components/ui
rm accordion.tsx alert-dialog.tsx avatar.tsx breadcrumb.tsx calendar.tsx chart.tsx command.tsx context-menu.tsx drawer.tsx dropdown-menu.tsx hover-card.tsx input-otp.tsx menubar.tsx navigation-menu.tsx pagination.tsx progress.tsx radio-group.tsx resizable.tsx sidebar.tsx slider.tsx textarea.tsx toggle-group.tsx
cd ../../../
rm src/test/example.test.ts
```

- [ ] **Step 2: Verify the build passes**

Run: `npm run build`
Expected: PASS (build completes successfully)

- [ ] **Step 3: Commit**

```bash
git add -u src/components/ui/ src/test/
git commit -m "chore: remove unused shadcn ui components and test file"
```
