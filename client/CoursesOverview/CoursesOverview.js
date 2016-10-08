Template.CoursesOverview.onCreated(function() {
    var self = this;
    self.autorun(()=> {
        self.subscribe('courses');
        self.subscribe('departments');
    });
});

Template.CoursesOverview.helpers({
    course: ()=> {
        var id = FlowRouter.getParam('_id');
        return Courses.find({department_id: id});
    },
    department: ()=> {
        var id = FlowRouter.getParam('_id');
        return Departments.findOne({_id: id});
    }
})

Template.CoursesOverview.onRendered(function() {
      $('ul.tabs').tabs();
      $('select').material_select();
})



Template.CoursesOverview.events({
      'click #post_question': function(event) {

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
                Meteor.call("addDepartmentPost", title, description, postSource_id, function (error, result) {
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
