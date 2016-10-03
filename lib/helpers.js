if (Meteor.isClient) {
    //Formats Date and Time for Posts to be presented as relative to current time
    Template.registerHelper('formatPostDate', (date) => {
        if (date) {
            return moment(date).fromNow();
        }
    });
}
