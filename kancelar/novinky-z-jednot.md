---
layout: page
nazev: Novinky z jednot
---

{% for post in site.data.rss reversed %}

_{{post.datum}} {{post.jednota}}_  
[**{{post.nazev}}**]({{post.url}})  
{{post.popis}}

{% endfor %}
