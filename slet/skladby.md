---
layout: page
nazev: Skladby XVI. všesokolského sletu
---

# Nácvik skladeb v jednotách

<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th>Skladba</th>
                    <th>Jednota</th>
                    <th>Poč. celků</th>
                    <th>Garant</th>
                </tr>
            </thead>
            <tbody class="list">
                {%for polozka in site.data.skladby %}
                <tr>
                    <td class="skladba">{{polozka.skladba}}</td>
                    <td class="jednota">{{polozka.jednota}}</td>
                    <td class="celku">{{polozka.celku}}<td>
                    <td class="garant">{{polozka.garant}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
<script type="text/javascript">

var options = {
  valueNames: ['skladba', 'jednota', 'celku', 'garant']
};
var entryList = new List('entry-list', options);

</script>


# Termíny nácvičných srazů 2017

|       Skladba       |    Termín    |        Místo        |     Župu zastupuje    |
|---------------------|--------------|---------------------|-----------------------|
| Méďové              | 18. března   | Tyršův dům          | Horáčková Jungmannová |
|                     | 7. října     | Praha Karlín        |                       |
|                     |              |                     |                       |
| Noty                | 19. března   | Tyršův dům          |                       |
|                     | 8. října     | Praha Karlín        |                       |
|                     |              |                     |                       |
| V peřině            | 20. května   | Tyršův dům          |                       |
|                     | 14. října    | Praha Karlín        |                       |
|                     |              |                     |                       |
| Děti, to je věc     | 8. dubna     | Tyršův dům          |                       |
|                     | 21. října    | Tyršův dům          |                       |
|                     |              |                     |                       |
| Cirkus              | 9. dubna     | Praha               |                       |
|                     | 7. října     | Tyršův dům          |                       |
|                     |              |                     |                       |
| Siluety             | 18. února    | Tyršův dům          | Kurajdová             |
|                     | 4. listopadu | Praha Karlín        |                       |
|                     |              |                     |                       |
| Cesta               | 4. března    | Tyršův dům          |                       |
|                     | 14. října    |                     |                       |
|                     |              |                     |                       |
| Ženobraní           | 25. února    | Tyršův dům          | Voráčková             |
|                     | 21. října    | Praha Karlín        | Voráčková             |
|                     |              |                     |                       |
| Jsme/sme spolu      | 11. března   | Tyršův dům          |                       |
|                     | 14. října    | Brno                |                       |
|                     |              |                     |                       |
| Borci               | 22. dubna    | Kostelec nad Orlicí |                       |
|                     | 28. října    | Tyršův dům          |                       |
|                     |              |                     |                       |
| Princezna republika | 13. května   | Tyršův dům          | Pangrácová            |
|                     | 4. listopadu | Tyrsův dům          | Pangrácová            |

# Podrobnosti k jednotlivým skladbám

* [Méďové (rodiče a děti)](1-medove.html)
* [Noty (předškolní děti)](2-noty.html)
* [V peřině (mladší žákyně)](3-v-perine.html)
* [Děti, to je věc! (mladší žactvo)](4-deti-to-je-vec.html)
* [Cirkus (starší žactvo)](5-cirkus.html)
* [Siluety (dorostenky, ženy)](6-siluety.html)
* [Cesta (ženy)](7-cesta.html)
* [Ženobraní (ženy)](8-zenobrani.html)
* [Jsme/sme spolu (ženy, muži)](9-spolu.html)
* [Borci (dorostenci, muži)](10-borci.html)
* [Princezna republika (senioři, seniorky)](11-princezna-republika.html)
