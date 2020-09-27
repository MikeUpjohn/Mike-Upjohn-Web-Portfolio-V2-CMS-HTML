$(document).ready(function() {
	setupDatePicker($("#blog-date"));
	setupDatePicker($("#scheduled-date"));
	setupCKEditor("main-content-editor");
	setupTags($("#blog-tags"));
});