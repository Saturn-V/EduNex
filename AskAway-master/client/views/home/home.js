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

})

Template.home.helpers({
    getQuestions: function() {
        return Questions.find({}, {sort: {postedAt: -1}});
    }
})