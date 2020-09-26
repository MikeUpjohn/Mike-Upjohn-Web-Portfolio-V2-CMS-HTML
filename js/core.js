$("form input").keydown(function(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
		return false;
	}
})

function setupDatePicker(element) {
	element.datepicker({
		dateFormat: "dd/mm/yy"
	});
}

function setupCKEditor(id) {
	CKEDITOR.replace(id);
}

function setupTags(element) {
	element.fastselect();
}

/*if($(".fstElement").length > 0 && $('.fstQueryInput').length > 0) {
	$("body").on("click", ".fstQueryInput", function() {
		$(this).parent().parent().css('border-color','#66afe9');
		$(this).parent().parent().css('outline', 0);
		$(this).parent().parent().css('-webkit-box-shadow', 'inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6)');
		$(this).parent().parent().css('box-shadow', 'inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6)');
	});
}*/
