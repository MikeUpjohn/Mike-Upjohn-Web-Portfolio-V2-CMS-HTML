let defaultFadeIn = 500;
let closeButtonHeight = 82;

$(document).ready(function() {
	if($("#route-map-area").length > 0) {
		var mapHeight = $(window).height() - $(".close-map").height() - 20;

		$("#route-map-area").height($(window).height());
		$("#route-map").height(mapHeight);
		$("#map-area").height(mapHeight);
		$("#route-waypoints").height(mapHeight / 2);
		$("#route-markers").height(mapHeight / 2);

		$("#open-map-editor").click(function(e) {
			e.preventDefault();
			// initialiseMap();
			openMap();
		});

		// Close button click handler
		$("#route-map-close").click(function(e) {
			e.preventDefault();
			closeMap();
		});

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
	}
});

function openMap() {
	$("#route-map-area").fadeIn(defaultFadeIn);
}

function closeMap() {
	$("#route-map-area").fadeOut(defaultFadeIn);
}

function initialiseMap() {

}