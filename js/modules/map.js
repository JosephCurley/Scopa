jQuery(document).ready(function($) {

	var map;
	var mapContainer = $('.map-module')[0];
	function mapInitialize() {
  	var mapOptions = {
    	zoom: 18,
    	center: new google.maps.LatLng(42.3649, -71.0551)
  	};
  	map = new google.maps.Map(mapContainer,
      mapOptions);
	}



	mapInitialize();
});