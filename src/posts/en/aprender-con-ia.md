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

There's an important nuance here, because the first version of this setup didn't work. At first the coach withheld almost everything. It gave me minimal hints and expected me to derive the rest. For topics I'd already touched, great. But I was starting from zero, and I learned this the hard way: you can't discover on your own a pattern you've never seen.

I was never going to "figure out" what a ViewSet is if I'd never laid eyes on one. Half the time I didn't even know where the line it mentioned was supposed to go, because I had no mental model of where it fit. Asking someone to reinvent an abstraction they don't know exists isn't productive friction, it's just leaving them stuck.

So we course-corrected. The new rule: the first time a pattern shows up, show me plenty, a detailed scaffold right at the spot in the file, what goes there and why. The second time, much less, and I look at my own earlier code as the reference. The help fades as the pattern becomes familiar.

<FadingScaffolding locale="en" />

That's the difference between hiding and coaching. Hiding is withholding information for sport. Coaching is giving you just enough to take the next step yourself, and that "just enough" changes with how much you already know.

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

Nobody tells you this, but every moment I actually learned something was a failure. Not the happy path. The bugs. And because I was the one writing the code, they were my bugs, which is why fixing them rewired something.

A few that stuck.

**CORS is a browser thing, not an API thing.** My frontend login kept failing with "Failed to fetch." I assumed the API was broken. The coach had me curl the same endpoint, and it came back 200 OK, tokens and all. The API was fine the whole time. The browser was throwing the response away because one header was missing. I will never again confuse "the server rejected it" with "the browser refused to keep it." And what made it stick wasn't the explanation, it was that I predicted "the API is broken" and got to be wrong out loud first.

**A test can pass for the wrong reason.** I added URL versioning, which moved every route under `/api/v1/`. Two of my ownership tests stayed green. Except they asserted a 404, and now they got a 404 because the route no longer existed, not because the security check fired. A false green. My tests were lying to me and looked perfectly healthy doing it. I'd have shipped that without blinking. Watching a green suite hide a real regression taught me more about testing than any post on coverage ever has.

**My "N+1 guard" guarded nothing.** I wrote a test asserting the query count stayed flat, to protect a `prefetch_related`. The coach pointed out my test used one parent record, and the N+1 only shows up with several. With a single course, the query count was identical with or without the optimization. My test would pass even if I deleted the exact thing it existed to protect. We proved it: pulled the prefetch, test still passed. Then I fixed the test to use three records, pulled the prefetch again, and this time it failed, 8 queries instead of 3. That's the moment I actually understood what the query-count assertion is for.

**Turning on versioning broke my custom endpoints.** The version in the URL gets handed to every view as an argument. My hand-written action methods had fixed signatures with no room for it, so they 500'd instantly. The built-in ones swallowed it without complaint. Reading the error myself, and working out why the list endpoint survived while my custom one died, is knowledge I own now instead of knowledge I pasted.

None of these are in a tutorial. They came from building a real thing and being made to sit with the failure instead of having it quietly cleaned up.

## Knowing where to let the AI drive

Here's the balance that kept this from being miserable. I only guarded the thing I was trying to learn. The goal was DRF, so DRF was off-limits to the AI. Everything else, the React frontend, the config, the throwaway seed data, the styling, I let it rip through as fast as it wanted.

That's not a compromise, it's the actual skill. Learning with AI isn't "do everything the hard way." It's drawing a sharp line around the one thing you want to get good at and being strict on both sides of it. Maximum friction inside the line, maximum leverage outside it. I built the entire frontend in an afternoon, AI-driven, and its only job was to exercise the backend I was actually studying. The frontend was scaffolding for the learning, not the learning.

## Knowing when not to use something

A good coach also talks you out of things. At one point I asked whether I should put gRPC between my frontend and Django. The honest answer I got was that it would be architecture cosplay. gRPC is for service-to-service traffic, browsers can't even speak it natively, and Django fights it the whole way. We talked through when it's the right call (internal microservices) versus when it's just résumé-driven complexity (here). I got more out of the "don't" than I would have from a working gRPC setup I didn't need.

Taste, knowing what not to build, is teachable too. You just have to ask "is this the right tool?" instead of "how do I use this tool?"

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
