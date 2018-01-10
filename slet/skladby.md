---
layout: page
nazev: Skladby XVI. všesokolského sletu
---

# Nácvik skladeb v jednotách

|                     | Méďové | Noty | V peřině | Děti, to je věc! | Cirkus | Siluety | Ženobraní | Spolu | Borci | Princezna Republika |       |
|---------------------|--------|------|----------|------------------|--------|---------|-----------|-------|-------|---------------------|-------|
| Český Brod          |        | 8    |          |                  | 19     |         |           | 5     | 1     | 12                  | 45    |
| Chocerady           |        |      |          |                  |        |         | 16        |       |       |                     | 16    |
| Kralupy nad Vltavou |        |      | 16       |                  |        | 16      |           |       |       |                     | 32    |
| Lysá nad Labem      | 8      |      |          |                  |        |         | 9         |       |       |                     | 17    |
| Mochov              |        |      |          |                  |        |         | 7         | 8     |       |                     | 15    |
| Nehvizdy            |        | 9    |          |                  |        |         | 11        |       |       |                     | 20    |
| Přívory             |        | 18   |          | 8                |        |         |           |       |       | 18                  | 52    |
| Pyšely              | 12     |      | 24       |                  |        | 32      | 16        |       | 4     |                     | 88    |
| Říčany a Radošovice | 8      | 9    |          | 16               |        | 16      | 16        |       | 2     | 18                  | 85    |
| Šestajovice         |        | 5    |          |                  |        | 13      |           |       | 4     |                     | 22    |
| Strančice           | 8      |      |          |                  |        |         |           |       |       |                     | 8     |
| ASPV TJ Káraný      | 16     |      |          |                  |        |         |           |       |       |                     | 16    |
| *Celkem*            | *52*   | *49* | *40*     | *32*             | *19    | *77*    | *75*      | *13*  | *11*  | *48*                | *416* |

Pro aktualizaci počtů kontaktujte [náčelníka Milana Hybnera](mailto:nacelnik@zbarakova.cz)


# Župní garanti sletových skladeb

