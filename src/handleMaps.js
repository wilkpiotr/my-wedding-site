const loadGoogleMapsApi = require('load-google-maps-api')

export function initMap() {
    const church = {lat: 50.053053, lng: 21.413948};
    const center = {lat: 50.053713, lng: 21.422612};
    const restaurant = {lat: 50.053231, lng: 21.432224};

    const contentStringA = `<div id="content">
            <h2>ŚLUB</h2>
            <div>
                <p>Kościół pw. św. Jadwigi;<br>
                ul. św. Jadwigi 9, 39-200 Dębica;<br>
                godzina 15:00</p>
            </div>
        </div>`;

    const contentStringB = `<div id="content">
            <h2>PRZYJĘCIE</h2>
            <div>
                <p>Restauracja Ambrozja;<br>
                ul. Mickiewicza 72, 39-200 Dębica;<br>
                godzina ~16:30</p>
            </div>
        </div>`;

    //   const APIKey = 'AIzaSyDGsJ1PpPNryoFr6XWQgnp4o0080fyBsdA';
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16, 
        center: center
    });

    const infowindowA = new google.maps.InfoWindow({
      content: contentStringA,
    });

    const infowindowB = new google.maps.InfoWindow({
      content: contentStringB
    });

    const marker = new google.maps.Marker({
        position: church, 
        label: 'A', 
        map: map, 
        title: 'Kościół pw. św. Jadwigi - ŚLUB', 
        animation: google.maps.Animation.DROP,
    });

    marker.addListener('click', function() {
      infowindowA.open(map, marker);
    });

    const marker2 = new google.maps.Marker({
        position: restaurant, 
        label: 'B', 
        map: map, 
        title: 'restauracja Ambrozja - PRZYJĘCIE', 
        animation: google.maps.Animation.DROP,
    });

    marker2.addListener('click', function() {
      infowindowB.open(map, marker2);
    });
}
window.initMap = initMap;