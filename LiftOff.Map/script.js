function initMap() {
  // setupiranje mape
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 43.508133, 
      lng: 16.440193
    },
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": "-34"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "hue": "#ff0000"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#3498db"
              },
              {
                  "visibility": "on"
              }
          ]
      }
  ]
  });
  //setupiranje searchboxa
  var input = document.getElementById('input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  // bindanje promjena searcha
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    var bounds = new google.maps.LatLngBounds();
    // dropto lokacija
    places.forEach(function(place) {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     map.setCenter(pos);
  //   });
  // }
  // setupiranje marker
  var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: {
          url: '../images/icon.png',
          scaledSize: new google.maps.Size(50, 50)
      },
      map: map
    });
    // na klik markera premjesi ga u sredinu
    google.maps.event.addDomListener(document.getElementById('marker'), 'click', function(evt) {
      marker.setPosition(map.getCenter());
      console.log(map.getCenter());
    });
}
// setupiranje datepickera
flatpickr('#picker', {
    enableTime: true,
    disableMobile: true,
    onChange: function(selectedDates, dateStr, fp) {
      if (!selectedDates.length)
        return;
      const ISODate = selectedDates[0].toISOString();
      console.log(ISODate);
    }
  }
);