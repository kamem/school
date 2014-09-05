$(function(){
	//この中に処理を書いていく。
	$('ul li').on('mouseover',function(){
		$(this).find('ul').removeClass('off');
	});
	$('ul li').on('mouseout',function(){
		$(this).find('ul').addClass('off');
	});
});
