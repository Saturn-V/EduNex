/* Publish Collections (/collections) to handle data */
Meteor.publish('departments', function() {
    return Departments.find({})
});

Meteor.publish('courses', function() {
    return Courses.find({})
});

Meteor.publish('posts', function() {
    return Posts.find({})
});

Meteor.publish('comments', function() {
    return Comments.find({})
});
