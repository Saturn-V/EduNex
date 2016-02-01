Template.notSignedInSlideMenu.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
});