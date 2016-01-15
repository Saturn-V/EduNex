Template.home.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal-trigger').leanModal();
    $("#sidenav-overlay").remove();


})

Template.home.events({
    // 'click #comment-submit' : function(event) {
    //     event.preventDefault();

    // }

    'click #comment-delete' : function(event) {
        Comments.remove(this._id);
    }
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
        return Comments.find({});
    }, 
    
    commentTitle: function() {
        return "commentTitle";
    },
    
    commentDescription: function() {
        return "comment Description";
    }
    
    
})