---
layout: default
title: Create GitHub Portfolio Website
parent: "How To"
nav_order: 2
---

# Create your own GitHub Portfolio Website from Scratch
This guide will walk you through creating a personal portfolio website hosted on GitHub Pages. We’ll do everything through the Terminal, assuming you have nothing but a Mac with its default Terminal app installed. 

Let’s get started!

---

# Install Prerequisites
Before you can create your GitHub website, you need to install some tools.

### Install Xcode Command Line Tools
Xcode Command Line Tools provides basic development utilities like git and make.
```
xcode-select --install
```
Verify install:
```
git --version
```

### Install Homebrew
Homebrew is a package manager for macOS, making it easy to install tools.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
verify installation
```
brew --version
```

### Install Ruby
GitHub Pages uses Jekyll, which requires Ruby.
Install Ruby using Homebrew:
```
brew install ruby
```
verify rugby
```
ruby -v
```

### Install Bundler
Bundler is a Ruby dependency manager, required for Jekyll themes.
```
gem install bundler
```

### Install GitHub CLI

---

# Creating and Configuring GitHub

### GitHub Account Setup
1. Visit GitHub and create a free account if you don’t already have one.
2. Create New Repository using format <your-username>.github.io (e.g, justinxhale.github.io)
3. Set to Public
4. Create Create Repository

### Setup GitHub Pages
- Navigate to Your Repositories
- Select your .io repository
- Under the Code and automation section select Pages
- Use check these settings
    - Source: Deploy from a branch
    - Branch: Main, Root 
        - if its already on main, change it to none > save, then change back to main, Save

### Clone Your Repository Locally
In the Terminal, navigate to the directory you will be using and clone the repository to your local machine:
```
git clone https://github.com/<your-username>/<your-username>.github.io
cd <your-username>.github.io
```

### Configuring Gemfile
The Gemfile specifies dependencies for your site.
```
touch Gemfile
```

Open the 'Gemfile' through your finder or prompt
```
code gemfile
```

add these lines to the 'Gemfile' and save
```
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

Install dependencies
```
bundle install
```

# Create a Jekyll Configuration File
Create a Jekyll configuration file
```
touch _config.yml
```
Add the following content to the '_config.yml'
```
title: "My UX Portfolio"
description: "A showcase of my UX work and projects"
theme: jekyll-theme-leap-day
```

# Add Homepage
Create an 'index.md' for your homepage
```
touch index.md
```
Add this content
```
---
layout: default
title: "Welcome to My UX Portfolio"
---

# Welcome to My UX Portfolio

Hi, I’m [Your Name], a UX Designer passionate about creating intuitive and engaging experiences.

- Explore my [Case Studies](#)  
- Read my [Blog Posts](#)
```

# Test your site locally
Run this command to serve your site locally:
```
bundle exec jekyll serve
```
Open a browser and navigate to: http://localhost:4000

# Push Your Site to GitHub via VSCode
- Click Source Control in the left navigation bar.
- Click the + icon next to Changes to stage all files.
- Type a commit message (e.g., Initial commit of portfolio site).
- Click the ✓ Commit button.
- Click Sync Changes to push your changes to GitHub.

# Viewing progress on Github
- Navigate to your repository on GitHub.
- Go to Actions to ensure the workflow is processing.
- Once completed:
    - Under Deployments (on the right menu), click the deployment link.
    - Your live site will be available at https://<your-username>.github.io.