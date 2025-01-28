---
layout: default
title: "Life & Work (Blog)"
nav_order: 3
has_children: true
published: false
---
Welcome to Life & Work, where I share stories from my journey as a UX designer, rugby referee, and lifelong learner. From professional insights to personal reflections, this blog explores the lessons, ideas, and moments that inspire growth. I hope you find something here that resonates or sparks new ideas—thanks for visiting!

---
## External Mentions/Blog Posts

- **[Why UX designers should develop technical expertise](https://developers.redhat.com/articles/2025/01/23/why-ux-designers-should-develop-technical-expertise)**  
  Published on *Red Hat Developer Blog - Jan 23, 2025*.  
  Bridging the gap between design and development

- **[UX Alumni Share Job Hunting Advice](https://admc.austincc.edu/viscom/2023/09/19/ux-alumni-share-job-hunting-advice/)**  
  Published on *Austin Community College Visual Communication Blog - September 19, 2023*.  
  In this article, I share job-hunting advice and insights from my experience transitioning into a UX career.

## Personal Blog
<ul>
  {% for post in site.posts %}
    <li>
    <small>{{ post.date | date: "%B %d, %Y" }}</small>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
