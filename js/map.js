let defaultFadeIn = 500;
let closeButtonHeight = 82;

$(document).ready(function() {
	if($("#route-map-area").length > 0) {
		
		$(".modal-backdrop").click(function(e) {
			e.preventDefault();
		});

		// Set these up first, then control height after scrollbars created
		if($("#route-waypoints").length > 0) {
			$("#route-waypoints").mCustomScrollbar({
				axis: "y",
				theme: "dark",
				setHeight: true
			});
		}

		if($("#route-markers").length > 0) {
			$("#route-markers").mCustomScrollbar({
				axis: "y",
				theme: "dark",
				setHeight: true
			});
		}

		var mapHeight = $(window).height() - 216; // Arbitrary number to account for the header, footer and padding.

		$("#route-map-area").height($(window).height());
		$("#route-map").height(mapHeight);
		$("#map-area").height(mapHeight);
		$("#route-waypoints").css("height", mapHeight / 2 + "px");
		$("#route-markers").css("height", mapHeight / 2 + "px");

		// Route waypoint add button click handler
		$("#route-waypoint-add").click(function(e) {
			e.preventDefault();
			console.log("clicked add route waypoint");
		});

		// Route waypoints delete click handler
		$(".route-waypoints-list li .delete").click(function(e) {
			e.preventDefault();
			console.log("clicked route waypoint delete");
		});

		// Route waypoints drag and drop handler
		$(".route-waypoints-list").sortable({
			handle: ".drag-handle"
		});

		// Route marker add button click handler
		$("#route-marker-add").click(function(e) {
			e.preventDefault();
			$("#route-marker-modal").fadeIn();
		});

		// Router marker delete click handler
		$(".route-markers-list li .delete").click(function(e) {
			e.preventDefault();
			console.log("clicked route marker delete");
		});

		// Route marker drag and drop handler
		$(".route-markers-list").sortable({
			handle: ".drag-handle"
		});

		//CKEDITOR for Add New Marker page
		if($("#add-marker-editor").length > 0) {
			setupCKEditor("add-marker-editor");
		}

		if($("#route-map-colour").length > 0) {
			var colorPicker = new iro.ColorPicker('#route-map-colour', {
				width:200,
				id: 'mike-test'
			});

			colorPicker.on('color:change', function(color) {
				console.log(color.hexString);
			});
		}

		$("#route-map-area").on('shown.bs.modal', function(e) {
			console.log("modal shown");
			initialiseMap();
		});
	}
});

function initialiseMap() {
	let map = $("#map-area");
	if(map.data('loaded') == false) {
		mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZXVwam9obiIsImEiOiJjazk2enRjbHQwODB5M2xtanB6bGtoOW9zIn0.QKZt26yxRxYmzMa6i1RkYQ';
		map = new mapboxgl.Map({
			container: 'map-area',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-97.008434, 32.835795], // TODO: Make this dynamic...
			zoom: 6
		});
		
		map.data('loaded', true);
	}
}