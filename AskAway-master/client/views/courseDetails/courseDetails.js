Template.courseDetails.events({
      'click #createPost': function(event) {
            event.preventDefault();

            var title = $('#title').val();
            var description = $("#description").val();
            var curentDepartment = this.departmentID;

            Questions.insert({
                  title: title, 
                  description: description, 
                  postedAt: new Date(), 
                  postedBy: Meteor.userId(), 
                  currentCourse: Router.current().params._id,
                  curentDepartment: curentDepartment
            })

            title = "";
            description = "";
      }
})


Template.courseDetails.helpers({

      departments: function() {
        var currentDepartmentID = this.departmentID;
        var curentDepartment = Departments.findOne({ _id: currentDepartmentID});
        return curentDepartment;
      },

      getQuestions : function(){
            var questions = Questions.find({currentCourse: this._id}, {sort: {postedAt: -1}}).fetch();
            return questions;
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