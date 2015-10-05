//initialize Parse
 Parse.initialize("cVPrk4Mea6My6Jc0HJQwcDKqCxAzAcKLmL1iukqQ","bEIUTjLL3VHn3ceYeIL1Nevmdo0kTKjbD1FiCqzx");

//Materialize CSS stuff
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//PARSE STUFF
// Generate a User Account
var user = new Parse.User();
user.set("username", document.getElementById("my_id").value);
user.set("password", document.getElementById("my_pass").value);
user.set("email", document.getElementById("my_email").value);

// other fields can be set just like with Parse.Object
user.set("phone", document.getElementById("my_phone").value);
user.set("firstName", document.getElementById("my_first_name").value);
user.set("lastName", document.getElementById("my_last_name").value);

user.signUp(null, {
      success: function(user) {
             // Hooray! Let them use the app now.
             console.log("So far so good!");
       },
       error: function(user, error) {
             // Show the error message somewhere and let the user try again.
             alert("Error: " + error.code + " " + error.message);
       }
 });