---
title: "A Year of Copilot and Gemini: What Actually Changed"
tag: "Engineering"
date: "2025-02-11"
description: "Not hype, not dismissal — a grounded look at what a year of daily Copilot and Gemini use actually changed about writing React."
---

Most posts about AI coding tools land in one of two camps: uncritical hype ("10x productivity!") or reflexive dismissal ("it just hallucinates garbage"). A year of using Copilot and Gemini daily hasn't put me in either camp. Here's what's actually true.

## What it's genuinely good at

Given just raw backend data and no design spec, I've built a useful dashboard in a matter of hours instead of days — the tool is fast at the specific job of turning a data shape into a reasonable first-pass UI. It's also become my default for generating test cases, especially on the frontend, where writing exhaustive test permutations by hand is exactly the kind of tedious work I'm happy to hand off. It's genuinely useful for responsive and accessible interface work too — getting a layout to behave across breakpoints, or getting the first pass of ARIA attributes in place. And it's changed how I debug: half the time, describing the bug out loud to it is what surfaces the actual root cause, independent of whether its suggested fix is even right.

## Where it falls short

None of that means I trust it unsupervised. Getting a team-wide instructions file (an AGENTS.md, in our case) to actually produce consistent behavior took a lot of prompts and a lot of retries before it settled into something reliable — it's not something you write once and walk away from. And confidence is not the same as correctness: a wrong suggestion shows up with exactly the same tone as a right one, so the discipline of actually reading and testing what it hands you doesn't get to go away. I don't rely on it heavily for anything that matters without checking — the code it generates can still have real bugs, and it still needs to be manually tested like any other code, not rubber-stamped because an AI wrote it.

## What changed at the team level

This wasn't just an individual habit — we worked on it together as a team, continually refining how we used Copilot and updating our shared instructions to get more consistent, more efficient output. We built an actual framework around it: not just generating code, but reviewing code, committing to the repo, reviewing PRs, using shared skills/tooling, and raising PRs — AI woven into the full lifecycle, not just autocomplete in the editor.

## It's not AI fairy dust

There's a real, useful piece of writing on this from [Netguru](https://www.netguru.com/blog/is-frontend-development-dying) that puts language to something I'd felt but hadn't articulated: AI code generation handles the *what* — producing a component that's syntactically correct and looks right on first render. Engineers still own the *why*. Copilot can generate a Server Component that passes every lint and type check and still silently breaks on hydration, because it mixed client-state assumptions into server-rendered markup. Automated tools catch maybe 30-40% of accessibility failures — the rest is judgment about ARIA roles in dynamic content and focus management that nothing autocompletes for you. Bundle-splitting tradeoffs need someone holding the whole dependency graph in their head at once.

That "what vs. why" gap is exactly why [I've come to care so much about guardrails at the architecture level](/blog/hexagonal-architecture-nextjs) — typed boundaries, validated data contracts, an error hierarchy that doesn't let a malformed assumption drift silently through the app. AI-generated code and API responses have more in common than people think: neither should be trusted blind, and the fix for both is the same. The AI was never doing the hard part. The guardrails were.
