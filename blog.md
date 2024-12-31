---
layout: default
title: "Life & Work (Blog)"
nav_order: 3
has_children: true
---
Hello, I'm Justin X. Hale, and welcome to Life & Work, where I share stories, ideas, and reflections from all facets of my journey. From professional insights as a UX designer to experiences on the rugby pitch as a referee, or personal thoughts on navigating life, family, and growth—you'll find it here.

This blog isn't locked to one topic because, for the most part, neither is life. A collection of things learned, conquered, and/or moments continuing to fuel my inspiration—appreciated instances in my career and beyond, from deep dives into design and technology to rugby and leadership—the reflective commonplace, Life & Work will be about embracing it all.

Whether you are here for some professional tips, personal stories, or a mix of both, I hope something will resonate, inspire, or maybe even plant a new idea in you. Thanks for stopping by—I'm glad you're here!

---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
