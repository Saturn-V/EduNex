Template.signedInHeader.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();	
});

Template.signedInHeader.events({
	'click #log-out' : function (event) {
		Meteor.logout();
		Router.go('/landing');
	}
});