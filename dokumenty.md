---
layout: default
---

<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Dokumenty</h3>
        </div>
    </div>
</div>
<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th style="width:20%;">Název</th>
                    <th>Popis</th>
                </tr>
            </thead>
            <tbody class="list">
                {%for dokument in site.data.dokumenty %}
                <tr>
                    <td class="nazev">
                        {% if dokument.url == "" %}
                        {{dokument.nazev}}
                        {% else %}
                        <a href="{{dokument.url}}" target="_blank">{{dokument.nazev}}</a>
                        {% endif %}
                    </td>
                    <td class="popis">{{dokument.popis}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
<script type="text/javascript">

var options = {
  valueNames: ['nazev', 'popis']
};
var entryList = new List('entry-list', options);

</script>