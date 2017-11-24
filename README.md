Na stránky lze nyní přidávat obsah s pomocí Netlify CMS. Tento popis bude brzy aktualizován. Pro získání přístupu ke správě webu kontaktujte Milana Hybner, nacelnik@zbarakova.cz.

---

# Návod na publikaci článků

1. Na [GitHubu](https://github.com/milanhybner/zbarakova.cz/tree/gh-pages/_posts) ve složce __posts_ vybrat _Create new file_
2. Do malého rámečku nahoře napsat název souboru – datum ve tvaru RRRR-MM-DD (např. 2018-06-21), spojovník a slovo (slova) bez háčků, čárek a mezer, které vystihuje obsah článku, např. _zavod_, tečku a písmena _md_. V rámečku tedy bude např. 2017-06-21-zavod.md
3. Do velkého rámečku napsat obsah souboru – tři spojovníky, na další řádek _nazev:_ a název článku, na další řádek _tags:_ a štítek (pokud jich je víc, oddělit je mezerami), na další řádek tři spojovníky a další řádek nechat volný. Začátek souboru tedy bude vypadat takto:
```
---
nazev: Závod v Horní Dolní
tags: jednota→verejnost jednota→jednota jednota→zupa
---

```
4. Kliknout na zelené tlačítko

# Štítky

Články jsou označovány pomocí štítků. Ty vyjadřují z jaké do jaké úrovně v hierarchii sokolské organizace je informace v článku určena.

Úrovně jsou:

* ústředí
* župa
* jednota
* veřejnost

Štítky jsou tedy:

* jednota→verejnost
* jednota→jednota
* jednota→zupa
* jednota→ustredi
* zupa→verejnost
* zupa→jednota
* zupa→zupa
* zupa→ustredi
* ustredi→verejnost
* ustredi→jednota
* ustredi→zupa

# Struktura

Hierarchie složek vychází z [obecné struktury složek v Jekyllu](https://jekyllrb.com/docs/structure/) s následujícím upřesněním:

**/ov** obsahuje stránky spadající k *odboru všestrannosti* (viz menu na hlavní stránce)

**/os** obsahuje stránky spadající k *odboru sportu* (viz menu na hlavní stránce)

**/vo** obsahuje stránky spadající ke *vzdělavatelskému odboru* (viz menu na hlavní stránce)

a podobně.

Všechny soubory, které se nachází přímo v úložišti webu, jsou v **/soubory**, ostatní složky (/img, ...) obsahují soubory vzhledu.

# Doporučené postupy

* Pokud informace o akcích (pozvánky) nebo dokumenty pochází odjinud z webu, doporučuje se odkazovat přímo na tento zdroj. Zjednoduší se tak kontrola aktuálnosti odkazovaných informací.

# Technické informace

Stránky jsou hostovány jako [GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/). Filtrování seznamů zajišťuje [List.js](http://listjs.com/). Databáze akcí je ve službě [Airtable](https://airtable.com/).
