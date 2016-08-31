Template.LogIn.onRendered(function(){
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
});



Template.LogIn.events({
    'click #logInButton' : function(event){
        event.preventDefault();

        //Check to confirm Button click
        console.log("Submit button pressed");

        var password = $("#usersPassword").val();
        var email = $("#my_email").val();

        //trim out any whitespace
        email = email.replace(/^\s*|\s*$/g, '');
        password = password.replace(/^\s*|\s*$/g, '');

        //validate
        var emailIsValid = checkEmailIsValid(email);
        var passwordIsValid = checkPasswordIsValid(password);

        if (!emailIsValid || !passwordIsValid) {
            if (!emailIsValid) {
                swal("Your email address is invalid!", "warning");
            }
            if (!passwordIsValid) {
                swal("Your password must be at least 8 characters long!", "warning");
            }
        } else {
            Meteor.loginWithPassword(email, password, function (error) {
                if (error){
                    swal({
                        title: "Something appears wrong",
                        text: error.reason,
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Let's try again!",
                        closeOnConfirm: false
                    });
                    console.log("Something went wrong when logging in the user" + error.reason);
                } else {
                    console.log("Success! User logged in!");
                    swal("Welcome!", "Login Successful!", "success");
                    Router.go('/home');
                }
            });
        }
    }
});
