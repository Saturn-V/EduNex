Courses = new Mongo.Collection("courses");

/* Remove me after development so users can't insert docs*/
Courses.allow({
    insert: function (userId, doc) {
           return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
           return true;
    },
    remove: function (userId, doc) {
           return true;
    }
});
