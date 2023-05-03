// Initialize and add the map
/*function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;*/

  
function initMap() {
  // Define a posição do mapa
  var myLatLng = {lat: -25.978727, lng: 32.569480};

  // Cria um objeto "map" e define a posição e o zoom inicial
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  // Adiciona um marcador na posição definida
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Campus do Zimpeto'
  });
}
