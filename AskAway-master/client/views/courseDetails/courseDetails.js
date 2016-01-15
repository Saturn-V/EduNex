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
      }, 

      'click #create-comment': function(event) {
            event.preventDefault();

            var comment = $('#comment').val();
            var currentQuestion = this._id;

            Comments.insert({
                  comment: comment,
                  postedAt: new Date(),
                  postedBy: Meteor.userId(),
                  questionID: currentQuestion
            })
      }
})


Template.courseDetails.helpers({

      courses : function() {
            var currentCourse = Router.current().params._id;
            return Courses.findOne({ _id: currentCourse });
      },

      getQuestions : function(){
            var questions = Questions.find({currentCourse: Router.current().params._id}, {sort: {postedAt: -1}}).fetch();
            return questions;
      }
    
      // currentUser: function() {
      //       return Meteor.user() != null;
      // }
})

Template.courseDetails.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.modal-trigger').leanModal();
      $('#modal-close').closeModal();
})