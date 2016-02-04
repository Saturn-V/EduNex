Template.courseDetails.events({
      'click #createPost': function(event) {
            event.preventDefault();

            var title = $('#title').val();
            var description = $("#description").val();
            var curentDepartment = this.departmentID;
            var currentCourse = Router.current().params._id;

            Meteor.call("addPostSpecific", title, description, currentCourse, currentDepartment);

            title = "";
            description = "";
      }
})


Template.courseDetails.helpers({

      relevantDepartment: function() {
            var curentDepartment = Departments.findOne({ _id: Router.current().params._id});
            return curentDepartment;
      },

      getRelevantPosts : function(){
            var relevantPosts = Questions.find({currentCourse: Router.current().params._id}, {sort: {postedAt: -1}}).fetch();
            return relevantPosts;
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