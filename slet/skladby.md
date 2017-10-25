---
layout: page
nazev: Skladby XVI. všesokolského sletu
---


# Nácvik skladeb v jednotách

|                     | Méďové | Noty | Děti, to je věc! | V peřině | Cirkus | Siluety | Ženobraní | Borci | Princezna Republika | Spolu | Vivat Vivaldi |
|---------------------|--------|------|------------------|----------|--------|---------|-----------|-------|---------------------|-------|---------------|
| Český Brod          |      0 |    8 |                0 |        0 |     19 |       0 |         0 |     1 |                   9 |     5 |             0 |
| Chocerady           |      0 |    0 |                0 |        0 |      0 |       0 |        16 |     0 |                   0 |     0 |             0 |
| Kralupy nad Vltavou |      0 |    0 |                0 |       20 |      0 |      16 |         0 |     0 |                   0 |     0 |             0 |
| Lysá nad Labem      |      8 |    0 |                0 |        0 |      0 |       0 |         9 |     0 |                   0 |     0 |             0 |
| Mochov              |      0 |    0 |                0 |        0 |      0 |       0 |         7 |     0 |                   0 |    13 |             7 |
| Nehvizdy            |      0 |   25 |                0 |        0 |      0 |       0 |        11 |     0 |                   0 |     0 |             0 |
| Přívory             |      0 |    0 |                0 |        0 |      0 |       0 |         0 |     0 |                   9 |     0 |             0 |
| Pyšely              |     18 |    0 |                0 |       24 |      0 |      32 |        16 |     4 |                   0 |     0 |             0 |
| Říčany a Radošovice |     16 |    9 |               16 |        0 |      0 |      16 |        16 |     2 |                   9 |     0 |             0 |
| Šestajovice         |      0 |    0 |                0 |        0 |      0 |      13 |         0 |     4 |                   0 |     0 |             0 |
| Strančice           |      8 |    0 |                0 |        0 |      0 |       0 |         0 |     0 |                   0 |     0 |             0 |
| ASPV TJ Káraný      |     22 |    0 |                0 |        0 |      0 |       0 |         0 |     0 |                   0 |     0 |             0 |

Pro aktualizaci počtů kontaktujte [náčelníka Milana Hybnera](mailto:nacelnik@zbarakova.cz)

# Župní garanti sletových skladeb

* Po kliknutí na název skladby se zobrazí podrobnosti k jednotlivým skladbám na oficiální stránce skladby na slet.sokol.eu.
* Po kliknutí na garanta skladby se nabídne otevření e-mailového programu s předvyplněnou e-mailovou adresou garanta.
* Garanti uvedení tučně jsou župní vedoucí dané skladby
* Skladby [Siluety](https://www.facebook.com/siluety2018/) a [Vivat Vivaldi](https://www.facebook.com/vivatvivaldi/) jsou také na facebooku

<div id="entry-list" class="container mt">
    <div class="row" style="margin-bottom:10px;">
        <input class="search form-control" placeholder="Filtrovat" type="text">
        <table>
            <thead>
                <tr>
                    <th>Skladba</th>
                    <th>Jednota</th>
                    <!--<th>Počet cvičenců</th>-->
                    <th>Garant</th>
                </tr>
            </thead>
            <tbody class="list">
                {%for polozka in site.data.skladby %}
                <tr>
                    <td class="skladba"><a href="http://slet.sokol.eu/sletove-skladby/#{{polozka.url}}">{{polozka.skladba}}</a></td>
                    <td class="jednota">{{polozka.jednota}}</td>
                    <!--<td class="celku">{{polozka.celku}}</td>-->
                    <td class="garant"><a href="mailto:{{polozka.email}}">{{polozka.garant}}</a></td>
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


|       Skladba       |    Termín    |    Místo     | Župní vedoucí / zástupce vedoucího |
|---------------------|--------------|--------------|------------------------------------|
| Děti, to je věc     | 21. října    | Tyršův dům   | Bělohlávková / Černá               |
| Cirkus              | 7. října     | Tyršův dům   | Diana Minaříková / Jan Blažek      |
| Siluety             | 4. listopadu | Praha Karlín | Bartíková / Kurajdová              |
| Ženobraní           | 21. října    | Praha Karlín | Voráčková / Horčičková             |
| Spolu               | 14. října    | Brno         | Valášková / Bašusová               |
| Borci               | 28. října    | Tyršův dům   | Hybner / Braný                     |
| Princezna republika | 4. listopadu | Tyrsův dům   | Pangrácová                         |

<!--
| Méďové              | 7. října     | Praha Karlín | Horáčková Jungmannová / Bartíková  |
| Noty                | 8. října     | Praha Karlín | Škodová / Chalupecká               |
| V peřině            | 14. října    | Praha Karlín | Bartíková                          |
-->

* [Přehled skladeb a ústředních srazů v .xls](https://drive.google.com/open?id=0B0w6gDorCVUkTmtwcWZTS3RCbU1GQzRTaURLUjBZQWFSd1lB)


# Župní vedoucí skladeb a jejich zástupci

|       skladba       |         ž. vedoucí        |       jednota       |     zást. ž .v     |       jednota       |
|---------------------|---------------------------|---------------------|--------------------|---------------------|
| Noty                | Pavlína Škodová           | Říčany a Radošovice | Jana Chalupecká    | Říčany a Radošovice |
| Méďové              | Eva Horáčková Jungmannová | Říčany a Radošovice | Tereza Bartíková   | Pyšely              |
| Děti, to je věc!    | Kateřina Bělohlávková     | Říčany a Radošovice | Lenka Černá        | Říčany a Radošovice |
| Spolu               | Milena Valášková          | Mochov              | Iva Bašusová       | Český Brod          |
| Ženobraní           | Jarmila Voráčková         | Říčany a Radošovice | Martina Horčičková | Lysá                |
| Princezna Republika | Miloslava Pangrácová      | Říčany a Radošovice | Jana Scharffová    | Říčany a Radošovice |
| V peřině            | Bartíková                 | Pyšely              |                    |                     |
| Cirkus              | Diana Minaříková          | Český Brod          | Jan Blažek         | Český Brod          |
| Siluety             | Tereza Bartíková          | Pyšely              | Ivana Kurajdová    | Říčany a Radošovice |
| Borci               | Milan Hybner              | Šestajovice         |                    |                     |

<!--

# Informace ke skladbám

<a id="borci"></a>

## Borci – úbory

**Polokošile**

|     | obvod hrudi | obvod pasu | délka trika |
|-----|-------------|------------|-------------|
| S   |         100 |         92 |          70 |
| M   |         105 |         95 |          73 |
| L   |         110 |        100 |          76 |
| XL  |         116 |        107 |          79 |
| XXL |         120 |        110 |          81 |
| 3XL |         124 |        115 |          83 |

**Kraťasy**

|     | délka šortek |
|-----|--------------|
| S   |           53 |
| M   |           53 |
| L   |           54 |
| XL  |           54 |
| XXL |           55 |
| 3XL |           58 |

-->