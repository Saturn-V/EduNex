Template.SideNavIn.onRendered(function(){
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
});


Template.SideNavIn.events({
	'click #log-out' : function (event) {
		Meteor.logout();
		FlowRouter.go('/');
	}
});
