Friendships = new Meteor.Collection("friendships");

/**
* creates a new relation between two users.
*/
Friendships.follow = function(friendId){
  this.insert({userId : this.userId,
    friendId : friendId
  });
};

/**
* removes a relationship between two users.
*/
Friendships.unfollow = function(friendId){
  this.remove({
    userId : this.userId,
      friendId : friendId
  });
};

/**
* Verifies if two users (currentUser and possible friend) have a relationship.
returns the relationship if it exists or undefined otherwise.
*/
Friendships.isFollowing = function(friendId){
  return this.findOne({userId : this.userId,
    friendId : friendId});
};

/**
* 
*/
Friendships.followings = function(userId){
  return this.find({userId : userId}).count();
};

Friendships.followers = function(friendId){
  return this.find({friendid : friendid}).count();
};
