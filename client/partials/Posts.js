Template.Posts.onCreated(function() {
    var self = this;
    var postSourceId = this._id
    self.autorun(()=> {
        self.subscribe('posts');
        self.subscribe('comments', postSourceId);
    });
});

Template.Posts.helpers({
    firstName: () => {
        return Meteor.user().profile.name;
    },

    postIsUsers : function(){
          var currentUser = Meteor.userId();

          if (currentUser === this.postedBy) {
                return true;
          } else {
                return false;
          }
    }
    //   getComments : function(){
    //         var comments = Comments.find({postID: this._id}, {sort: {postedAt: -1}}).fetch();
    //         return comments;
    //   },
});

Template.Posts.events({

	'click #removePost' : function(event) {
            var currentPost = this._id;

            Meteor.call("removePost", currentPost);
      },
    //   'click #removeComment' : function(event) {
    //         var currentPost = this._id;
      //
    //         Meteor.call("removeComment", currentPost);
    //   },
      //

    'click #add_comment': function(event) {

        event.preventDefault();

        var comment = $('#comment').val();
        var post_source_id = this._id;

         Meteor.call("addComment", comment, post_source_id, function (error, result) {
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
                 swal("Posted!", "Comment Successful!", "success");
                 FlowRouter.go('/home');
             }
         });
     }
});

Template.Posts.onRendered(function(){
    this.$('.modal-trigger').leanModal();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
});
