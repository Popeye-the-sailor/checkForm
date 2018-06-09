$(function(){
	$('input#name, input#email, textarea#message').unbind().blur(function (){
		var id = $(this).attr('id');
		var val = $(this).val();
		switch(id)
			{
			case 'name' : 
				var rv_name = /^[a-zA-Zа-яА-Я]+$/;
				if ((val.length) > 2 && rv_name.test(val)) {
				$(this).addClass('not_error');
				$(this).next('.error-box').text('Принято')
																	.css('color','green')
																	.animate({'paddingLeft':'10px'},400)
																	.animate({'paddingLeft':'5px'},400);
			} else {
				$(this).removeClass('not_error').addClass('error');
				$(this).next('.error-box').html('поле "Имя" обязательное для заполнения')
																.css('color', 'red')
																.animate({'paddingLeft':'10px'},400)
																.animate({'paddingLeft':'5px'},400);
			}
			break;
					
				case 'email':
						var rv_email = /^([a-zA-z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z)]+[a-zA-Z])+/;
						if(val !='' & rv_email.test(val))
							{
								$(this).addClass('not_error');
								$(this).next('.error-box').text('Принято')
																	.css('color','green')
																	.animate({'paddingLeft':'10px'},400)
																	.animate({'paddingLeft':'5px'},400);
			} else {
				$(this).removeClass('not_error').addClass('error');
				$(this).next('.error-box').html('поле "E-mail" обязательное для заполнения')
																.css('color', 'red')
																.animate({'paddingLeft':'10px'},400)
																.animate({'paddingLeft':'5px'},400);
			}
			break;
					
					case 'message':
						if(val !='' & val.length <5000)
							{
								$(this).addClass('not_error');
								$(this).next('.error-box').text('Принято')
																	.css('color','green')
																	.animate({'paddingLeft':'10px'},400)
																	.animate({'paddingLeft':'5px'},400);
			} else {
				$(this).removeClass('not_error').addClass('error');
				$(this).next('.error-box').html('поле "Текст письма" обязательное для заполнения')
																.css('color', 'red')
																.animate({'paddingLeft':'10px'},400)
																.animate({'paddingLeft':'5px'},400);
			}
			break;
					
			} // end switch	
	
	}) //end blur()
	
	$('form#feedback-form').submit(function (e){
		e.preventDefault();
		
		if ($('.not-error').length != 3) {
			return false;
		}
			
	}); //end submit()
	
}) //end script