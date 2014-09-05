$(function(){
	var num = 0;
		
	$('#btn').on('click',function(){
		var area1 = $('#area1').val();
		var area2 = $('#area2').val();
		
		num = Number(area1) + Number(area2);
		
		console.log(num);
	});
	
	$('#btn2').on('click',function(){
		num +=10;
		console.log(num);
	});
	
	$('#btn3').on('click',function(){
		num -=10;
		console.log(num);
	});
	
	console.log(Number($('#test > li').eq(0).text()) + Number($('#test > li').eq(1).find('li').eq(3).text()));
});