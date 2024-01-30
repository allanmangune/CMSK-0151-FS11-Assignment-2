$().ready(function () {
    setupValidations();
});

function setupValidations(){
    $("#contact-form").validate({
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