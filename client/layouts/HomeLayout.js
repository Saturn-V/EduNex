Template.HomeLayout.onCreated(function() {
    var self = this;
    self.autorun(()=> {
        self.subscribe('posts');
    });
});
Template.HomeLayout.onRendered(function(){
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
});

Template.HomeLayout.events({
});

Template.HomeLayout.helpers({
	post: function() {
        var currentUser = Meteor.userId();
        return Posts.find({postedBy: currentUser}, {sort: {postedAt: -1}});
    }
});
