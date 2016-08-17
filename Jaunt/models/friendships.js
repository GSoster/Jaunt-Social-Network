Friendships = new Meteor.Collection("friendships");

/**
* creates a new relation between two users.
*/
Friendships.follow = function(friendId){
  //this.insert({userId : Meteor.user()._id,
  this.insert({userId : Meteor.userId(),
    friendId : friendId
  });
};

/**
* removes a relationship between two users.
*/
Friendships.unfollow = function(friendId){
  this.remove({
    //userId : Meteor.user()._id,
    userId : Meteor.userId(),
      friendId : friendId
  });
};

/**
* Verifies if two users (currentUser and possible friend) have a relationship.
returns the relationship if it exists or undefined otherwise.
*/
Friendships.isFollowing = function(friendId){
  //return this.findOne({userId : Meteor.user()._id,
  return this.findOne({userId : Meteor.userId(),
    friendId : friendId});
};

/**
* How many people the logged in user is following.
*/
Friendships.followings = function(userId){
  console.log("O usuario " + userId + "está seguindo: " + this.find({userId : userId}).count());
  return this.find({userId : userId}).count();
};
/**
* How many people are following the actual logged user.
*/
Friendships.followers = function(friendId){
  return this.find({friendId : friendId}).count();
};
