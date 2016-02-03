Template.allCourses.helpers({

      relevantCourses: function() {
            var currentDepartment = Router.current().params._id;

            Meteor.call("relevantCourses", currentDepartment);
      }
})

Template.allCourses.onRendered(function() {
      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('ul.tabs').tabs();
      $('select').material_select();
})



Template.allCourses.events({
      'click #postQuestion': function(event) {

            var title = $('#title').val();
            var description = $("#description").val();
            var postID = Router.current().params._id;

            Meteor.call("addPostGeneral", title, description, postID);
      }
})
