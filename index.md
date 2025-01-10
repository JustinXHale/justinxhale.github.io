---
layout: default
title: "Justin X. Hale"
nav_order: 1
has_children: true
back_to_top: true
back_to_top_text: "Back to top"
---
<a id="back-to-top"></a>

# 👋 Welcome to Justin X. Hale's UX Portfolio

I'm a **UX Designer** at Red Hat specializing in **Command-Line Interfaces (CLI)** and developer tools. Passionate about bridging the gap between design and 
technology, I create intuitive solutions that empower technical teams and enhance workflows in open-source environments.  

[View My Portfolio](./portfolio.md) | [Read My Blog](./blog.md) | [Get in Touch](#contact)  

> **"I design experiences that keep developers in their flow."** 

<h2>My GitHub Contributions</h2>
<img src="https://ghchart.rshah.org/JustinXHale" alt="GitHub Contributions Chart">


---

## Portfolio Highlights
### [InstructLab Interactive Mode](https://github.com/JustinXHale/instructlab-interactivemode)
- Challenge: Enhance the CLI experience for developers interacting with InstructLab.
- Solution: Created a structured, user-friendly interactive mode, improving onboarding and tool adoption.
- Tech: Python, Shell scripting, Figma

### [BulkPrompting: Streamlining CLI Bulk Input](https://github.com/JustinXHale/bulkprompting)  
- Challenge: Repetitive CLI workflows caused inefficiency.
- Solution: Designed and implemented a Python script for automating bulk input, improving usability.
- Tech: Python, Shell scripting.

### [CLI Guidelines: Designing for the Command Line](https://www.uxd-hub.com/entries/design/cli-guidelines)  
- Purpose: Establish clear, actionable guidelines for designing user-friendly and consistent CLI interfaces.
- Impact: Supports developers and UX teams in delivering seamless command-line experiences.

[View Full Portfolio →](./portfolio.md)

---

## Skills
**Professional**: Strategic Design Thinking | Open Source UX | Agile Collaboration | Mentorship
**Technical**: GitHub | CLI Tools | Figma | PatternFly | Markdown | Jira

---

## Contact
Feel free to reach out—I’d love to connect!  
[Email Me](mailto:justinxhale@gmail.com) | [LinkedIn](https://www.linkedin.com/in/justinxhale) | [GitHub](https://github.com/justinxhale)

---

<a href="#top" id="back-to-top">^ Back to Top</a>

<h2>My GitHub Issues and Pull Requests</h2>
<ul id="gh-issues"></ul>

<script>
  const username = "JustinXHale"; // Your GitHub username

  fetch(`https://api.github.com/search/issues?q=author:${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const issueList = document.getElementById("gh-issues");
      data.items.forEach((issue) => {
        const repoName = issue.repository_url.split('/').slice(-2).join('/');
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <a href="${issue.html_url}" target="_blank">${issue.title}</a>
          <br><small>Repository: ${repoName}</small>
        `;
        issueList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching issues:", error));
</script>

<style>
  #gh-issues li {
    margin-bottom: 10px;
  }

  #gh-issues a {
    font-weight: bold;
    color: #0073e6;
    text-decoration: none;
  }

  #gh-issues a:hover {
    text-decoration: underline;
  }
</style>
