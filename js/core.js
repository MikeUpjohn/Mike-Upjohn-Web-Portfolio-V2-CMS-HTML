$(document).ready(function() {
	setupDatePicker('blog-date', null);
});

function setupDatePicker(id, options) {
	let datepickerSelector = '#' + id;
	if($(datepickerSelector).length > 0) {
		var datepicked = $(datepickerSelector).datepicker();
		console.log(datepicked);
	}
}