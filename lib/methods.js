Meteor.methods ({

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

      addPostSpecific: function(title, description, currentCourse, currentDepartment) {
            Questions.insert({
                  title: title, 
                  description: description, 
                  postedAt: new Date(), 
                  postedBy: Meteor.userId(), 
                  currentCourse: currentCourse,
                  curentDepartment: currentDepartment
            });
      },

      addComment: function(comment, currentPost) {
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