---
title: The TOEFL doesn't measure your English. It measures how you execute a format against a clock.
date: 2026-07-28
description: I scored 118 out of 120 in eleven days by treating the exam as an engineering problem. Read the spec, build a feedback loop, automate the structure. Includes the full talk I gave for JavaScript Ecuador.
tags: [toefl, english, ai, learning]
---

I've been writing code, docs, and pull requests in English for six years. Client calls, code reviews, all of it. I walked into the TOEFL assuming it was paperwork.

The first practice test knocked me off that horse. Not because my English wasn't there, but because the format and the clock are a different sport.

I ended up with 118 out of 120, level C2. I registered on June 16, 2026 and sat the test on the 27th. Eleven days, about fifteen hours of study. This post is what I did, and more importantly the reframe that made it work.

If you'd rather have it as a talk, it's all here: **[Cómo alcanzar un nivel C2 en el examen TOEFL](/charla-toefl-c2.html)** (in Spanish). That's the presentation I gave for the JavaScript Ecuador community, with a present button and keyboard navigation. There's also a [PDF](/charla-toefl-c2.pdf).

## The framing mistake

I thought I was taking an English test. I wasn't.

The TOEFL measures how well you execute a format under time pressure. It's the difference between knowing how to program and solving a LeetCode problem in twenty minutes. The knowledge is there; what's missing is the format and the clock.

That has an uncomfortable implication for those of us who already work in English: our actual level doesn't automatically convert into a score. And a useful one: if the bottleneck is the format, the format can be studied in days rather than months.

Everything below follows from that.

## First things first: the exam changed in January 2026

This is the most important thing I can tell anyone sitting it soon, and almost nobody knows it.

On January 21, 2026, ETS rebuilt the test. Reading and Listening are now multistage adaptive, meaning how you do in the first stage sets the ceiling for the second. The test dropped from roughly three hours to about ninety minutes of working time. Scoring moved to 1 to 6 bands per section, with the familiar 0 to 120 reported alongside it during the transition. And task types appeared that didn't exist before: _Complete the Words_, _Listen and Repeat_, _Build a Sentence_, _Write an Email_.

A lot of the free material floating around is for the old format, and it still ranks first on Google. Videos from 2023 and 2024 with thousands of views. Check the date before you study with anything. Practicing the old exam is training for a different sport.

The source of truth is ETS's own documentation, not a blog. Not this one either.

## Rule one: read the spec before writing code

If I had to rank everything I did, this comes first, ahead of any practice.

Understanding how you're graded is worth more than raising your level of English. And it's exactly what nobody does: people start "practicing" without knowing what the exam rewards.

Three things surprised me when I read the criteria:

1. Each task rewards concrete elements. Structure, development of the idea, precision, time management. It doesn't reward sounding elegant or using difficult words.
2. Points are almost never lost to grammar. They're lost to omission. You didn't cover part of the task, didn't give the example, didn't close the idea.
3. The criteria are public, and reading them end to end takes twenty minutes.

Nobody ships a feature by guessing the requirements. But we sit exams guessing the rubric.

## The loop: AI as grader, not as author

This was 80% of my Writing and Speaking practice, and it's the same principle from when I [used AI to learn Django](/en/blog/aprender-con-ia): the tool is useful when it coaches, not when it solves.

Four steps:

1. **Write** on a timer, in the task's real time budget. The clock is part of what you're practicing.
2. **Grade**, with the official guide loaded into context, asking for a score per criterion.
3. **Diagnose**. This is the step almost everyone gets wrong.
4. **Repeat** the same task, not a new one, until that specific error stops showing up.

On step three: never ask it to "improve this." If you do, you get back a perfect text you didn't write, you say "nice," and you learned nothing. The right question is where exactly you lost points and why.

Roughly what I asked for:

```text
[attached: the official exam guide, as a PDF]

Based on this guide, generate practice
questions for [task type].

When I give you my answer:
1. Grade it against the guide's criteria.
2. Tell me where I lost points and why.
3. Give me the three highest-impact fixes.

Do not rewrite my answer.
```

The wording of the prompt matters less than it seems. What changes everything is uploading the official document: without it, the model grades against invented criteria, which sounds convincing and is useless.

One extra trick that helped me calibrate: ask it to also predict the score. Once its prediction and my own gut feeling started agreeing, I had internalized the criteria, and that's what I used on test day.

It's a TDD cycle. Red, fix, green. Except the feedback arrives in thirty seconds.

## Speaking: the variant that worked better

