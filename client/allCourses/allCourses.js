Template.allCourses.helpers({

      getRelevantCourses: function() {
            var currentDepartment = Router.current().params._id;
            return Courses.find({departmentID: currentDepartment}, {sort : {courseCode : 1}});
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
