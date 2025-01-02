---
layout: default
title: "Life & Work (Blog)"
nav_order: 3
has_children: true
---
Welcome to Life & Work, where I share stories from my journey as a UX designer, rugby referee, and lifelong learner. From professional insights to personal reflections, this blog explores the lessons, ideas, and moments that inspire growth. I hope you find something here that resonates or sparks new ideas—thanks for visiting!

---

<ul>
  {% for post in site.posts %}
    <li>
    <small>{{ post.date | date: "%B %d, %Y" }}</small>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
