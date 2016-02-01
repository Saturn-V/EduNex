Template.enroll.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
      $("#sidenav-overlay").remove();
      // $(document)
      // .ready(function() {
      //
      //     // fix menu when passed
      //     $('#slide-out')
      //     .visibility({
      //         once: false,
      //         removeCover: function() {
      //             $('body').css({});
      //         }
      //     });
      // });


});



Template.enroll.events({
      'click #sign_up_submit' : function(event, template){
            event.preventDefault();

            //Check to confirm Button click
            console.log("Submit button pressed");

            var firstName = $("#first_name").val();
            var lastName = $("#last_name").val();
            var password = $("#usersPassword").val();
            var email = $("#my_email").val();
            var association = $(".association a.active").text();

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
                  Accounts.createUser({
                        email: email,
                        password: password
                  }, function (error) {
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
                              console.log("Something went wrong when creating the user" + error.reason);
                        } else {
                              console.log("Success! Account created. Now verify your email address!");
                              swal("Your account has been created!", "Verify your email address using the link we just sent you", "success");
                              Router.go('/home');
                        }
                  });
            }
      }
});