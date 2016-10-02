Template.SideNavIn.onRendered(function(){

      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
});


Template.SideNavIn.events({
	'click #log-out' : function (event) {
		Meteor.logout();
		FlowRouter.go('/');
	}
});
