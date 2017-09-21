---
layout: page
nazev: Skladby XVI. všesokolského sletu
---

* [Přehled skladeb a ústředních srazů v .xls](https://drive.google.com/open?id=0B0w6gDorCVUkTmtwcWZTS3RCbU1GQzRTaURLUjBZQWFSd1lB)

# Nácvik skladeb v jednotách


<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th>Skladba</th>
                    <th>Jednota</th>
                    <th>Počet cvičenců</th>
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

Podrobnosti k jednotlivým skladbám naleznete po kliknutí na název skladby, které vás odkáže na oficiální stránku skladby na slet.sokol.eu.

|                                  Skladba                                   |    Termín    |    Místo     | Župní vedoucí / zástupce vedoucího |
|----------------------------------------------------------------------------|--------------|--------------|------------------------------------|
| [Méďové](http://slet.sokol.eu/sletove-skladby/#eluid9d3b72c4)              | 7. října     | Praha Karlín | Horáčková Jungmannová / Bartíková  |
| [Noty](http://slet.sokol.eu/sletove-skladby/#eluidf0df887f)                | 8. října     | Praha Karlín | Škodová / Chalupecká               |
| [V peřině](http://slet.sokol.eu/sletove-skladby/#eluid240bd23e)            | 14. října    | Praha Karlín | Bartíková                          |
| [Děti, to je věc](http://slet.sokol.eu/sletove-skladby/#eluidd6b5eaa3)     | 21. října    | Tyršův dům   | Bělohlávková / Černá               |
| [Cirkus](http://slet.sokol.eu/sletove-skladby/#eluid64610da3)              | 7. října     | Tyršův dům   | Diana Minaříková / Jan Blažek      |
| [Siluety](http://slet.sokol.eu/sletove-skladby/#eluid8c73983a)             | 4. listopadu | Praha Karlín | Bartíková / Kurajdová              |
| [Ženobraní](http://slet.sokol.eu/sletove-skladby/#eluid5f74b478)           | 21. října    | Praha Karlín | Voráčková / Horčičková             |
| [Spolu](http://slet.sokol.eu/sletove-skladby/#eluid2ceac2a6)                                    | 14. října    | Brno         | Valášková / Bašusová               |
| [Borci](http://slet.sokol.eu/sletove-skladby/#eluid678072dd)               | 28. října    | Tyršův dům   | Hybner / Braný                     |
| [Princezna republika](http://slet.sokol.eu/sletove-skladby/#eluidc5393d27) | 4. listopadu | Tyrsův dům   | Pangrácová                         |


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
| Borci               | Milan Hybner              | Šestajovice         |                    |                     |

# Předpokládaný počet cvičenců ve skladbách v župě

|       Skladba       | počet cvičenců |
|---------------------|----------------|
| Noty                |             34 |
| Méďové              |             23 |
| Děti, to je věc!    |             16 |
| V peřině            |             10 |
| Cirkus              |              9 |
| Siluety             |             24 |
| Ženobraní           |             45 |
| Spolu               |             14 |
| Borci               |              5 |
| Princezna Republika |             54 |
| **Celkem**          |            234 |