* Po kliknutí na název skladby se zobrazí podrobnosti k jednotlivým skladbám na oficiální stránce skladby na slet.sokol.eu.
* Po kliknutí na garanta skladby se nabídne otevření e-mailového programu s předvyplněnou e-mailovou adresou garanta.
* Garanti uvedení tučně jsou župní vedoucí dané skladby
* Skladby [Siluety](https://www.facebook.com/siluety2018/) a [Vivat Vivaldi](https://www.facebook.com/vivatvivaldi/) jsou také na facebooku

<div class="container mt">
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

# Termíny kontrolních srazů

| Datum  |       Skladba       |           Župní vedoucí           |
|--------|---------------------|-----------------------------------|
| 10. 2. | Princezna republika | Scharfová, Bláha, Krymlová        |
| 17. 2. | Siluety             | Bartíková / Kurajdová             |
| 18. 2. | Ženobraní           | Voráčková / Horčičková            |
| 24. 2. | Cirkus              | Diana Minaříková / Jan Blažek     |
| 25. 2. | Děti, to je věc!    | Bělohlávková / Černá              |
| 3. 3.  | V peřině            | Bartíková                         |
| 10. 3. | Méďové              | Horáčková Jungmannová / Bartíková |
| 11. 3. | Noty                | Bašusová / Vaňková                |
| 17. 3. | Spolu               | Valášková / Bašusová              |
| 18. 3. | Borci               | Hybner /                          |



# Termíny nácvičných srazů 2017


|       Skladba       |    Termín    |    Místo     | Župní vedoucí / zástupce vedoucího |
|---------------------|--------------|--------------|------------------------------------|
| Děti, to je věc     | 21. října    | Tyršův dům   | Bělohlávková / Černá               |
| Cirkus              | 7. října     | Tyršův dům   | Diana Minaříková / Jan Blažek      |
| Méďové              | 7. října     | Praha Karlín | Horáčková Jungmannová / Bartíková  |
| Noty                | 8. října     | Praha Karlín | Bašusová                           |
| V peřině            | 14. října    | Praha Karlín | Bartíková                          |
| Siluety             | 4. listopadu | Praha Karlín | Bartíková / Kurajdová              |
| Ženobraní           | 21. října    | Praha Karlín | Voráčková / Horčičková             |
| Spolu               | 14. října    | Brno         | Valášková / Bašusová               |
| Borci               | 28. října    | Tyršův dům   | Hybner / Braný                     |
| Princezna republika | 4. listopadu | Tyrsův dům   | Scharfová, Bláha, Krymlová         |


Náčelnictvo župy Barákovy děkuje všem zástupcům za účast na nácvičných srazech!

# Župní vedoucí skladeb a jejich zástupci

|       skladba       |             ž. vedoucí            |       jednota       |     zást. ž .v     |       jednota       |
|---------------------|-----------------------------------|---------------------|--------------------|---------------------|
| Noty                | Iva Bašusová                      | Český Brod          | Eva Vaňková        | Šestajovice         |
| Méďové              | Eva Horáčková Jungmannová         | Říčany a Radošovice | Tereza Bartíková   | Pyšely              |
| Děti, to je věc!    | Kateřina Bělohlávková             | Říčany a Radošovice | Lenka Černá        | Říčany a Radošovice |
| Spolu               | Milena Valášková                  | Mochov              | Iva Bašusová       | Český Brod          |
| Ženobraní           | Jarmila Voráčková                 | Říčany a Radošovice | Martina Horčičková | Lysá                |
| Princezna Republika | Miloslava Pangrácová, Josef Bláha | Říčany a Radošovice | Jana Scharfová     | Říčany a Radošovice |
| V peřině            | Bartíková                         | Pyšely              |                    |                     |
| Cirkus              | Diana Minaříková                  | Český Brod          | Jan Blažek         | Český Brod          |
| Siluety             | Tereza Bartíková                  | Pyšely              | Ivana Kurajdová    | Říčany a Radošovice |
| Borci               | Milan Hybner                      | Šestajovice         |                    |                     |

# Župní, krajské a oblastní slety

|    Datum     |         Místo         |     Název     |         Pořadatel - ŽUPA        |                                Kontaktní osoba                                 |
|--------------|-----------------------|---------------|---------------------------------|--------------------------------------------------------------------------------|
| 12.5.2018    | Libouchec             | župní slet    | Severočeská                     | Dagmar Toncarová: dtoncarova@sokol.eu                                          |
| 12.5.2018    | Benátky nad Jizerou   | župní slet    | Fügnerova                       | Olga Vašková:  olga.vaskova@email.cz                                           |
| 19.5.2018    | Dvůr Králové / Labem  | župní slet    | Podkrkonošská-Jiráskova         | Ludmila Vlčková: dondule@seznam.cz                                             |
| 20.5.2018    | Spálené Poříčí        | místní slet   | Plzeňská                        | Lada Šmídlová: zplzenska@sokol.eu                                              |
| 20.5.2018    | Jedovnice             | župní slet    | Krále Jiřího                    | Kateřina Klimešová: sokoljedovnice@centrum.cz                                  |
| 20.5.2018    | Sletiště              | župní slet    | Budečská                        | Jana Kučerová: zupa.budecska@volny.cz                                          |
| 26.5.2018    | Blovice               | župní slet    | Plzeňská                        | Lada Šmídlová: zplzenska@sokol.eu                                              |
| 26.5.2018    | Jičín                 | župní slet    | Jičínská-Bergrova               | Lada Vávrová: vavrova.lada@seznam.cz                                           |
| 26.5.2018    | Moravičany            | místní slet   | Severomoravská                  | Ivana Fučíková: fucikova.ivana@seznam.cz                                       |
| 26.5.2018    | Třebíč                | krajský slet  | kraj Vysočina                   | Martin Zuzaňák: zupaplksvece@seznam.cz                                         |
| 26.5.2018    | Hranice               | župní slet    | Středomoravská – Kratochvilova  | Eva Navaříková: zstredom@volny.cz                                              |
| 26.5.2018    | Městečko Trnávka      | oblastní slet | Východočeská-Pippichova         | Světlana Pilařová: kancelar@zupa-pippichova.eu                                 |
| 27.5.2018    | Brandýs nad Labem     | oblastní slet | Barákova + Třížupí              | Lenka Brandová: zbarakova@zbarakova.cz                                         |
| 27.5.2018    | Tišnov                | župní slet    | Pernštejnská                    | Jan Sláma: j.slama.sokol@seznam.cz                                             |
| 27.5.2018    | Veselí nad Moravou    | župní slet    | Slovácká                        | Radmila Dvořáčková: radmill@centrum.cz                                         |
| 2.6.2018     | Děčín                 | oblastní slet | Severočeská                     | Dagmar Toncarová: d.toncarova@rehkat.cz                                        |
| 2.6.2018     | Olomouc               | župní slet    | Olomoucká                       | Antonín Skácel: skacel.antonin@seznam.cz                                       |
| 3.6.2018     | Hradec Králové        | krajský slet  | Orlická                         | Eva Dítětová: info@zupaorlicka.cz                                              |
| 3.6.2018     | Vyškov                | župní slet    | Dr. Bukovského                  | Zdeňek Doležal: sokol31ta@tiscali.cz                                           |
| 3.6.2018     | Ostrava               | krajský slet  | Moravskoslezská                 | Marie Neusserová: sokol@mszupa.cz                                              |
| 9.6.2018     | Komárov               | župní slet    | Jungmannova                     | Olga Kleknerová: olga.kleknerova@seznam.cz                                     |
| 9.6.2018     | Prostějov             | župní slet    | Prostějovská                    | Lenka Michlová: sokol.zupapv@volny.cz                                          |
| 9.6.2018     | České Budějovice      | krajský slet  | Jihočeská                       | Ingrid Váchová: zjihoceska@seznam.cz                                           |
| 9.-10.6.2018 | Pardubice             | župní slet    | Východočeská-Pippichova         | Lenka Pařízková: kancelar@zupa-pippichova.eu                                   |
| 9.-10.6.2018 | Turnov                | krajský slet  | Ještědská, Jizerská, Krkonošská | Táňa Pokorná: zupajestedska@seznam.cz, Miluše Řeháková: zupa.jizerska@volny.cz |
| 10.6.2018    | Valašské Meziříčí     | župní slet    | Valašská Fr. Palackého          | Zdenka Glózová: zdenkaglozova@centrum.cz,                                      |
| 10.6.2018    | Brno                  | krajský slet  | Jana Máchala, Dr. J. Vaníčka    | Eva Dudová: sokol.machal@volny.cz, Jana Švestková: zvanickova@volny.cz         |
| 10.6.2018    | Dubicko               | župní slet    | Severomoravská                  | Jiří Sobotík: jirisobotik@seznam.cz                                            |
| 16.6.2018    | Nový Hrádek           | místní slet   | Podkrkonošská-Jiráskova         | Ludmila Vlčková: dondule@seznam.cz                                             |
| 16.6.2018    | Přerov                | krajský slet  | Středomoravská-Kratochvílova    | Eva Navaříková: zstredom@volny.cz                                              |
| 16.6.2018    | Votice                | krajský slet  | Blanická                        | Zdeněk Balík, Milena Klimperová: sokolskazupablanicka@volny.cz                 |
| 16.6.2018    | Uherský Brod          | krajský slet  | Komenského                      | K. Mlýnková: kancelar@zupakomentskeho.cz                                       |
| 16.6.2018    | Plzeň Lobzy           | oblastní slet | Plzeňská                        | Lada Šmídlová: zplzenska@sokol.eu                                              |
| 16.6.2018    | Louny                 | župní slet    | Sladkovského                    | Jaroslava Sádovská: zupa.sladkovskeho@email.cz                                 |
| 17.6.2018    | AFK Pečky             | župní slet    | Tyršova                         | Josef Těšitel: ztyrsova@sokol.eu                                               |
| 23.6.2018    | Bystřice pod Hostýnem | župní slet    | Hanácká                         | Ivana Zavadilová: zupahanacka@volny.cz                                         |


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