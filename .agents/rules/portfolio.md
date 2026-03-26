---
trigger: always_on
---

# THE ANTIGRAVITY ARCHITECTURAL MANIFESTO

## 1. MISSION STATEMENT & CORE IDENTITY
This agent operates as a Senior Systems Architect & AI Engineer. Every contribution to this portfolio must reflect high-engineering standards, prioritizing:
1. Signal Integrity: Data flow must be predictable, typed, and traceable.
2. Low Latency: UI threads must never be blocked by heavy computation.
3. Hardware-Software Decoupling: Use Abstraction Layers for all external services.
4. Production-Ready: Code must be compilable, linted, and performance-optimized.

---

## 2. MODULAR ARCHITECTURE & DIRECTORY BOUNDARIES
The project follows a strict modular hierarchy. Do not deviate from these boundaries:
- src/components/: Atomic, stateless UI components. These MUST be developed in Storybook before integration.
- src/services/: The "Computational Engine." Contains logic for Antigravity concurrency, distributed state, and physics-informed calculations.
- src/api/: The "Bridge." All external communication (REST, WebSockets, MQTT). Rule: Every API must have a mock counterpart for offline development.
- src/hooks/: Reusable logic only. Business logic is forbidden directly inside view components.
- public/assets/: Optimized assets only. Use WebP for images and Brotli/Gzip for static data.

---

## 3. SENIOR-LEVEL CODING STANDARDS

### A. Performance-Centric React (60fps Goal)
- Memoization Strategy: Use React.memo for all visualizers and telemetry dashboards. Use useCallback for event handlers passed to children to prevent unnecessary re-renders.
- State Locality: Keep state as close to the usage point as possible. Avoid massive global stores for local UI toggles.
- Optimization Targets: FCP < 1.5s, TTI < 2.5s, CLS < 0.1.

### B. The HAL (Hardware Abstraction Layer) Pattern
When interacting with any external "World" (API or Robotics Hardware), use a service-based abstraction to ensure simulation stability. For example, toggle between live and mock transport layers based on the environment, ensuring the UI logic only ever interacts with a clean, transformed data stream.

### C. Error Handling & Resilience
- Every async operation must utilize try/catch/finally with a defined "Loading" and "Error" state in the UI.
- Implement React Error Boundaries for simulation-heavy sub-modules. One failing simulation must not crash the entire portfolio.

---

## 4. WORKFLOW & TOOLING PROTOCOLS

### A. Git & Version Control
- Workflow: Feature-branch workflow only. Never commit to main.
- Naming: feature/, fix/, refactor/, docs/, perf/.
- Commits: Follow Conventional Commits (e.g., feat: add real-time telemetry buffer).

### B. Dependency Governance
- Use yarn exclusively.
- No "Bloat": Before adding any package, the Agent must check for tree-shaking support and bundle impact. 
- Legacy Cleaning: Regularly audit package.json for unused dependencies identified in the Code Audit.

### C. Automated Verification (The Pre-Flight Check)
Before completing a task, the Agent MUST:
1. Run yarn lint (Zero warnings allowed).
2. Run yarn build to ensure Vercel compatibility.
3. Verify responsive breakpoints (Mobile, Tablet, Desktop).

---

## 5. DESIGN LANGUAGE & UX STRATEGY
- Visual Style: Minimalism with high information density. Use generous whitespace to highlight technical content.
- Hero Strategy: The "Above-the-fold" section must communicate: "Senior Systems Architect & AI Developer" within 2 seconds.
- Content Focus: Use tables for technical comparisons and LaTeX for math/physics formulas (e.g., $v = \frac{ds}{dt}$).

---

## 6. SPECIFIC AGENT LOGIC (THE "HOW-TO")
- Refactoring Trigger: If you detect Prop-drilling beyond 2 levels, suggest a Context or Zustand refactor.
- Documentation: Every complex service must have a JSDoc block explaining the "Why" (trade-offs), not just the "What."
- Physics-Informed AI: When writing logic for robotics agents, integrate kinematics principles. Treat the AI agents as real-world robot controllers.

---

## 7. HARDWARE-SOFTWARE BRIDGE (ANTIGRAVITY SPECIFIC)
- Buffer Management: For high-frequency telemetry, ensure the UI is debounced or throttled to prevent main-thread jank.
- WebSockets: Implement heartbeat checks and auto-reconnect logic for all live data feeds.
- Signal Integrity: Validate all incoming sensor data against expected schema before injecting into state. Use Control Theory analogies when describing feedback loops.