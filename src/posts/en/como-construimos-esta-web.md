---
title: Context Engineering — The new paradigm for AI-assisted development
date: 2025-07-21
description: How a shift in mindset completely changed the way I build software with Claude
tags: [ai, development, context-engineering, claude]
---

## It’s no longer prompt engineering—it’s context engineering

This is the most important shift in AI-assisted development that nobody is discussing. I stopped writing elaborate prompts and started building rich contexts. The result was a complete transformation of my website in a single session with Claude.

## The discovery

It began with a seemingly simple migration: moving a blog from Gatsby to SvelteKit. What I discovered along the way fundamentally changed how I work with AI.

Instead of writing prompts such as:

- “Create a blog component with filters”
- “Add dark mode to the site”
- “Implement post search”

I did something different. I gave Claude full access to the existing project and asked it to understand the codebase deeply. The result was revealing.

## Context engineering in action

### Step 1: Building the context

```
“Explore the entire Gatsby project structure.
Understand how the blog works.
Document your findings.
Create a migration plan.”
```

Claude did more than read files. It understood:

- The project architecture
- The coding conventions
- The design patterns
- The implicit technical decisions

### Step 2: Using context as a guide

With that deep understanding, every later decision was informed and coherent. I didn’t need to explain:

- Which folder structure to use
- How to name components
- Which libraries to prefer
- How to organize styles

Claude already knew from the context.

### Step 3: Automatic validation

Here comes the revolutionary part. With Playwright integrated, Claude didn’t just write code—it validated it:

```javascript
// Claude navigated through the site
// Checked every link
// Found a 404
// Created the missing page
// Checked again
// All in a single iteration
```

There was no back-and-forth and no “try this.” Claude iterated automatically until everything worked.

## The power of instant feedback

The Playwright integration changed everything. Claude can:

1. **See what it builds** — Navigate like a real user
2. **Detect problems** — Find errors before you do
3. **Self-correct** — Iterate without human intervention
4. **Validate the result** — Confirm that everything works

This is more than automation. It is a fundamental shift in how AI understands and validates its own work.

## Concrete results

In a single session:

- Complete migration from Gatsby to SvelteKit
- Theme system with smooth transitions
- Blog with search, filters, and tags
- Consistent minimalist design
- Zero bugs and zero manual iterations

But the real result was the shift in mindset.

## CLAUDE.md: Persistent memory

The context doesn’t die with the session. The `CLAUDE.md` file acts as the project’s memory:

```markdown
## Architecture

- SvelteKit with Svelte 5 runes
- MDsveX for Markdown
- Tailwind CSS v4

## Conventions

- Components in /src/lib/components
- Posts in /src/posts
- Spanish routes (/articulos, /sobre-mi)

## Commands

bun run dev
bun run build
bun run check
```

Any future Claude instance can immediately understand the project.

## Key lessons

### 1. Context is everything

You don’t need perfect prompts. You need excellent context. Consider the difference:

**Prompt engineering:**

```
“Create a blog post card with a title, date, excerpt, tags,
dark mode, smooth transitions, responsive behavior,
and accessibility best practices.”
```

**Context engineering:**

```
“Look at how the existing components are built.”
```

Claude understood more from the second request than the first.

### 2. Persistent memory matters

The `CLAUDE.md` file isn’t merely documentation. It is the living context of the project: every decision, convention, and useful command. It is the difference between starting over every time and continuing where you left off.

### 3. Automatic feedback is transformative

When Claude can see what it builds, everything changes. This isn’t just about finding errors. It is about understanding the real impact of the code—the difference between programming blind and programming with your eyes open.

### 4. The process emerges from context

I didn’t plan every step. Rich context allowed the process to emerge naturally:

- Knowledge of Gatsby informed the SvelteKit structure
- Existing conventions guided new decisions
- Patterns from the previous project evolved in the new one

## Implications for the future

This paradigm shift has profound implications.

### For developers

- Invest more time in building context
- Document decisions, not just code
- Use tools that support automatic validation

### For teams

- Shared context is more valuable than style guides
- `CLAUDE.md` can become the new README
- AI can maintain consistency better than linters

### For the industry

- Tools will evolve toward context awareness
- Documentation will become executable context
- Pair programming with AI will become the norm

## A real transformation

During the migration, Claude suggested removing unnecessary complexity. Not because I asked, but because the context showed that the original project contained premature abstractions.

The result: 40% less code and 100% more functionality.

## The real power

Context engineering is more than a technique. It is a shift in mindset:

- From instructing to collaborating
- From specifying to exploring
- From controlling to trusting

When you give AI the right context, you don’t need to control every detail. The result emerges naturally, and it is often better than what you would have specified.

## Next steps

This discovery changed the way I build software. Now every project begins with:

1. Meticulous context building
2. A `CLAUDE.md` file from day one
3. Integrated automatic validation
4. Iteration based on real feedback

## Conclusion

The future of AI-assisted development isn’t about writing better instructions. It is about building better contexts.

The next time you work with Claude or any AI, don’t begin with what you want it to do. Begin with what it needs to understand.

Context is the new code.

---

_Want to experiment with context engineering? Try [Claude Code](https://claude.ai/code). Have questions? [Let’s talk](/en/contact)._
