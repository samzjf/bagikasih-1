function getupdate(input){
	$.ajax({
		  url: "/"+input,
		  method: "get",
		  data: '',
		  success:function(response){
		  	console.log(response);
		  }
	});
	return false;
}

function login(data,el){	
	$("#loginfailuresss").hide();
	$("#loginfailuresss").empty();
	var email    = data.email.value;
	var password = data.password.value;
	var senddata  = 'email='+email+'&password='+password;
	var failure = '';
	// var currenturl = document.URL;
	var komplain = 'empty';
	try {
		komplain  = user_id;
	}
	catch(err) {
	
	}

	$.ajax({
		  url: "/signin",
		  method: "post",
		  data: senddata,
		  success:function(response){
		  	if(typeof response === 'object'){
			  	for(var i=0;i<response.length;i++){
			  		failure += response[i] + '<br />';
			  	}
			  	$("#loginfailuresss").append(failure);
			  	$("#loginfailuresss").show();
		  	}else if(response == 'no'){
		  		$("#loginfailuresss").append('Email or password is failed');
			  	$("#loginfailuresss").show();
		  	}else{
		  		//check, if before user was create event on bagikasih
		  		console.log(komplain);
		  		if(komplain == 'update-event'){
					$('#modal-signin').modal('toggle');
					getupdate(komplain);
					document.location.href = currenturl;
		  		}else{
			  		$("#email").val('');
			  		$("#password").val('');
			  		document.location.href = currenturl;
		  		}
		  	}
		  	return false;
		  }

	});
	return false;
}

function signup(data,el){
	
	$("#signupfailure").hide();
	$("#signupfailure").empty();
	var email        	  = data.email.value;
	var firstname    	  = data.firstname.value;
	var lastname     	  = data.lastname.value;
	var phone_number 	  = data.phone_number.value;
	var password     	  = data.password.value;
	var password_confirm  = data.password_confirm.value;
	// var currenturl = document.URL;
	
	var senddata     = 'email='+email+'&password='+password+'&firstname='+firstname+'&lastname='+lastname+'&phone_number='+phone_number+'&password_confirm='+password_confirm;
	var failure = '';
	$.ajax({
		  url: "/signup",
		  method: "post",
		  data: senddata,
		  success:function(response){
		  	console.log(response);
		  	if(typeof response === 'object'){
			  	for(var i=0;i<response.length;i++){
			  		failure += response[i] + '<br />';
			  	}
			  	$("#signupfailure").append(failure);
			  	$("#signupfailure").show();
		  	}else if(response == 'no'){
		  		$("#signupfailure").append('Signup is failed');
			  	$("#signupfailure").show();
		  	}else{
		  		$("#firstname").val('');
		  		$("#lastname").val('');
		  		$("#email").val('');
		  		$("#phone_number").val('');
		  		$("#password").val('');
		  		$("#password_confirm").val('');
		  		document.location.href = currenturl;
		  	}
		  	return false;
		  }
	});
	return false;	
}