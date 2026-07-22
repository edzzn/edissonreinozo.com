---
title: I used AI to learn Django. The trick was making it refuse to help.
date: 2026-07-21
description: How I flipped the roles with an AI assistant, coaching instead of solving, to actually learn. With a few ideas borrowed from Taleb's Antifragile.
tags: [ai, learning, django, antifragile]
---

<script>
	import LoopComparison from '$lib/components/diagrams/LoopComparison.svelte';
	import FadingScaffolding from '$lib/components/diagrams/FadingScaffolding.svelte';
	import BoilerplateShrinking from '$lib/components/diagrams/BoilerplateShrinking.svelte';
	import BarbellStrategy from '$lib/components/diagrams/BarbellStrategy.svelte';
</script>

I've been building a Django REST Framework backend with a Next.js frontend. Nothing exotic. A coursework tracker: courses, assignments, tasks, notes. The kind of app you've seen a hundred times.

The interesting part isn't the app. It's how I built it. I used an AI assistant the whole way, but not the way most people do. I told it up front that it was not allowed to write my Django code. Not a serializer, not a viewset, not a permission class. "Not even to show me."

That one rule changed everything. This post is about what I learned about Django, but really it's about what I learned about learning anything with AI, because the default way we use these tools is quietly terrible for actually getting good at something.

## The trap

Here's the default loop with an AI coding assistant:

> You: "Add JWT auth to my DRF app."
> It: writes 60 perfect lines across four files.
> You: "thanks" (paste, it works, move on)

You now have working auth and understand none of it. You couldn't rebuild it in an interview. You couldn't debug it when it breaks at 2am. You outsourced not just the typing but the understanding, and the understanding was the whole point.

The tool is so good at producing correct code that it removes the friction that learning is made of. Struggling to figure out where a line goes, guessing what an endpoint returns, reading a traceback and being wrong. That friction isn't a flaw in the process. It's the whole thing. Used carelessly, AI sands all of it away and leaves you with a working app and an empty head.

## The inversion: coach, not author

So I flipped the roles. The rules I gave it:

1. Never write my Django code. When I'm stuck, give me the next step, not the answer.
2. Scaffold with comments, not code. Drop TODO markers into my files describing what goes there and why. I type the actual line.
3. Make me predict before we run anything. "What status will this return, 401, 403, or 404? Why that one and not the others?"
4. When something breaks, show me the traceback and ask what I think before explaining.
5. Quiz me. Warm-up questions from older material at the start of each session.

There was one escape hatch, a phrase I could say to turn off coaching mode for exactly one response, for when I genuinely just needed to see a pattern. I used it rarely. That mattered. The friction has to be the default, with an option to skip it, not the other way around.

<LoopComparison locale="en" />

## The mistake of hiding too much

At first the coach hid too much. Minimal hints worked for familiar topics, but I couldn't figure out what a ViewSet was if I'd never seen one. That wasn't learning; it was getting stuck.

We changed the rule: the first time, give me a clear explanation and scaffolding in the exact place in the file; the second time, give me less help and let me use my earlier code as a reference. As the pattern became familiar, the help disappeared.

<FadingScaffolding locale="en" />

Coaching means giving you enough help to move forward, then reducing it as you learn.

## It started with books and a plan, not code

I knew nothing about the subject. So before writing a single line I asked for the boring stuff: reference books, the official docs, a couple of serious sources to anchor myself. And instead of reading cover to cover, we decided to start with a real project and learn on top of it.

That forced the AI to have a clear idea of where the whole thing was going from day one. It wasn't "solve this endpoint for me," it was a whole learning plan, with a deliberate order, knowing this was code to understand and not code for production.

And the part that surprised me most: the plan deliberately included steps I'd have to unlearn. Things I did the wrong way, or the long and tedious way, just so I'd later understand why the short way exists.

The best example was how I wrote the views. First a function-based view, by hand, with all the work spelled out. Then I rewrote it as a more formal class. Then I collapsed it onto DRF's generic views. And finally into a ViewSet, which does almost everything for you. I could have started at the ViewSet in the first hour and saved three-quarters of the typing. But then the abstractions would have been magic. Doing it the long way first, I felt exactly what each layer was taking off my plate. Feeling the boilerplate was the whole point.

<BoilerplateShrinking locale="en" />

Security went the same way. First I filtered everything by user by hand, the logic scattered wherever it landed, and only afterward met the piece DRF ships for exactly that. You learn the clumsy version, it hurts a little, and then the elegant version makes sense instead of being a recipe you copy without knowing what it solves.

