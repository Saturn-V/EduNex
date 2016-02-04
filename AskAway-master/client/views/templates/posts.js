Template.posts.helpers({
  getComments : function(){
    var comments = Comments.find({postID: this._id}, {sort: {postedAt: -1}}).fetch();
            return comments;
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
          var currentPost = this._id;
          
          Meteor.call("removePost", currentPost);
      },

      'click #removeComment' : function(event) {
          var currentPost = this._id;

          Meteor.call("removeComment", currentPost);
      },

      'click #addComment': function(event) {
            event.preventDefault();

            var comment = $('#comment').val();
            var currentPost = this._id;

            console.log(currentPost);

            Meteor.call("addComment", comment, currentPost);
      },

      'click #addNewCommentButton' : function(event) {
        $('.modal-trigger').leanModal();
      }
})

Template.courseDetails.onRendered(function(){

      $('input#input_text, textarea#textarea1').characterCounter();
      $('select').material_select();
      $('.modal-trigger').leanModal();
})