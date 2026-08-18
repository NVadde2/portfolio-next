---
title: "Tutorly: Peer Tutoring, Built by the Students Who Needed It"
tag: "Web Dev"
date: "2022-12-12"
description: "A CS 409 final project at UIUC — a platform where students teach each other, built with a team of five."
---

Tutorly was my CS 409 (Web Programming) final project at UIUC, built with a team of five — we called ourselves the "Llaminators." The idea came from a simple frustration: reaching a TA who has to know an entire course is harder than finding a classmate who's just really good at the one topic you're stuck on. So Tutorly connects those two kinds of people directly, no expert required — just whoever needs help with a topic, and whoever's actually good at it. We ended up placing top 3 out of around 60 submissions that semester.

## What I actually built

My main pieces were the "Add Course" flow — the form where a tutor sets a title, description, tags, price, and how much experience they have — and the tutor availability calendar, where you set the dates/times you're free to teach. I also built the slot-booking UI on the learner side.

The part I remember struggling with most was the calendar and slot-booking logic. Getting a time picker to actually validate correctly — checking a slot falls within business hours, isn't already taken, and (a rule I'm still a little proud of) blocking you from booking a session with yourself — took a few passes to get right. If you look at the commit history there's a chunk of commented-out logic sitting right above the version that shipped, which is basically just me thinking out loud in code.

![Booking screen for a Competitive Programming session, showing the tutor, hourly rate, and an availability calendar](/images/projects/calendar.png)

Somewhere in the middle of that I also chased down a properly dumb async bug: I was setting my "current user" state directly from an API call that returns a promise, without waiting for it to resolve — so the app was silently comparing everything against an unresolved Promise object instead of an actual user ID. Nothing crashed, it just quietly broke every check that depended on knowing who was logged in. A one-line `.then()` fixed it, but it's the kind of async mistake I've been careful about ever since.

Honestly, my favorite part of the project wasn't even the UI — it was sitting down with the backend half of the team to sketch out the ER diagrams and API contracts, then coming back to wire the frontend up to match what we'd designed together. Getting that handoff right was more satisfying than I expected going in.

## How the whole thing works

Every account can both learn and teach — there's a toggle at the top, no separate account types. Sign up with your university and degree, and you get a $100 signup credit so there's zero friction to book your first session. Browse by category (Web Programming, Data Structures, Databases, etc.) or search directly, sort by rating or tutor experience, book a slot, and both people get an automatic confirmation email with the date, time, and each other's contact info. After the session, the learner gets a quick feedback prompt — star rating, "would you recommend this tutor," optional comment.

## Under the hood

Sign-in itself goes through Firebase (Google auth) — but once you're in, the app doesn't carry a session token around. It stores your email in `localStorage` and re-resolves it against the Spring Boot backend on pretty much every page to figure out your real user ID, which is exactly the setup that made the promise bug above so easy to write. The backend leans on Spring Data REST for a lot of the basic reads — endpoints like `findByEmail` or `findByUser_UserId` are auto-generated from repository method names rather than hand-written, which is a neat trick when it fits and a bit opaque when it doesn't.

## Process

Before writing code, we wireframed the whole thing in Balsamiq and ran a heuristic evaluation on it — a structured usability pass looking for places a user would get confused. One deliberate call that came out of that process: browsing courses is a single unified view instead of separate pages per category, specifically to cut down on navigation friction for someone who just wants to scan everything available.

![Balsamiq wireframe of the Learn page, showing category tabs and topic cards grouped underneath](/images/projects/process.png)

## Looking back

A few things I'd do differently if I rebuilt this today. Most actions (adding a course, booking a slot) just call `window.location.reload()` to refresh the page instead of updating state in place — TanStack Query would fix that outright, with proper caching and refetching instead of a blunt reload. The localStorage-email-lookup approach to "who am I" is exactly the kind of thing a Zustand store instead of re-deriving it on every page would have made a non-issue. And once a session is booked, there's no way to cancel or reschedule it — a real gap for a tutoring app, and the first thing I'd build next. I'd also reach for Next.js over Create React App now, if only for how much less deployment ceremony it takes to keep something like this alive past a semester.

## Scope

This was a class project with a hard deadline, so we made calls about what to cut — topic-level rating aggregation was one we explicitly scoped out to keep the semester manageable.

The app isn't live anymore — it was hosted on student-tier infra that didn't outlive the semester — but you can [watch the demo](https://www.youtube.com/watch?v=dr29ZyRU9g0), [watch the heuristic evaluation walkthrough](https://www.youtube.com/watch?v=BZZegt0MwJQ), or check out [the code](https://github.com/NVadde2/tutorly).