It sounds inefficient, and it is if all you want is the app. But if what you want is to understand, doing things wrong on purpose, in a deliberate order, turned out to be one of the most valuable parts of the whole thing.

## See something finished first

Another thing that helped a lot: before building mine step by step, I let the AI build a complete application on its own. Not the same one, but with many of the same concepts, start to finish, done and working.

It sounds contradictory after everything I said about not letting it write my code. But seeing something complete is a different way of learning than building it. It gives you a reference shape, a picture of where you're headed. You can open it up, follow a request from one end to the other, see how pieces you can't even name yet connect.

It's the difference between being handed a finished puzzle to study for a while, and being handed loose pieces with no picture on the box. The picture first, then you build it with your own hands. Analyzing something finished and building something from scratch are two different muscles, and I used both on purpose.

## The bugs were the syllabus

I already knew backend development. What was new was learning how Django solves problems I already understood.

With `prefetch_related`, for example, I learned how Django avoids N+1 queries and how to verify it using several records. I also discovered that URL versioning passes the version into each view: my custom actions didn't accept that argument and failed, while DRF's built-in views kept working.

Fixing those errors in code I wrote myself made Django's decisions stop feeling like magic.

## Knowing where to let the AI drive

I only protected what I wanted to learn: DRF. The AI could handle the frontend, configuration, seed data, and styling. That kept the difficulty focused on Django while everything else moved quickly.

## It already had a name: antifragile

While I was doing all this I was reading Antifragile, by Nassim Taleb, and at some point it clicked that the book was describing exactly what was happening to me.

Taleb splits things into three. The fragile breaks under stress. The robust withstands it. And the antifragile gets stronger from it, it improves precisely because of the hits. Code I paste and don't understand is fragile knowledge: it works until reality moves an inch, and then I'm helpless. What I want to build is the opposite, an understanding that gets stronger every time something goes wrong.

And that's where the bugs fit. The errors, being wrong, the red traceback, they aren't accidents to avoid, they're the stress that makes me stronger. It's like muscle, or bone, or the immune system: a small dose of stress builds capacity, and total protection causes atrophy. A learning process should be designed to gain from the hits, not to shield you from them.

The cruelest twist Taleb names is iatrogenics: the harm done by the help. The one who steps in to cure and ends up making worse the thing they meant to fix. An AI that writes all your code is iatrogenic to your understanding. It cures the symptom, not having working code, and worsens the disease, not learning anything. It looks like help, and that's exactly why it's so dangerous.

Even letting the AI drive everything else has a name in there: the barbell. Go to both extremes and don't sit in the middle. Maximum effort and friction on the one thing you want to learn, maximum leverage on everything else, and nothing in that lukewarm middle where you half-learn everything and own none of it. The middle is the fragile part. The two extremes, together, are antifragile.

<BarbellStrategy locale="en" />

And if you ask me why those bugs taught me so much and a tutorial doesn't, the answer is somewhere in there too: I had something at stake. They were my bugs, in my code, with my afternoon on the line. Risking your own is what makes the lesson stick.

## The playbook, for anything

Take Django out of it and this all generalizes.

- Guard your learning objective. Name the one thing you want to get better at and forbid the AI from doing that part. Let it do the rest.
- Ask for the next step, not the answer. "Give me a hint" beats "give me the solution" every single time you actually want to keep it.
- Predict before you run. Say what you think will happen out loud first. Being wrong on the record is where the learning is.
- Read your own errors. Have it show you the traceback and ask you before it explains. Debugging alone is the graduation exam.
- Treat bugs as the syllabus, not interruptions to it.
- Go wide first, then deep. I did a fast, shallow pass over the whole framework to get the map, then a slow second pass for depth. You can't deepen what you don't have a slot for yet.
- Check the AI, because it is sometimes confidently wrong. It once assured me a test protected against a regression that it did not. Trust, then verify, ideally by running the thing.

## The uncomfortable part

The better these tools get, the easier it becomes to ship work you don't understand, and the more deliberate you have to be to learn anything at all. The productivity path and the learning path have quietly split apart. Most days I want the productivity path, and that's fine. But when the goal is to actually get better, for an interview, for the craft, for the version of me who has to maintain this later, I have to pick the slower road on purpose and get the tool to hold me to it.

The most useful thing my AI assistant did was refuse to help, over and over. And I had to ask it to. That's the part worth remembering. The tool won't choose your learning for you. You have to set it up to make you struggle, and then thank it when it does.
