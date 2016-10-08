Template.Course.onCreated(function() {
    var self = this;
    self.autorun(()=> {
        var id = FlowRouter.getParam('_id')
        self.subscribe('courses', id);
        self.subscribe('departments', id);
    });
});

Template.Course.helpers({
    course: ()=> {
        var id = FlowRouter.getParam('_id');
        return Courses.findOne({_id: id});
    },
    department: ()=> {
        var id = FlowRouter.getParam('_id');
        return Departments.findOne({
            courses_id: {
                $elemMatch: {
                    id: id
                }
            }
        });
    }
      //
    //   getPosts : function(){
    //         var relevantPosts = Questions.find({currentCourse: Router.current().params._id}, {sort: {postedAt: -1}}).fetch();
    //         return relevantPosts;
    //   }
});

Template.Course.events({

      'click #createPost': function(event) {

          event.preventDefault();

            var title = $('#title').val();
            var description = $("#description").val();
            var postSource_id = FlowRouter.getParam('_id');

            function checkTitleIsValid(title) {
                if (title.length < 30) {
                    return true;
                } else {
                    return false;
                }
            }

            function checkDescriptionIsValid(description) {
                if (description.length > 30) {
                    return true;
                } else {
                    return false;
                }
            }

            var titleIsValid = checkTitleIsValid(title);
            var descriptionIsValid = checkDescriptionIsValid(description);

            if (!titleIsValid || !descriptionIsValid) {
                if (!titleIsValid) {
                    swal("Your title is too long! Title must be a maximum of 30 Characters.", "warning");
                }
                if (!descriptionIsValid) {
                    swal("Your description is not long enough! description must be a minimum of 30 Characters.", "warning");
                }
            } else {
                Meteor.call("addCoursePost", title, description, postSource_id, function (error, result) {
                    if (error) {
                        swal({
                            title: "Something appears wrong",
                            text: error.reason,
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Let's try again!",
                            closeOnConfirm: false
                        });
                        console.log("Something went wrong when generating a post! " + error.reason);
                    } else {
                        console.log("Success! Post generated!");
                        swal("Posted!", "Post Successful!", "success");
                        FlowRouter.go('/home');
                    }
                });
            }
      }
});

Template.Course.onRendered(function(){
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
});
