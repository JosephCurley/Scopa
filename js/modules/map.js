jQuery(document).ready(function($) {

	var map;
	var mapContainer = $('.map-module')[0];
	function mapInitialize() {
    var latLng =  new google.maps.LatLng(42.364176, -71.054160);

  	var mapOptions = {
    	zoom: 18,
      zoomControl: false,
    	center: latLng
  	};
  	map = new google.maps.Map(mapContainer,
      mapOptions);

    var marker = new google.maps.Marker({
      position: latLng,
      title:"Scopa"
    });

    marker.setMap(map);

	}



	mapInitialize();


});