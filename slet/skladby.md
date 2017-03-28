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
                    <td class="celku">{{polozka.celku}}</td>
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

|       Skladba       |    Termín    |        Místo        | Župní vedoucí / zástupce vedoucího |
|---------------------|--------------|---------------------|------------------------------------|
| Méďové              | 18. března   | Tyršův dům          | Horáčková Jungmannová / Bartíková  |
|                     | 7. října     | Praha Karlín        |                                    |
|                     |              |                     |                                    |
| Noty                | 19. března   | Tyršův dům          | Škodová / Chalupecká               |
|                     | 8. října     | Praha Karlín        |                                    |
|                     |              |                     |                                    |
| V peřině            | 20. května   | Tyršův dům          | Bartíková                          |
|                     | 14. října    | Praha Karlín        |                                    |
|                     |              |                     |                                    |
| Děti, to je věc     | 8. dubna     | Tyršův dům          | Bělohlávková / Černá               |
|                     | 21. října    | Tyršův dům          |                                    |
|                     |              |                     |                                    |
| Cirkus              | 9. dubna     | Praha               | Diana Minaříková / Jan Blažek      |
|                     | 7. října     | Tyršův dům          |                                    |
|                     |              |                     |                                    |
| Siluety             | 18. února    | Tyršův dům          | Bartíková / Kurajdová              |
|                     | 4. listopadu | Praha Karlín        |                                    |
|                     |              |                     |                                    |
| Ženobraní           | 25. února    | Tyršův dům          | Voráčková / Horčičková             |
|                     | 21. října    | Praha Karlín        |                                    |
|                     |              |                     |                                    |
| Spolu               | 11. března   | Tyršův dům          | Valášková / Bašusová               |
|                     | 14. října    | Brno                |                                    |
|                     |              |                     |                                    |
| Borci               | 22. dubna    | Kostelec nad Orlicí | Hybner / Braný                     |
|                     | 28. října    | Tyršův dům          |                                    |
|                     |              |                     |                                    |
| Princezna republika | 13. května   | Tyršův dům          | Pangrácová                         |
|                     | 4. listopadu | Tyrsův dům          |                                    |


# Podrobnosti k jednotlivým skladbám

* [Méďové (rodiče a děti)](1-medove.html)
* [Noty (předškolní děti)](2-noty.html)
* [V peřině (mladší žákyně)](3-v-perine.html)
* [Děti, to je věc! (mladší žactvo)](4-deti-to-je-vec.html)
* [Cirkus (starší žactvo)](5-cirkus.html)
* [Siluety (dorostenky, ženy)](6-siluety.html)
* [Cesta (ženy)](7-cesta.html)
* [Ženobraní (ženy)](8-zenobrani.html)
* [Spolu (ženy, muži)](9-spolu.html)
* [Borci (dorostenci, muži)](10-borci.html)
* [Princezna republika (senioři, seniorky)](11-princezna-republika.html)

# Župní vedoucí skladeb a jejich zástupci

|       skladba       |         ž. vedoucí        |       jednota       |     zást. ž .v     |       jednota       |
|---------------------|---------------------------|---------------------|--------------------|---------------------|
| Noty                | Pavlína Škodová           | Říčany a Radošovice | Jana Chalupecká    | Říčany a Radošovice |
| Méďové              | Eva Horáčková Jungmannová | Říčany a Radošovice | Tereza Bartíková   | Pyšely              |
| Děti, to je věc!    | Kateřina Bělohlávková     | Říčany a Radošovice | Lenka Černá        | Říčany a Radošovice |
| Spolu               | Milena Valášková          | Mochov              | Iva Bašusová       | Český Brod          |
| Ženobraní           | Jarmila Voráčková         | Říčany a Radošovice | Martina Horčičková | Lysá                |
| Princezna Republika | Miloslava Pangrácová      | Říčany a Radošovice |                    |                     |
| V peřině            | Bartíková                 | Pyšely              |                    |                     |
| Cirkus              | Diana Minaříková          | Český Brod          | Jan Blažek         | Český Brod          |
| Borci               | Milan Hybner              | Šestajovice         | Jiří Braný         |                     |

# Předpokládaný počet cvičenců ve skladbách v župě

|       Skladba       |   počet cvičenců  |
|---------------------|-------------------|
| Noty                | 9 cvič.           |
| Méďové              | 24 párů (6 celků) |
| Děti, to je věc!    | 15 cvič.          |
| Siluety             | 56 cvič.          |
| Ženobraní           | 32 cvič.          |
| Spolu               |                   |
| Borci               | 9 cvič.           |
| Princezna Republika | 9 cvič.           |
