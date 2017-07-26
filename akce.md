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

<div class="container mtb">
   <div class="row">
      <div clas="col-md-12">
        <a id="akce"></a>
        <h4>Akce župy</h4>
        <div class="hline"></div>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrGRagIVYCGo5wou?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
     </div>
   </div>
   <p></p>
   <div class="row">
      <div clas="col-md-12">
        <a id="akce"></a>
        <h4>Všechny akce</h4>
        <div class="hline"></div>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shr6ENOyJcDqhizOF?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
     </div>
   </div>
</div>

<!--
<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <p><a href="https://goo.gl/forms/q9Loj8bRYuJcPclD3">Přidejte svoji akci</a> | <a href="akce-archiv.html">Minulé akce naleznete v archivu</a></p>
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
                     {% if akce.url %}
                        <a href="{{akce.url}}">{{akce.nazev}}</a>
                    {% else %}
                        {{akce.nazev}}
                    {% endif %}
                    </td>
                    <td class="druh">{{akce.druh}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
        <p></p>
<script type="text/javascript">

var options = {
  valueNames: ['datum', 'nazev', 'druh']
};
var entryList = new List('entry-list', options);

</script>
-->
