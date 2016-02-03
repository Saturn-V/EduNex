Template.posts.helpers({
  getComments : function() {
	   var currentPost = this._id;

      Meteor.call("getComments", currentPost)
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

            Meteor.call("addComment", comment, currentPost);
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