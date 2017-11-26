---
layout: page
nazev: Skladby XVI. všesokolského sletu
---

# Nácvik skladeb v jednotách

|                     | Méďové | Noty | V peřině | Děti, to je věc! | Cirkus | Siluety | Ženobraní | Spolu | Borci | Princezna Republika |         |
|---------------------|--------|------|----------|------------------|--------|---------|-----------|-------|-------|---------------------|---------|
| Český Brod          |        | 8    |          |                  | 9      |         |           | 5     | 1     | 9                   | *32*    |
| Chocerady           |        |      |          |                  |        |         | 16        |       |       |                     | *16*    |
| Kralupy nad Vltavou |        |      | 16       |                  |        | 16      |           |       |       |                     | *32*    |
| Lysá nad Labem      | 8      |      |          |                  |        |         | 9         |       |       |                     | *17*    |
| Mochov              |        |      |          |                  |        |         | 7         | 8     |       |                     | *15*    |
| Nehvizdy            |        | 9    |          |                  |        |         | 11        |       |       |                     | *2*     |
| Přívory             |        | 9    |          |                  |        |         |           |       |       | 18                  | *27*    |
| Pyšely              | 12     |      | 24       |                  |        | 32      | 16        |       | 4     |                     | *88*    |
| Říčany a Radošovice | 8      | 9    |          | 16               |        | 16      | 16        |       | 2     | 18                  | *85*    |
| Šestajovice         |        | 5    |          |                  |        | 13      |           |       | 4     |                     | *22*    |
| Strančice           | 8      |      |          |                  |        |         |           |       |       |                     | *8*     |
| ASPV TJ Káraný      | 18     |      |          |                  |        |         |           |       |       |                     | *18*    |
| Celkem              | *54*   | *4*  | *4*      | *16*             | *9*    | *77*    | *75*      | *13*  | *11*  | *45*                | **380** |

Pro aktualizaci počtů kontaktujte [náčelníka Milana Hybnera](mailto:nacelnik@zbarakova.cz)

<table id="app">
  <tr>
    <th><em>Jednota</em></th>
    <th>Méďové</th>
    <th>Noty</th>
    <th>V peřině</th>
    <th>Děti, to je věc</th>
    <th>Cirkus</th>
    <th>Siluety</th>
    <th>Ženobraní</th>
    <th>Spolu</th>
    <th>Borci</th>
    <th>Princezna Republika</th>
    <th><em>Součet</em></th>
  </tr>
  <tr v-for="item in items">
    <td>{{ item['fields']['jednota'] }}</td>
    <td>{{ item['fields']['medove'] }}</td>
    <td>{{ item['fields']['noty'] }}</td>
    <td>{{ item['fields']['v-perine'] }}</td>
    <td>{{ item['fields']['deti'] }}</td>
    <td>{{ item['fields']['cirkus'] }}</td>
    <td>{{ item['fields']['siluety'] }}</td>
    <td>{{ item['fields']['zenobrani'] }}</td>
    <td>{{ item['fields']['spolu'] }}</td>
    <td>{{ item['fields']['borci'] }}</td>
    <td>{{ item['fields']['princezna'] }}</td>
    <td><em>{{ item['fields']['soucet'] }}</em></td>
  </tr>
</table>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js"></script>

<script type="text/javascript">
            var app = new Vue({
                el: '#app',
                data: {
                    items: []
                },
                mounted: function(){
                   this.loadItems(); 
                },
                methods: {
                    loadItems: function(){
                        
                        // Init variables
                        var self = this
                        var app_id = "appZB8ijzGUuuwJHP";
                        var app_key = "keyXQwawb2RfnxQSR";
                        this.items = []

axios.get(
                            "https://api.airtable.com/v0/"+app_id+"/Udaje?view=2018%20akce%20pracovni",
                            { 
                                headers: { Authorization: "Bearer "+app_key } 
                            }
                        ).then(function(response){
                            self.items = response.data.records
                        }).catch(function(error){
                            console.log(error)
                        })
                    }
                }
            })
        </script>


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