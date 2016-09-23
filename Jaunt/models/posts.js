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
* Adds a comment to a post
*/
Posts.commentOnPost = function(comment, postId){
  this.update(
    { _id: postId },
    { $push: { comments: comment } }
  );
};


/**
* Returns posts from an array of Ids.
*/
Posts.listFromManyIds = function (userIds) {
  return this.find({userId : {'$in' : userIds}},
    {sort: {time: -1, name: 1}}
  );
};

/**
 * Lists the 100 lastest posts.
 * return {array} list of the latest 100 posts from any user.
 */
Posts.listGlobal = function () {
    return this.find({}, {
        sort: {
            date: -1
        }, limit : 100
    });
};

/**
* Gets the number of posts made by the user.
*/
Posts.postsCountFromUser = function (userId) {
  return this.find({userId : userId}).count();
};

/**
* Lists all the comments in posts from an user
*/
Posts.commentsFromUser = function (userId) {
  return this.find({'comments': {$exists: true}, 'userId': userId});
};

/**
* Gets the number of comments made in comments by the user.
* right now it is wrong!! it is returning the number of posts, not comments!!
*/
Posts.commentsCountFromUser = function (userId) {
  return this.find({'comments': {$exists: true}, 'userId': userId}).count();
};
