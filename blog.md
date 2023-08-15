---
layout: default
title: Blog
---

{% for post in site.posts %}
  <div>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {{ post.date | date: "%b %d, %Y" }}
    {{ post.excerpt }}
  </div>
{% endfor %}
