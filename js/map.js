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

		$("#route-map-close").click(function(e) {
			e.preventDefault();
			closeMap();
		});

		$("#route-waypoint-add").click(function(e) {
			e.preventDefault();
			console.log("clicked add route waypoint");
		});

		$(".route-waypoints-list li .delete").click(function(e) {
			e.preventDefault();
			console.log("clicked delete");
		});

		$(".route-waypoints-list").sortable({
			handle: ".drag-handle"
		});

		$("#route-marker-add").click(function(e) {
			e.preventDefault();
			$("#route-marker-modal").fadeIn();
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