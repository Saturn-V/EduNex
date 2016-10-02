Departments = new Mongo.Collection('departments');

/* Remove me after development so users can't insert docs*/
Departments.allow({
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
