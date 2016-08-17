Posts = new Meteor.Collection('posts');


/**
 * Publishes a post. AKA inserts a post in the database.
 * @param {String} message - the message to be saved
 */
Posts.publish = function (message, name) {
    this.insert({
        message: message,
        date: new Date(),
        userId: Meteor.userId(),
        name : name,
    });

};

/**
 * Lists all the posts from an user
 * @param {int} userId
 */
Posts.list = function (userId) {
    return this.find({
        userId: userId
    }, {
        sort: {
            date: -1
        }
    });
};

/**
* Returns posts from an array of Ids.
*/
Post.listFromManyIds = function (userIds) {
  return this.find({userId : {'$in' : userIds}},
    {sort: {time: -1, name: 1}}
  );
};

/**
 * Lists all the lastest posts
 */
Posts.listGlobal = function () {
    return this.find({}, {
        sort: {
            date: -1
        }
    });
};