Recording myself, transcribing, and asking for a grade works. Seeing your own words written down removes the excuses: there are the filler words, the sentences you started and abandoned, the ones you never closed. Important: transcribe it exactly as you said it. If you clean it up while typing, you deleted the data.

But it's slow. What actually changed my practice was explaining the format once and then practicing by **speaking**, on a voice call, instead of writing.

At that point you're not composing. You're speaking under pressure, which is precisely what the exam measures, and the feedback arrives when you finish without transcribing anything by hand.

And one test-day detail almost nobody uses: in the repeat task, you can take notes. Paper is allowed throughout the whole exam, and in that task it looks like pure memory, so nobody reaches for it. Jotting down key words while you listen saves the second half of the long sentences.

## Templates aren't cheating, they're the expected structure

Whenever I say templates, someone assumes it's cheating.

Think about a work email. They all start the same way, they all end the same way, and the middle always has the same parts. Nobody claims writing emails is cheating. But nobody improvises the structure of an email either.

The exam has a task that is literally writing an email. A scenario, three things you have to cover, about seven minutes. Something like:

> You're working on a group project for a course. One of your teammates hasn't been participating and has missed several deliverables. Write them an email describing the project's current progress, explaining how their absence is affecting the group, and proposing how they can contribute.

My answer would look roughly like this. I've bolded what repeats in any email, which is to say what I already knew before walking into the exam:

> **Hi Alex,**
>
> **I'm writing about** our group project.
> **Right now** we've finished the research and the first draft, and we present next week.
>
> **The problem is that** your parts haven't come in, so the rest of us covered them and we fell behind.
>
> **Would you be able to** take the data section and send it by Friday? **If that doesn't work, tell me what does.**
>
> **Thanks, and let me know how you'd like to handle it.**
> **Best, Edisson**

Almost half the email is structure. I didn't think about that half on test day: I had it.

What's left in plain text is the only thing I had to produce, and it maps exactly to what the task asked me to cover: the progress, the impact, the ask.

That's the whole idea in one example. I didn't write better English than anyone else. I spent the clock on one problem instead of two.

The part that matters: don't memorize a template from a YouTube video. Build your own, with the official criteria in hand and with the corrections the loop gave you. A template you haven't practiced on a timer is one you won't remember.

## What I didn't spend time on

With the caveat that this is a single data point, mine, and I already worked in English every day. My bottleneck was the format, not the language. If yours is different, this list changes.

I didn't use vocabulary apps, didn't open a grammar book, didn't take any paid course, didn't study for months, and I threw out everything that predated the 2026 format.

Don't copy my list. Copy the method for finding your own bottleneck, which is taking one full timed practice test before studying anything. It stings and it works.

## The mistake that cost me 29 dollars

This one is my favorite, because the mistake had nothing to do with English.

When you register, you can pick four institutions to receive your score, for free. I didn't pick them. I registered thinking about the exam, not about what the exam was for.

I tested on June 27. By the time I needed to send the score to a university, it was too late: the free reports only apply if you choose beforehand. I paid 29 dollars for an additional report.

It's not money that ruins me. It's money that was free ten days earlier.

The lesson is worth more than the 29 dollars: I was solving "sit the exam" when the real problem was "get a score to a university." The exam was a step, not the goal. Optimize the wrong step and you pay the surcharge.

If you're sitting it, have your list of institutions ready at registration time. And run the equipment check two or three times, at different hours, before you pay: if it fails on test day there's no refund.

## Three things to take away

1. Don't study English. Study the format. Especially true if you already work in English every day.
2. Get fast feedback against the real criteria. Fast so you can iterate, against the criteria so it's an actual standard and not a friendly opinion.
3. Automate the structure, so the clock goes to content instead of deciding how to start.

118 out of 120 wasn't a level of English. It was treating the exam as an engineering problem.

## Resources

All free and current-format:

- ETS's own documentation: the current structure section by section, the specifications document with the criteria, and a free practice test. It's the first thing you should open, and the specifications PDF is the one you upload to the AI.
- [TST Prep](https://www.youtube.com/@TSTPrep) on YouTube and [tstprep.com](https://tstprep.com). Run by a former exam rater, so it explains the criteria and not just the answer. It was nearly all of my preparation. They have a paid course, but I didn't take it and can't speak to it.
- r/TOEFL, for reports from people who've already sat the new format.

One warning: pirated PDFs of the official book circulate on random sites. Beyond the legal question, many of those copies predate 2026, so you'd be practicing a different exam. The official documents you actually need are free.

The example task and answer in this post are my own writing. They are not official exam material.
