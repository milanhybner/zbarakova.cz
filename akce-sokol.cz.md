---
layout: default
---

<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Akce ze sokol.cz</h3>
        </div>
    </div>
</div>
<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <!--<input class="search form-control" placeholder="Filtrovat" type="text">-->
        <table>
            <thead>
                <tr>
                    <th style="width: 20%">Datum</th>
                    <th style="width: 60%">Název</th>
                    <th>Druh</th>
                </tr>
            </thead>
        <tbody class="list" sheetsu="https://sheetsu.com/apis/v1.0/18d576845111">
                            <tr>
                    <td class="datum">{%raw%}{{startDate}}{%endraw%}</td>
                    <td class="nazev">
                        <a href="{%raw%}{{odkaz}}{%endraw%}">{%raw%}{{nadpis}}{%endraw%}</a>
                    </td>
                    <td class="druh">ze sokol.cz</td>
                </tr>
            </tbody>
        </table>
        <p>Tento výpis je v experimentální fázi. Pokud žádné akce nevidíte, experiment se nezdařil.</p>
    </div>
</div>
<script src="//load.sheetsu.com?i=d0c5"></script>
<script type="text/javascript">
var options = {
  valueNames: ['datum', 'nazev', 'druh']
};
var entryList = new List('entry-list', options);
</script>