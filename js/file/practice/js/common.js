$(function(){

	//コメントの書き方
	
	/*	CSSと同じ書き方もできるよ
	$('ul li').on('mouseover',function(){
		$(this).css({
			color:'red',
			marginLeft:'10px'
		});
	});

	$('ul li').on('mouseout',function(){
		$(this).css({
			color:'#333',
			marginLeft:'0'
		});
	});	*/
	
	
	$('ul li').on('mouseover',function(){
		$(this).addClass('on');
	});

	$('ul li').on('mouseout',function(){
		$(this).removeClass('on');
	});	
	
});