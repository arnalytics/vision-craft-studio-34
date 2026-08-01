# Template Cleanup Design Spec

## Overview
The goal of this sub-project is to clean up the existing repository by removing unused files and components that came with the original internet template. This will provide a clean, lightweight foundation before building the new features (Publication pages).

## Scope
We will remove unused UI components from `src/components/ui/` and any example test files that are not relevant to the portfolio.

## Keep
The following components will be retained as they will be critical for the highly visual Publication Pages that will be built in the next phase:
- `carousel.tsx` (for images/figures)
- `tabs.tsx` (for sectioning content)
- `aspect-ratio.tsx` (for perfect image/PDF preview scaling)
- `scroll-area.tsx` (for long text blocks)

## Delete
The following unused components and files will be deleted:
- `accordion.tsx`
- `alert-dialog.tsx`
- `avatar.tsx`
- `breadcrumb.tsx`
- `calendar.tsx`
- `chart.tsx`
- `command.tsx`
- `context-menu.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `hover-card.tsx`
- `input-otp.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `sidebar.tsx`
- `slider.tsx`
- `textarea.tsx`
- `toggle-group.tsx`
- `test/example.test.ts`

## Success Criteria
- The repository is free of the specified unused files.
- The website builds successfully without any missing import errors.
- The retained components remain fully functional and ready for Phase 3.
