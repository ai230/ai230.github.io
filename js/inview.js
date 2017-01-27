$(function() {
	$('.list-mv').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			console.log("ok");
			$(this).stop().addClass('mv');
		}
		else{
			$(this).stop().removeClass('mv');
		}
	});
});
