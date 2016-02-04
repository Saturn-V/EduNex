Template.departmentOverview.events({
});


Template.departmentOverview.helpers({
	getDepartments : function(){
		var departments = Departments.find({}, {sort : {department : -1}});
      	return departments;  
    }
});

 Template.departmentOverview.onRendered(function(){
    	$('.button-collapse').sideNav();
    	$('.collapsible').collapsible();
    	$('input#input_text, textarea#textarea1').characterCounter();
    	$('ul.tabs').tabs();
   	$('select').material_select();
   	$("#sidenav-overlay").remove();
});