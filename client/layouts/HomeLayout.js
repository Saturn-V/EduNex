
Template.HomeLayout.onCreated(function() {
    var self = this;
    self.autorun(()=> {
        self.subscribe('posts');
    });
});
Template.HomeLayout.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();
    $("#sidenav-overlay").remove();
});

Template.HomeLayout.events({
});

Template.HomeLayout.helpers({
	post: function() {
        var currentUser = Meteor.userId();
        return Posts.find({postedBy: currentUser}, {sort: {postedAt: -1}});
    }
});
