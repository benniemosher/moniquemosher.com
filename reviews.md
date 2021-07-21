---
layout: default
---

<div id="reviews" class="full reviews">
  <div class="bg" style="background-image: url('{{ site.data.home.reviews[0].photo }}');"></div>
  {%- if site.reviews.size > 0 %}
    {%- for review in site.reviews limit:10 %}
      <article class="review">
        <h3>{{ site.data.home.reviews[0].title }}</h3>
        <h2>"{{ review.excerpt }}"</h2>
        <q>
          {{ review.quote }}
          {%- if review.cite %}
            <cite>&ndash; {{ review.cite }}</cite>
          {%- endif %}
        </q>
      </article>
    {%- endfor %}
  {%- endif %}
</div>
