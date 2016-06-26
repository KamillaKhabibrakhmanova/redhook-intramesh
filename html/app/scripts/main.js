$(document).ready(function(){
	initEventHandlers();

	function initEventHandlers(){

		$('.reply-button a').click(function(e){
			e.preventDefault();
			$('.reply-container').clone().appendTo($(e.target).parent().parent().parent().parent())
		});

		$('.subject a').click(function(e){
			e.preventDefault();
			$(e.target).parent().parent().find('.message-thread').slideToggle();
		});
	}
})
