---
layout: post
title: Why UX Designers Should Embrace Technical Expertise to Enhance Open Source Contributions
date: 2024-12-31
tags: [ux design,cli]
excerpt: The benefits of technical expertise extend far beyond improving the user experience. It has fundamentally changed how I collaborate with developers, sysadmins, the open-source community, and other technical stakeholders. Conversations that once felt like trying to bridge two separate languages, have evolved into fluid dialogues grounded in a shared understanding of the tools, challenges, and opportunities.
---

# Why UX designers should embrace technical expertise to enhance open source contributions

The worlds of user experience (UX) design and open source technology are increasingly converging. At Red Hat, where open source fuels innovation, this synergy is reshaping how designers and developers collaborate to create impactful tools and workflows. For many UX designers, including myself, the idea of stepping into technical realms like command-line interfaces (CLIs), opening an issue on GitHub, or diving into codebases can feel intimidating and out of reach. But these technical spaces are where the most impactful opportunities lie. Opportunities to create new tools and workflows that empower users and bridge the gap between design and development.

When I started this journey, I felt unprepared and out of my depth. Yet, through building tools like an interactive mode for InstructLab's CLI, crafting comprehensive CLI guidelines, and experimenting with AI to develop scripts, I discovered how technical expertise can not only transforms the experiences of users, but it improves the relation and workflow with developers and admins.

## The case for technical expertise in UX design
- **Bridging the gap**: As UX designers, we’re tasked with connecting users' needs to the solutions developers and sysadmins create. Without understanding the language and tools of our technical collaborators, we risk slowing progress. I’ve felt the frustration of relying on "translators" to interpret my designs into technical terms. Gaining technical expertise removes those barriers and fosters more productive, direct communication.

- **Open source dynamics**: Open source thrives on collaboration. Too often, we ask others to adapt to their workflows to understand our ideas, but shouldn't it be the other way around? By learning to use platforms like GitHub to read and post issues, software such as Visual Code Studio to write scripts and markdown files, and adapting to workflow to technical contexts, we are able to build trust with our collaborators and contribute in meaningful and impactful ways.

## Learning by doing
When I joined the Red Hat on AWS (ROSA) team in December 2023, I was tasked with improving the CLI experience. My initial reaction? Nervous excitement. With very little experience using CLIs, apart from using ms-dos to debug my computer ages ago, the idea of navigating text based commands felt daunting—like stepping into a world where every action required translating a foreign language. But instead of shying away, I decided to embrace the challenge head on.

My first step was simple yet revealing: creating a cluster using the ROSA CLI. Each command I typed raised new questions, and I often found myself consulting documentation, asking colleagues for guidance, and experimenting with trial and error. This process was humbling, but it also opened my eyes to the intricacies of CLI's and its impact on users’ workflows.

By immersing myself in the user perspective, I uncovered pain points such as gaps in documentation, unclear error messages, and cumbersome workflows. I vividly recall how overwhelming the cluster creation process felt. This experience fueled my determination to make it better. These insights led me to develop comprehensive CLI guidelines centered on clarity, consistency, and usability, as well as a <a href="https://github.com/JustinXHale/bulkprompting" target="_blank">bulk prompting script</a> to streamline inefficient workflow.

This hands-on approach wasn’t just about seeing a product in action or learning new technical skills; it was about typing with a user's keyboard. By bridging the gap between usability and functionality, I found ways to make the CLI more approachable and efficient for everyone.

## Why technical expertise matters
Stepping into the technical realm transformed my skills and reshaped the impact I've been able to have on both the users I design for and the teams I collaborate with. It's allowed me to engage with the tools and workflows that matter most to our users, designing solutions that meet them where they are rather than expecting them to adapt to my perspective. For instance, my work within InstructLab has given me the opportunity to transform a complex CLI onboarding process into a streamlined, user friendly experience, particularly for novice users <a href="https://github.com/JustinXHale/instructlab-interactivemode" target="_blank">InstructLab Interactive Mode</a>
| <a href="https://github.com/instructlab/instructlab/issues/2814" target="_blank">GitHub Issue 2814</a>. This effort saves users time and also gives them confidence to navigate a tool that might have otherwise felt intimidating.

![Interactive Mode Welcome Screen](/justinxhale.github.io/_posts/Assets/Intro-screen-to-interactive-mode.png)
*The interactive mode in InstructLab guides users step-by-step through installation, ensuring all prerequisites and configurations are completed smoothly.*

The benefits of technical expertise extend far beyond improving the user experience. It has fundamentally changed how I collaborate with developers, sysadmins, the open-source community, and other technical stakeholders. Conversations that once felt like trying to bridge two separate languages, have evolved into fluid dialogues grounded in a shared understanding of the tools, challenges, and opportunities. This mutual knowledge enables us to address technical pain points more effectively from pre-requisite checks to setup to daily usage, flows resulting in better products and smoother processes. By integrating technical insights into my design practice, I’ve not only elevated the user experience but also strengthened the collaboration that drives our work forward faster and more efficiently.

## Actionable steps for UX designers to build technical expertise
It might seem like a daunting task to develop technical expertise as a UX designer, but really it isn't. What this journey taught me was that small, consistent steps create significant progress. A few practical ways to get started include the following:
- **Start Small**: Take the first step towards enhancing your technical skills by exploring the <a href="https://www.uxd-hub.com/entries/design/cli-guidelines" target="_blank">CLI Guidelines on the UXD Hub</a>. Try simple tasks like creating a free GitHub account and navigating repositories. Experimenting with basic CLI commands to build your confidence
- **Leverage Collaboration**: If you already work as a designer in a technical field, don't hesitate to reach out to your technical colleagues, they can be invaluable resources. Some of my biggest breakthroughs came from developers teaching me their workflow.
- **Utilize Resources**: Take advantage of online tutorials, documentation, and any learning tools you can access, like LinkedIn Learning. Platforms like GitHub are great starting points, and AI tools can also provide support for tackling technical challenges.
- **Embrace the Open Source Mindset**: Open source is all about collaboration and continuous improvement. Contributing to projects like Konveyor/MTA, PatternFly, and InstructLab allowed me to learn hands-on while giving back to the community, a win-win for growth and collaboration.

![GIF of Bulk Prompting Script](/portfolio/bulk-prompting-script/assets/july31-readme-gif.gif)
*A bulk prompting script automates the process of creating a cluster with predefined settings, minimizing errors and improving efficiency for users navigating CLI workflows.*

## Closing
As I look on my journey at Red Hat, I never would have imagined becoming a subject matter expert in command line interfaces or writing custom scripts to highlight user pain points. As I start to think about the rest of 2025, I'm reflecting on how stepping outside my comfort zone has shaped not only my career but also the experiences of the users I design for. 

Embracing technical expertise is about gaining skills, it's about fostering empathy,building connection, and driving meaningful change. To every UX designer reading this: the technical world may seem intimidating, but I promise, it’s worth the leap, your users—and your future self—will thank you. Start small, stay curious, and remember when you're feeling uncomfortable... "no one innovates alone."