$(function(){
	var parallaxObj = {};
	parallaxObj['circle'] = {};
	parallaxObj['circle'].obj = $('.circle');
	parallaxObj['circle'].tagMotions = {}
	parallaxObj['circle'].tagMotions.motion1 = [{
		start : 0,
		end : 1500,
		fromStyle : {
			left : -100
		},
		toStyle : {
			left : 500
		},
		easing : 'linear'
	}];
	parallaxObj['circle'].tagMotions.motion2 = [{
		start : 1500,
		end : 3000,
		fromStyle : {
			left : 500
		},
		toStyle : {
			left : 1100
		},
		easing : 'linear'
	}];
	parallaxObj['circle'].tagMotions.motion3 = [{
		start : 3000,
		end : 4500,
		fromStyle : {
			left : -100
		},
		toStyle : {
			left : 500
		},
		easing : 'linear'
	}];
	parallaxObj['circle'].tagMotions.motion4 = [{
		start : 4500,
		end : 6000,
		fromStyle : {
			left : 500
		},
		toStyle : {
			left : 1100
		},
		easing : 'linear'
	}];
	parallaxObj['circle2'] = {};
	parallaxObj['circle2'].obj = $('.circle');
	parallaxObj['circle2'].tagMotions = {}
	parallaxObj['circle2'].tagMotions.motion1 = [{
		start : 0,
		end : 1500,
		fromStyle : {
			bottom : -100
		},
		toStyle : {
			bottom : 300
		},
		easing : 'easeOutQuad'
	}];
	parallaxObj['circle2'].tagMotions.motion2 = [{
		start : 1500,
		end : 3000,
		fromStyle : {
			bottom : 300
		},
		toStyle : {
			bottom : -100
		},
		easing : 'easeInQuad'
	}];
	parallaxObj['circle2'].tagMotions.motion3 = [{
		start : 3000,
		end : 4500,
		fromStyle : {
			bottom : -100
		},
		toStyle : {
			bottom : 300
		},
		easing : 'easeOutQuad'
	}];
	parallaxObj['circle2'].tagMotions.motion4 = [{
		start : 4500,
		end : 6000,
		fromStyle : {
			bottom : 300
		},
		toStyle : {
			bottom : -100
		},
		easing : 'easeInQuad'
	}];

	$(window).parallax({
		direction: 'x',
		parallax : parallaxObj
	});

});