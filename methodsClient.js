
// Verification call back
// Accounts.onEmailVerificationLink(function(token, done){
//     //Marks verified as true
//     Accounts.verifyEmail(token);
//     Router.go("/home");
// });
//
//
// var doneCallback;
//
// Accounts.onResetPasswordLink(function(token, done) {
//    // send back to /forgotPassword page
//     Router.go("/forgotpassword");
//
//     // Set a new session variable with the reset token from email
//     Session.set('resetPassword', token);
//
//     // store the done callback
//     doneCallback = done;
//     //console.log("onResetPasswordLink, and token is  " + token);
// });
//
//
// //new
// checkEmailIsValid = function (enteredEmail) {
//     enteredEmail = enteredEmail || '';
//     return enteredEmail.length > 1 && enteredEmail.indexOf('@') > -1;
// }
//
// checkPasswordIsValid = function (enteredPassword) {
//     enteredPassword = enteredPassword || '';
//     return enteredPassword.length > 7;
// }
//
//
// //new
// Accounts.config({
//   // send a verification email onCreateUser automatically
//   sendVerificationEmail: true
// });
//
//
// // Accounts.onCreateUser(function(options, user){
// //   if(options.profile) {
//
// //     // Add attributes in the user's profile here
// //     options.profile.UserStatus = "Pending";       // Will become active after confirming billing information
//
// //     // Don't allow user to continue past terms page if they haven't accepted all waivers required on the page
//
// //     // Set the user profile from the aggregated options
// //     user.profile = options.profile;
// //   }
//
// //   user.ModifiedOn = new Date();
//
// //   return user;
// // });
//
// // // Overarching Email template
// // Accounts.emailTemplates.siteName = "AskAway";
// // Accounts.emailTemplates.from = "Support<support@ask-away.org>";
//
//
// // // Verify User Template
// // Accounts.emailTemplates.verifyEmail.from = function(){
// //   return "Support<support@ask-away.org>";
// // }
//
// // Accounts.emailTemplates.verifyEmail.subject = function(){
// //   return "Welcome to AskAway! Please verify your email address.";
// // }
//
// // Accounts.emailTemplates.verifyEmail.html = function(user, url){
// //   // Return the HTML that gets sent to the user to verify their email
// //   return "Hey " + user.profile.FirstName +"! \n\nWe're here to get you verified! Just go to the following link to verify your account. \n \n" + url + "\n\n- Team AskAway";
// // }
//
// // // Reset Password Template
// // Accounts.emailTemplates.resetPassword.from = function(){
// //   return "Support<support@ask-away.org>";
// // }
//
// // Accounts.emailTemplates.resetPassword.subject = function(){
// //   return "Support<support@ask-away.org>";
// // }
//
// // Accounts.emailTemplates.resetPassword.text = function(user, url){
// //   return "Hey " + user.profile.FirstName +"! \n \nWe're here to help! Just go to the following link to reset your password. \n \n" + url + "\n\n- Team AskAway";
// // }
//
// // Allow the app to send emails
// process.env.MAIL_URL = 'smtp://duri.abdurahman@gmail.com:44g6n4sppI-5ivuXkokD1Q@smtp.mandrillapp.com:587/';
// process.env.HTTP_FORWARDED_COUNT = 1;
