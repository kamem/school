$(function(){
	var num = 0;

	$('#btn').on('click',function(){
		//処理
		var num1 = $('#area1').val();
		var num2 = $('#area2').val();
		
		num = Number(num1) + Number(num2);
		
		console.log(num);
	});

	$('#btn2').on('click',function(){
		//処理
		num = num + 10;
		
		console.log(num);
	});

	$('#btn3').on('click',function(){
		//処理
		num = num - 10;
		
		console.log(num);
	});
	
	
});