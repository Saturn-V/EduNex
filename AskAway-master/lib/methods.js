Meteor.methods ({

	//Gets all Questions from Questions Collection in order
	getPosts: function() {
        	return Questions.find({}, {sort: {postedAt: -1}});
    	},

      removePost: function(currentPost) {
            Questions.remove(currentPost);
      },

      addPostGeneral: function(title, description, postID) {
            Questions.insert({
                  title: title, 
                  description: description, 
                  postedAt: new Date(), 
                  postedBy: Meteor.userId(), 
                  postID: postID, 
                  department: true
            })
      },

      addPostSpecific: function(title, description, currentCourse, curentDepartment) {
            Questions.insert({
                  title: title, 
                  description: description, 
                  postedAt: new Date(), 
                  postedBy: Meteor.userId(), 
                  currentCourse: currentCourse,
                  curentDepartment: curentDepartment
            });
      },

    	//Gets all departments from Departments Collection
    	getDepartments : function(){
      	return Departments.find({}, {sort : {department : -1}});  
    	},

    	//Gets current Department
    	relevantDepartment: function(currentDepartmentID) {
        var curentDepartment = Departments.findOne({ _id: currentDepartmentID});
        return curentDepartment;
      },

    	//Gets relevant courses for department
    	getRelevantCourses: function(curentDepartment) {
        	var currentDepartment = Router.current().params._id;
        	return Courses.find({departmentID: currentDepartment}, {sort : {courseCode : 1}});
    	},

      //Gets relevant Course
      relevantCourse: function(currentCourseID) {
            var getCourse = Courses.findOne({ _id: currentCourseID });
            return getCourse;
      },

    	//Gets Relevant Questions
      getRelevantPosts : function(currentCourse){
            var questions = Questions.find({currentCourse: currentCourse}, {sort: {postedAt: -1}}).fetch();
            return questions;
      },

      //Gets relevant Comments for posts
      getComments : function(currentPost){
		var relevantComments = Comments.find({postID: currentPost}, {sort: {postedAt: -1}}).fetch();
            return relevantComments;
      },

      addComments: function(comment, currentPost) {
            Comments.insert({
                  comment: comment,
                  postedAt: new Date(),
                  postedBy: Meteor.userId(),
                  postID: currentPost
            });
      },

      removeComment: function(currentPost) {
            Comments.remove(currentPost);
      }
}); //Ending Bracket for Meteor.methods