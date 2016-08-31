Template.CreateProfile.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();


})

Template.CreateProfile.helpers({
    name: function() {
        return Meteor.user().profile.FirstName + " " + Meteor.user().profile.LastName;
    },

    bio: function() {
        return Meteor.user().profile.bio;
    },

    email: function() {
        return Meteor.user().emails[0].address;
    }
})
