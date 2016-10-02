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
            var currentDepartment = this.departmentID;
            var currentCourse = Router.current().params._id;

            Meteor.call("addPostSpecific", title, description, currentCourse, currentDepartment);

            title = "";
            description = "";
      }
});

Template.Course.onRendered(function(){

      $('.button-collapse').sideNav();
      $('.collapsible').collapsible();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('ul.tabs').tabs();
      $('select').material_select();
});
