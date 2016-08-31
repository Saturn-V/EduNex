Template.Departments.events({
});


Template.Departments.helpers({
	departments: ()=> {
      	return Departments.find({});
    }
});

 Template.Departments.onRendered(function(){
    	$('.button-collapse').sideNav();
    	$('.collapsible').collapsible();
    	$('input#input_text, textarea#textarea1').characterCounter();
    	$('ul.tabs').tabs();
   	$('select').material_select();
   	$("#sidenav-overlay").remove();
});
