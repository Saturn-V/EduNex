Template.posts.helpers({
	getComments : function(){
		var currentPost = this._id;
		var relevantComments = Comments.find({postID: currentPost}, {sort: {postedAt: -1}}).fetch();
            return relevantComments;
             // var currentCourse = this._id;
             // var findCurrentPost = Questions.find({currentCourse: currentCourse}).fetch;
             // var currentPost = findCurrentPost.
             // return comments;
      },

                  isUsers : function(){
            var currentUser = Meteor.userId();

            if (currentUser === this.postedBy) {
                  return true;
            } else {
                  return false;
            }
      }
})

Template.posts.events({

	 'click #removePost' : function(event) {
            Questions.remove(this._id);
      },

      'click #removeComment' : function(event) {
          Comments.remove(this._id);
      },

      'click #addComment': function(event) {

            event.preventDefault();

            var comment = $('#comment').val();
            var currentPost = this._id;
            Session.set('currentPost', currentPost);

            Comments.insert({
                  comment: comment,
                  postedAt: new Date(),
                  postedBy: Meteor.userId(),
                  postID: currentPost
            })
      },

      'click #addNewCommentButton' : function(event) {
        $('#addNewComment').openModal();
      }
})

Template.courseDetails.onRendered(function(){

      $('input#input_text, textarea#textarea1').characterCounter();
      $('select').material_select();
      $('.modal-trigger').leanModal();
})