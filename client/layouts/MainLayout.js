// var slideout;

Template.MainLayout.onRendered(function(){

    // $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();

    var template = this;

    // slideout = new Slideout({
    //   'panel': template.$('#panel').get(0),
    //   'menu': template.$('#menu').get(0),
    //   'padding': 256,
    //   'tolerance': 70
    // });

})

Template.MainLayout.events({
    //  'click #menu-button' : function (event) {
     //
    //      console.log("Opened!");
     //
    //          slideout.toggle();
     //
    //  }

})

Template.MainLayout.helpers({


})
