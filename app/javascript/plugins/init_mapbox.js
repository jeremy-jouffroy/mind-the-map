import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jeangabin/cjp9ylha104s42rqw3jfl9ekk',
      center: [2.3522, 48.8566 ],
      zoom: 12
    });
    //fetch click coordinates
    map.once('click', function (e) {
      let coordinates = e.lngLat;
      let click_lng = coordinates.lng
      let click_lat = coordinates.lat
      console.log(click_lng)
      console.log(click_lat)
      //add marker
      new mapboxgl.Marker()
      .setLngLat([ click_lng, click_lat ])
      .addTo(map);
    });
  }
};


  // // ADD MARKER
//   if (mapElement) { // only build a map if there's a div#map to inject into
//     mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
//   const markers = JSON.parse(mapElement.dataset.markers);
//   markers.forEach((marker) => {
//     new mapboxgl.Marker()
//       .setLngLat([ marker.lng, marker.lat ])
//       .addTo(map);
//   });
// }
    // map.style.stylesheet.layers.forEach(function(layer) {
    //   if (layer.type !== null) {
    //     map.removeLayer(layer.id);
    //   }
    // });

export { initMapbox };


