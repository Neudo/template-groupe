// Block name: Contact Form
// Dependencies: jquery.form-validator.js
// Docs: https://github.com/victorjonsson/jQuery-Form-Validator
(function(){
	(function(){
		var form = $('.js-contact-form');

		if(form.length){
			var submitForm = function ($form) {
				var formURL = $form.attr("action"); // Get the form's action
				var postData = $form.serialize(); // Serialize the form's data
				var successMessage = $('.js-contact-form__modal'); // Select the success modal

				// Submit an AJAX request
				$.ajax({
				    url : formURL,
				    type: "POST",
				    data : postData,
				    success:function() {
				    	// On success clear the data from the inputs
				    	$form.find('input:text, textarea').val(''); 
				    	// Show the success modal for 2 seconds
				    	successMessage.fadeIn().delay(2000).fadeOut();
				    }
				});

				// Prevent form default behavior
				return false;
			};

			// Validate the contact form, if succeeded, call the submitForm function
			$.validate({
		  		form : form,
		  		onSuccess: submitForm,
		  		errorElementClass: "has-error",
		  		scrollToTopOnError: false
			});
		}
	})();
})();