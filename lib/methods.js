Meteor.methods ({

    addDepartmentPost: function(title, description, postSource_id) {
          Posts.insert({
                postTitle: title,
                postDescription: description,
                postedAt: new Date(),
                postedBy: Meteor.userId(),
                postSource_id: postSource_id
          })
    }

    // This is an in depth description of the issue. Let's be sure you can se it and that it is over 50 characters because if it isn't we are fucked.

    //   removePost: function(currentPost) {
    //         Questions.remove(currentPost);
    //   },
      //
    //   addPostGeneral: function(title, description, postID) {
    //         Questions.insert({
    //               title: title,
    //               description: description,
    //               postedAt: new Date(),
    //               postedBy: Meteor.userId(),
    //               postID: postID,
    //               department: true
    //         })
    //   },
      //
    //   addPostSpecific: function(title, description, currentCourse, currentDepartment) {
    //         Questions.insert({
    //               title: title,
    //               description: description,
    //               postedAt: new Date(),
    //               postedBy: Meteor.userId(),
    //               currentCourse: currentCourse,
    //               curentDepartment: currentDepartment
    //         });
    //   },
      //
    //   addComment: function(comment, currentPost) {
    //         Comments.insert({
    //               comment: comment,
    //               postedAt: new Date(),
    //               postedBy: Meteor.userId(),
    //               postID: currentPost
    //         });
    //   },
      //
    //   removeComment: function(currentPost) {
    //         Comments.remove(currentPost);
    //   }
}); //Ending Bracket for Meteor.methods
