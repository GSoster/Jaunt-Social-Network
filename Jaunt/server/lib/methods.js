/**
* Here are methods, they are ways to encapsule some specific functions, usually
* functions that work with collections (database).
*/

Meteor.methods({
  followUser : function(friendId){
    Friendships.follow(friendId);//collection
  },
  unfollowUser : function(friendId){
    Friendships.unfollow(friendId);
  },
  profileUpdate : function(name, about){
    Meteor.users.update({
        //_id: Meteor.user()._id
        _id: this.userId
    }, {
        $set: {
            "profile.firstName": name,
            "profile.about": about
        }
    });
  },
  publishPost : function(message, name){
    Posts.publish(message, name);
  },
  addAchievement : function(achievement){
    console.log(achievement);
    var achievements = Meteor.users.find({_id : this.userId}).achievements || [];
    console.log("user achievements: ");
    console.log(achievements);
    achievements.push(achievement);
    console.log("now with achieve");
    console.log(achievements);
    Meteor.users.update({_id: this.userId}, {$set:{
      achievements : achievements
    }});
  },
});
