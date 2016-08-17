Friendships = new Meteor.Collection("friendships");
/**
* ## IMPORTANT INFO ##
* Here in collections the logged user ID should be handled as follow:
* Meteor.userId();
* note that this.userId returns null (but it works inside Meteor.Methods).
*/


/**
* creates a new relation between two users.
*/
Friendships.follow = function(friendId){
  this.insert({userId : Meteor.userId(),
    friendId : friendId
  });
};

/**
* removes a relationship between two users.
*/
Friendships.unfollow = function(friendId){
  this.remove({
    userId : Meteor.userId(),
      friendId : friendId
  });
};

/**
* Verifies if two users (currentUser and possible friend) have a relationship.
returns the relationship if it exists or undefined otherwise.
*/
Friendships.isFollowing = function(friendId){
  return this.findOne({userId : Meteor.userId(),
    friendId : friendId});
};

/**
* How many people the logged in user is following.
*/
Friendships.followings = function(userId){
  return this.find({userId : userId}).count();
};
/**
* How many people are following the actual logged user.
*/
Friendships.followers = function(friendId){
  return this.find({friendId : friendId}).count();
};

/**
* Returns an array of user ids that have friendship with the
* param user ID and the param user Id itself.
*/
Friendships.timelineIds = function(userId) {
  var documents = this.find({userId : userId});
  var timelineIds = documents.map(function(document){
    return document.friendId;
  });
  timelineIds.push(userId);
  return timelineIds;
};
