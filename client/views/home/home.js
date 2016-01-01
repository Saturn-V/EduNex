Template.home.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();


})

Template.home.events({
    
    
})

Template.home.helpers({
    getQuestions: function() {
        return Questions.find({});
    },
    
    title: function() {
        return "title";
    }, 
    
    description: function() {
        return "Description";
    },
    
    getComments: function() {
        return Comments.find({ postID: this._id });
    }, 
    
    commentTitle: function() {
        return "commentTitle";
    },
    
    commentDescription: function() {
        return "comment Description";
    }
    
    
})