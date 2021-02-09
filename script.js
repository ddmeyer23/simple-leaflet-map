require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
        var map = new Map({
          basemap: "dark-gray-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90.1, 38.46] // longitude, latitude
        });
      });
