$(function(){

	$('[class*=sqware]').each(function(i){
		var top = parseInt($(this).offset().top);
		var init = -(parseInt($(this).offset().top) + parseInt($(this).height()));
		$(this).css({
			top: init,
		})
		console.log(top);
		$(window).parallax({
			parallax : $(this),
			type : 'scrollSpeed',
			style : 'top',
			fixPosition : 500 * i,
			speed : 0.5,
			adjustment : init
		});
	});

});