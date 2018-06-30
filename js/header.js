$(document).ready(function(){

	$('body').click(function(e){
		if( ($('#responsive-menu').hasClass('hide') == false) && 
				(!$('#responsive-menu').is(e.target) && $('#responsive-menu').has(e.target).length === 0) && 
				(!$('#mobile-menu').is(e.target) && $('#mobile-menu').has(e.target).length === 0) ) {
			
			$('#responsive-menu').css('width','0px');
			setTimeout(function(){ 
				$('#responsive-menu').addClass('hide');
			}, 500);
		}
	});

	$('#mobile-menu').click(function(){
		
		if($('#responsive-menu').hasClass('hide') == true){
			$('#responsive-menu').removeClass('hide');
			$('#responsive-menu').css('width', '80%');
		}

	});

});