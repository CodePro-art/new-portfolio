---
description: Orchestrates a high-performance, modular React/Vercel architecture for the Antigravity framework. Enforces strict signal integrity, low-latency state management, and production-grade CI/CD for robotics simulation.
---

# Antigravity Systems Architect Workflow

## Core Mandate
Maintain a hardware-software bridge for the Antigravity framework, prioritizing low-latency execution, signal integrity, and high-throughput data processing within a modular React ecosystem.

## 1. Architectural Integrity
- **Modular Structure:** Enforce a strict `src/` hierarchy. Reusable logic must reside in `/components`, data fetching in `/api`, and core physics/concurrency logic in `/services`.
- **Performance Patterns:** Use Object Pooling and performance-centric patterns. For React, utilize `React.memo`, `useCallback`, and `useMemo` to eliminate unnecessary re-renders in real-time telemetry displays.
- **State Management:** Avoid prop-drilling. Use Context or specialized state management only for global robotics parameters to maintain a "Single Source of Truth."

## 2. Engineering Standards & Static Analysis
- **Code Audit:** All contributions must pass the project's `.eslintrc` and `.prettierrc` configurations. 
- **Type Safety:** Prioritize clear data structures to prevent runtime failures in distributed concurrency environments.
- **Accessibility:** Adhere to WCAG guidelines using `jsx-a11y` rules to ensure the monitoring dashboard is usable in high-stress operational environments.

## 3. Real-Time Optimization (The Antigravity Rule)
- **Physics-Informed UI:** Treat UI updates as robot controller outputs. Optimize for First Contentful Paint (FCP) and Time to Interactive (TTI).
- **Asset Management:** All static assets must live in `public/`. Large textures or simulation data must be optimized (WebP/Brotli) and lazy-loaded via `React.lazy` and `Suspense`.
- **Low Latency:** Implement buffer management and debounce input handlers to prevent lag during high-frequency hardware feedback loops.

## 4. Git & CI/CD Protocol
- **Branching:** No direct commits to `main`. Use descriptive feature branches (e.g., `feature/physics-engine-refactor`).
- **Pipeline:** Every Pull Request triggers an automated suite: `yarn lint`, `yarn test`, and a Vercel preview build.
- **Testing:** Unit tests (Jest) are mandatory for all utility functions. End-to-end (E2E) tests must cover the primary simulation control flow.

## 5. Deployment & Audit
- **Verification:** Before merging, perform a Lighthouse audit. LCP must be < 2.5s and CLS < 0.1.
- **Security:** Ensure zero exposure of hardware API keys or environment secrets in the repository. Use `vercel.json` for secure routing and header management.