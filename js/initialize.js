 //initialize Parse
 Parse.initialize("cVPrk4Mea6My6Jc0HJQwcDKqCxAzAcKLmL1iukqQ","bEIUTjLL3VHn3ceYeIL1Nevmdo0kTKjbD1FiCqzx");

 //Materialize CSS stuff
 (function($){
       $(function(){

             $('.button-collapse').sideNav();
             $('.collapsible').collapsible();
             $('input#input_text, textarea#textarea1').characterCounter();
             $('ul.tabs').tabs();
             $('select').material_select();

             // other fields can be set just like with Parse.Object
             //user.set("phone", "650-555-0000");
              
             //parse stuff
             // Generate a User Account
             $("#sign_up_submit").click( function(event) {
                   console.log("You clicked me!");

                   var username = $("#my_id").val();

                   var password = $("#my_password").val();

                   var email = $("#my_email").val();

                   var firstname = $("#first_name").val();

                   var lastname = $("#last_name").val();

                   var user = new Parse.User();

                   event.preventDefault();

                   user.set("username", username);
                   user.set("password", password);
                   user.set("email", email);
                   user.set("firstname", firstname);
                   user.set("lastname", lastname);

                   user.signUp(null, {
                         success: function(user) {
                               // Hooray! Let them use the app now.
                               alert("yay! it worked (created user)");
                               console.log("This works!");
                               var currentUser = Parse.User.current();
                               if (currentUser) {
                                  // do stuff with the user
                                  window.location.href="userSignUpProcess.html";
                               } else {
                                  // show the signup or login page
                                  window.location.href="index.html";
                               }
                         },
                         error: function(user, error) {
                               // Show the error message somewhere and let the user try again.
                               alert("Error: " + error.code + " " + error.message);
                               console.log("Something is wrong...");
                         }
                   });
             });


       }); // end of document ready
})(jQuery); // end of jQuery name space