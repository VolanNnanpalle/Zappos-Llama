$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/vnnanpalle@hotmail.com", 
	    method: "POST",
	    data: {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	phone: $("#subject").val(),
	    	message: $("#message").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#subject").val("");
			$("#message").val("");
			document.getElementById("success").innerHTML="Message Sent"
			// alert("Message Sent!");
		}).fail(function(){
			alert("ERROR WHILE SENDING MESSAGE!");
		});
	});

}) ;