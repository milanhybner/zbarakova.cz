---
layout: default
---

<script src="https://maps.googleapis.com/maps/api/js?sensor=false&key=AIzaSyBVqJoGu_0x0BxCFVRq_MsyLTAefnzroqA"></script>

<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Kontakty</h3>
        </div>
    </div>
</div>

<div class="container mtb">
    <div class="row">
        <div class="col-md-3">
          <table class="table">
            <thead>
              <th style="width:80%;">Jednota</th>
              <th style="width:20%;">Členů</th>
            </thead>
            <tbody>

{% for jednota in site.data.jednoty %}

<tr>
<td>{% if jednota.web %}<a href='{{jednota.web}}'>{{jednota.nazev}}</a>{% else %}{{jednota.nazev}}{% endif %}</td>
<td><span class='badge badge-theme'>{{jednota.clenu}}</span></td>
</tr>

{% endfor %}
            </tbody>
          </table>
</div>



<div class="col-md-4 col-md-offset-1">

    <div id="map1" style="width: 100%; height: 300px;"></div>

    <script type="text/javascript">
      var locations1 = [
{% for jednota in site.data.jednoty %}
['{{jednota.web}}', {{jednota.lat}}, {{jednota.lon}}, '{{jednota.nazev}}'],
{% endfor %}
      ];
      var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 8,
        center: new google.maps.LatLng(50.1663, 14.7166),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < locations1.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations1[i][1], locations1[i][2]),
          map: map,
          title: locations1[i][3],
      });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            window.open(locations1[i][0]);
    //infowindow.setContent(locations[i][0]);
    //infowindow.open(map, marker);
}
})(marker, i));
    }
</script>

<div class="spacing"></div>


<div class="col-md-3 col-md-offset-1">

<h4>Sokolská župa Barákova</h4>
<p>IČ: 61383724</p>
<p>Zenklova 2/37<br />180 00 Praha – Libeň</p>

<p>
Lenka Brandová<br />
<em>tajemnice, kancelář župy Barákovy</em><br />
<a href="mailto:zbarakova@zbarakova.cz">zbarakova@zbarakova.cz</a><br />
<a id="predsednictvo"></a>
<a href="tel:723138151">723 138 151</a>
</p>

<div class="spacing"></div>

<h4>Předsednictvo</h4>


<p>
Jan Firbas<br />
<em>starosta</em><br />
<a href="mailto:starosta@zbarakova.cz">starosta@zbarakova.cz</a><br />
</p>
<p>
Ing. Jakub Otáhal<br />
<em>jednatel</em><br />
<a href="mailto:jednatel@zbarakova.cz">jednatel@zbarakova.cz</a>
</p>
<p>
Ing. Hana Dobrovodská<br />
<em>místostarostka pro ekonomiku</em><br />
<a href="mailto:mistostarostka@zbarakova.cz">mistostarostka@zbarakova.cz</a>
</p>
<p>
Ing. Jarmila Voráčková<br />
<em>místostarostka pro organizaci</em><br />
<a href="mailto:organizace@zbarakova.cz">organizace@zbarakova.cz</a>
</p>
<p>
Lenka Farkasová<br />
<em>hospodář, dotace</em><br />
<a href="mailto:hospodar@zbarakova.cz">hospodar@zbarakova.cz</a>
</p>
<p><a id="milan"></a>
PaedDr. Miloslava Pangrácová<br />
<em>náčelnice</em><br />
<a href="mailto:mila.pangrac@seznam.cz">mila.pangrac@seznam.cz</a>
</p>
<p>
Mgr. Milan Hybner<br />
<em>náčelník</em><br />
<a href="mailto:nacelnik@zbarakova.cz">nacelnik@zbarakova.cz</a>
</p>
<p>
Petr Janich<br />
<em>předseda odboru sportu</em><br />
<a href="mailto:predseda@zbarakova.cz">predseda@zbarakova.cz</a>
</p>
<p>
Jan Firbas<br />
<em>vzdělavatel</em><br />
<a href="mailto:jan.firbas@seznam.cz">jan.firbas@seznam.cz</a>
</p>

<p>
Michaela Papírníková<br />
<em>komise majetku</em>
</p>

<p>
Iveta Bendíková<br />
<em>redakce župního občasníku</em>
</p>

<p>
Ladislav Papírník<br />
<em>právní poradna</em>
</p>

<p>
František Nohejl
</p>

<p>
Jaroslav Denemark
</p>

<div class="spacing"></div>

<p>Podívejte se na:<br />
<ul><li><a href="http://sokol.eu/obsah/168/kontakty-cinovnici">kontakty na členy Předsednictva ČOS</a></li>
<li><a href="http://sokol.eu/obsah/5560/poradni-organy-predsednictva-cos">obsazení poradních orgánů Předsednictva ČOS</a></li></ul></p>

</div>

</div>
</div>