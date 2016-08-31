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
  addAchievement : function(achievement, userId){
    Achievements.addAchievement(achievement, userId);
  },

  increasePontuation : function (pointsToIncrease, type){
    var pointsToUpdate = Meteor.users.find({_id : this.userId}).points || {"post" : 0, "comment" : 0};
    console.log("points tinha:");
    console.log(pointsToUpdate);
    pointsToUpdate[type] += pointsToIncrease;
    Meteor.users.update({_id: this.userId}, {$set:{
      points : pointsToUpdate
    }});
  }
});
