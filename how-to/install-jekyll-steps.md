---
layout: default
title: Installing Jekyll for GitHub Pages
parent: "How To"
nav_order: 2
---

# Installing Jekyll for GitHub Pages

clone your repo
```
git clone https://github.com/JustinXHale/justinxhale.github.io.git
cd justinxhale.github.io
tocuh index.md
touch _config.yml
```

top of _config.yaml add
```
---
layout: default
title: "Justin X. Hale's Portfolio"
theme: jekyll-theme-leap-day
---
```

push & commit to github

create _posts
create assets
create assets/css
    touch assets/css/styles.css

test locally steps
creat Gemfile
gem install bundler
add to gemfile
```
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```
```
bundle install
```



- Before you can use Jekyll to create a GitHub Pages site, you must install Jekyll and Git. For more information, see Installation in the Jekyll documentation and Set up Git.
```
git clone https://github.com/git/git




- Need to install Ruby to work with Jekyll
- https://www.ruby-lang.org/en/documentation/installation/



```
ruby -v
```

