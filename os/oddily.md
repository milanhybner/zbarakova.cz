---
layout: page
nazev: Sportovní oddíly jednot župy Barákovy
---


<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <p><a href="https://drive.google.com/open?id=0B0w6gDorCVUkemdWSVU5bmhSbzQ">Přehledová tabulka ke stažení</a></p>
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th style="width: 30%">Sport</th>
                    <th style="width: 70%">Jednota</th>
                </tr>
            </thead>
            <tbody class="list">
                {%for oddil in site.data.oddily %}
                <tr>
                    <td class="sport">{{oddil.sport}}</td>
                    <td class="nazev">
                        <a href="{{oddil.url}}">{{oddil.jednota}}</a>
                    </td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
        <p>Chcete zaregistrovat sportovní oddíl? <a href="mailto:predseda@zbarakova.cz">Napište Petru Janichovi, předsedovi odboru sportu.</a></p>
    </div>
</div>
<script type="text/javascript">

var options = {
  valueNames: ['datum', 'nazev']
};
var entryList = new List('entry-list', options);

</script>