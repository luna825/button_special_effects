$(function(){
	$('.link .button').hover(function(){
		var tip = $(this).attr('data');
		$('.tip em').text(tip);
		var tipW = $('.tip').outerWidth();
		var pos = $(this).position().left+165-tipW/2;
		$('.tip').css({'left':pos+'px'}).animate({
			'top': 140,
			'opacity': 1
			/* stuff to do after animation is complete */
		},300);
	},
	function(){
		if(!$('.tip').is(':animated')){
			$('.tip').animate({
				'top': 100,
				'opacity': 0},
				300
			/* stuff to do after animation is complete */
		);}
	});
});