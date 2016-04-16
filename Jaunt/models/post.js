Post = new Meteor.Collection('posts');


/**
 * Publishes a post. AKA inserts a post in the database.
 * @param {String} message - the message to be saved
 */
Post.publish = function (message) {
    this.insert({
        message: message,
        date: new Date(),
        userId: Meteor.userId()
    });

};

/**
 * Lists all the posts from an user
 * @param {int} userId 
 */
Post.list = function (userId) {
    return this.find({
        userId: userId
    }, {
        sort: {
            date: -1
        }
    });
};

Post.listGlobal = function () {

}