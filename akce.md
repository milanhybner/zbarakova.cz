---
layout: default
---

<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Kalendář akcí</h3>
        </div>
    </div>
</div>
<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <p><a href="https://goo.gl/forms/q9Loj8bRYuJcPclD3">Přidejte svoji akci</a></p>
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th style="width: 20%">Datum</th>
                    <th style="width: 60%">Název</th>
                    <th>Druh</th>
                </tr>
            </thead>
            <tbody class="list">
                {%for akce in site.data.akce %}
                <tr>
                    <td class="datum">{{akce.datum}}</td>
                    <td class="nazev">
                        <a href="{{akce.url}}">{{akce.nazev}}</a>
                    </td>
                    <td class="druh">{{akce.druh}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
        <p><a href="akce-archiv.html">Minulé akce naleznete v archivu.</a></p>
    </div>
</div>
<script type="text/javascript">

var options = {
  valueNames: ['datum', 'nazev', 'druh']
};
var entryList = new List('entry-list', options);

</script>