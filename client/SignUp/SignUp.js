Template.SignUp.onRendered(function(){
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
});



Template.SignUp.events({
      'click #sign_up_submit': (event, template) => {
            event.preventDefault();

            //Check to confirm Button click
            console.log("Submit button pressed");

            var firstName = $("#first_name").val();
            var lastName = $("#last_name").val();
            var name = firstName + " " + lastName;
            var password = $("#usersPassword").val();
            var email = $("#my_email").val();
            var association = $(".association a.active").text();

            //trim out any whitespace
            email = email.replace(/^\s*|\s*$/g, '');
            password = password.replace(/^\s*|\s*$/g, '');

            function checkEmailIsValid(email) {
                return email
            };

            function checkPasswordIsValid(password) {
                if (password.length < 8) {
                    return false
                } else {
                    return true
                }
            };

            //validate
            var emailIsValid = checkEmailIsValid(email);
            var passwordIsValid = checkPasswordIsValid(password);

            if (!emailIsValid) {
                swal("Your email address is invalid!", "warning");
            } else if (!passwordIsValid) {
                swal("Your password must be at least 8 characters long!", "warning");
            } else {
                Accounts.createUser({
                    email: email,
                    password: password,
                    profile: {
                        name: name
                    }
                }, (error) => {
                    if (error) {
                        swal({
                            title: "Something appears wrong",
                            text: error.reason,
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Let's try again!",
                            closeOnConfirm: false
                        });
                        console.log("Something went wrong when creating the user" + error.reason);
                    } else {
                        console.log("Success! Account created. Now verify your email address!");
                        swal("Your account has been created, " + firstName + " !", "Verify your email address using the link we just sent you", "success");
                        FlowRouter.go('/home');
                    }
                });
            }
        }
    });
