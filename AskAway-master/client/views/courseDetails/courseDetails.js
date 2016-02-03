Template.courseDetails.events({
      'click #createPost': function(event) {
            event.preventDefault();

            var title = $('#title').val();
            var description = $("#description").val();
            var curentDepartment = this.departmentID;
            var currentCourse = Router.current().params._id;

            Meteor.call("addPostSpecific", title, description, currentDepartment);

            title = "";
            description = "";
      }
})


Template.courseDetails.helpers({

      relevantDepartment: function() {
            var currentDepartmentID = this.departmentID;

            Meteor.call("relevantDepartment", currentDepartmentID);
      },

      getRelevantPosts: function() {

            var currentCourse = this._id;
            
            Meteor.call("getRelevantPosts", currentCourse);
      }
})

Template.courseDetails.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.modal-trigger').leanModal();
})