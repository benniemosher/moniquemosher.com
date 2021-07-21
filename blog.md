---
layout: default
---

<div id="blog" class="full blog">
  <section>
    <h3>Blog</h3>
    {%- if site.posts.size > 0 %}
      <div class="posts">
        {%- for post in site.posts limit:10 %}
          <article class="post">
            <img src="{{ post.photo }}" alt="" />
            <div>
              <h2>
                <a href="{{ post.url | relative_url }}">
                  {{post.title | escape }}
                </a>
              </h2>
              {{ post.excerpt }}
              <a href="{{ post.url | relative_url }}" class="button">
                <span>&#8594;</span>
              </a>
            </div>
          </article>
        {%- endfor %}
      </div>
    {%- endif %}
  </section>
</div>