---
title: "Hexagonal Architecture in a Next.js Frontend — Is It Worth It?"
tag: "Engineering"
date: "2026-04-10"
description: "Ports and adapters isn't just backend/DDD folklore — here's what it actually looks like on a React frontend, and when it's worth the ceremony."
image: "/images/blog/hex-architecture-diagram.svg"
---

Say "hexagon" and most people picture a honeycomb before they picture software architecture. Fair — I did too, until I ended up building one into a Next.js frontend at work, and figured I'd write down what it actually looks like from the frontend side, since almost nothing online covers that.

## The quick version, if you haven't run into it

Hexagonal architecture (a.k.a. "ports and adapters") is a pattern for keeping your core business logic completely ignorant of the outside world — the database, the API, the UI framework, all of it. Your business logic only talks to abstract "ports," and you write "adapters" that plug the real world into those ports. The pitch: swap out your API, your database, even your framework, and your actual business logic doesn't have to change.

## What that means on a frontend, concretely

On the backend this usually means keeping your domain model separate from your database schema. On a React/Next.js frontend, the equivalent split looks like this:

- A **domain layer**: plain TypeScript types and functions representing your actual business concepts — a `Policy`, a `Quote`, whatever your app is actually about — with zero knowledge of REST, GraphQL, or fetch.
- **Adapters**: the layer that takes whatever shape your backend actually returns and turns it into your domain types. This is also where I lean on [Zod](https://zod.dev) — validate the raw API response at the boundary, and if it doesn't match what you expect, fail loudly right there instead of letting a malformed object drift three components deep before something breaks in a confusing way.
- A **typed error hierarchy**: instead of every API call failing with a generic `Error` or a raw HTTP status code, you model the actual failure modes as types — `NotFoundError`, `ValidationError`, `UnauthorizedError` — so a component can handle "the policy doesn't exist" differently from "the request timed out" without string-matching an error message.
- Your **components and hooks** only ever touch the domain layer. They don't know or care whether data came from REST, a mock, or a completely different backend next quarter.

Here's a stripped-down, made-up example of what that adapter layer looks like in practice:

```ts
// domain/policy.ts — pure, framework-agnostic domain type
export interface Policy {
  id: string;
  holderName: string;
  status: "active" | "pending" | "expired";
}

// adapters/policy-adapter.ts — validate + translate at the boundary
import { z } from "zod";
import type { Policy } from "@/domain/policy";

const rawPolicySchema = z.object({
  policy_id: z.string(),
  holder_full_name: z.string(),
  policy_status: z.enum(["ACTIVE", "PENDING", "EXPIRED"]),
});

export function toPolicy(raw: unknown): Policy {
  const parsed = rawPolicySchema.parse(raw); // throws if the API shape drifts
  return {
    id: parsed.policy_id,
    holderName: parsed.holder_full_name,
    status: parsed.policy_status.toLowerCase() as Policy["status"],
  };
}
```

Nothing above the adapter ever sees `policy_id` or `POLICY_STATUS` — components just work with `Policy`, and if the backend renames a field tomorrow, exactly one function needs to change.

## Is it actually worth it?

Honestly — it depends, and I'd be skeptical of anyone who tells you it's always worth it.

Where it earned its keep for me: a large, long-lived platform where the backend contract genuinely does shift over time, multiple teams touch the same frontend, and "the API changed shape again" used to mean chasing the fallout through a dozen components. With the adapter layer, that fallout gets contained to one file. Testing business logic also gets a lot easier — you're testing plain functions with plain objects, no need to mock fetch or spin up a test server.

Where it's not worth it: basically every small project. A marketing site, a weekend project, most of what ends up in a portfolio — the ceremony of domain types + adapters + a typed error hierarchy is pure overhead if you've got three API calls and one team that already knows the codebase cold. I wouldn't build it into a project this size, and I don't think you should either unless you're already feeling real pain from tightly-coupled API shapes.

## The honest takeaway

This isn't a "always do this" post. It's closer to: this pattern exists on the frontend too, it's not just backend/DDD folklore, and it's worth knowing about *before* you're in enough pain to reinvent it badly under deadline pressure. If your team is small and your API is stable, skip it. If you're maintaining a frontend where "the backend changed again" is a recurring source of bugs, it might be exactly the thing you're missing a name for.
