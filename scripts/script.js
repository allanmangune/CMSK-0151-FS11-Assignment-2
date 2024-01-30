var validator;
$().ready(function () {
    setupValidations();
    setupSubmitButton();
    $("#contact-form").submit(function(e){
        e.preventDefault();
    });
});

function setupValidations(){
    validator = $("#contact-form").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            emailAddress: {
                required: true,
                email: true
            },
            message:{
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            firstName: " Please enter your first name.",
            lastName: "Please enter your last name.",
            emailAddress: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            message: {
                required: "Please enter your message.",
                maxlength: "Your message must contain 2000 characters."
            }
        }
    });
}

function scrollToSection(scroll){
    $(document).scrollTop(scroll);
}

function setupSubmitButton(){
    $( "#submit-button" ).click(function() {
        var form = $( "#contact-form" );
        if (form.valid()){
            validator.resetForm(); 
            alert("We have received your message. We will contact you soon.");
        };
      });
}