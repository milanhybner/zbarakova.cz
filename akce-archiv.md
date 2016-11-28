---
layout: default
---

<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Archiv akcí</h3>
        </div>
    </div>
</div>
<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
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
                {%for akce in site.data.akce-archiv reversed %}
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
    </div>
</div>
<script type="text/javascript">

var options = {
  valueNames: ['datum', 'nazev', 'druh']
};
var entryList = new List('entry-list', options);

</script>