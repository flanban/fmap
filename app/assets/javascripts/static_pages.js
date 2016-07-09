function initialize() {
  var earth = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);
}

function initialize2() {
       var earth2 = new WE.map('earth_div_2');
       WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth2);

       var marker = WE.marker([51.5, -0.09]).addTo(earth2);
       marker.bindPopup("<b>Hello world!</b><br>London: 10 points<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

       var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth2);
       marker2.bindPopup("<b>Cairo</b><br>50 points!", {maxWidth: 120, closeButton: false});

       //var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth2);

       earth2.setView([51.505, 0], 6);
     }

     function initialize3() {
             var earth3 = new WE.map('earth_div_3');
             WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
               attribution: '© OpenStreetMap contributors'
             }).addTo(earth3);

             var polygonA = WE.polygon([[49.5608, 5.811], [49.986, 5.723],
               [50.190, 6.086], [49.781, 6.536], [49.468, 6.372], [49.560, 5.811]]
                     );
             polygonA.addTo(earth3);

             var polygonB = WE.polygon([[46.15700, 5.9765625], [47.010, 6.525],
               [47.480, 6.965], [47.805, 8.613], [47.442, 9.645], [47.085, 9.459],
               [46.957, 10.447], [46.225, 10.140], [46.422, 9.272], [45.844, 9.030],
               [46.445, 8.360], [45.935, 7.811], [45.851, 7.141], [46.430, 6.734],
               [46.157, 5.976]], {
               color: '#ff0',
               opacity: 1,
               fillColor: '#f00',
               fillOpacity: 0.1,
               editable: true,
               weight: 2
             }).addTo(earth3);

             earth3.setView([48, 6], 5);
           }

$(function() {
  initialize();
  initialize2();
  initialize3();
});
