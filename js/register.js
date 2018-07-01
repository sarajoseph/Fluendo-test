$(document).ready(function(){

	$('#register-form').validate({
		rules: {
			birth: {
				required: true,
				dateISO: true
			},
			email: {
				email: true,
				minlength: 3
			},
			sport: {
				minlength: 3
			},
			role: {
				minlength: 3
			}
		}
	});

	$('#btnRegister').click(function(){
		if($('#register-form').valid()){
			alert('Successful registration!');
		}
	});

});