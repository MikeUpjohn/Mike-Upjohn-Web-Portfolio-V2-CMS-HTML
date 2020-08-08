var width = $(window).width();

$(window).resize(function() {
	width = $(window).width();
	if(width >= 750) {
		$("#mobile-navigation-toggle").attr('aria-expanded','false');
		$("#main").animate({marginLeft:'0px'},'slow');  
	}
});

$("#mobile-navigation-toggle").click(function() {
	var expanded = $(this).attr('aria-expanded');

	if(expanded == "true") {
		$(this).attr('aria-expanded','false');
		$("#main").animate({marginLeft:'0px'},'slow');   
	}
	else {
		$(this).attr('aria-expanded','true');
		$("#main").animate({marginLeft:'260px'},'slow');   
	}

	$(".navbar-toggle").blur();
});

$("#copyright-year").html(new Date().getFullYear());