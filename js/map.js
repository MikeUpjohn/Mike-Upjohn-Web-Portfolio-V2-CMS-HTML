let defaultFadeIn = 500;
let closeButtonHeight = 82;

$(document).ready(function() {
	if($("#route-map-area").length > 0) {
		$("#route-map-area").height($(window).height());
		$("#route-map").height($(window).height() - $(".close-map").height() - 20);

		$("#open-map-editor").click(function(e) {
			e.preventDefault();
			// initialiseMap();
			openMap();
		});

		$("#route-map-close").click(function(e) {
			e.preventDefault();
			closeMap();
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