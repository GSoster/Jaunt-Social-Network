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
  publishPostWithColor : function(message, name, color){
    Posts.publishWithColor(message, name, color);
  },
  commentOnPost : function(comment, postId){
    Posts.commentOnPost(comment, postId);
  },
  challengeUser : function (challenge, challengedUserId, challengedByUserId){
    console.log("------------------------------");
    console.log("received: (challengedUser) "+challengedUserId);
    console.log("received: (challengedByUserId) "+challengedByUserId);
    console.log("received: (challenge) "+challenge);
    console.log("------------------------------");
    var userDoc = Meteor.users.find(challengedUserId);
    var challengesDoc = userDoc.challenges || [];
    challengesDoc.push(challenge);
    Meteor.users.update(challengedUserId, {$set: {"challenges": challengesDoc}});
  },
  addAchievement : function(achievement, userId){
    Achievements.addAchievement(achievement, userId);
  },
  increasePontuation : function (pointsToIncrease, type, userId){
    Points.increasePontuation(pointsToIncrease, type, userId);
    //it will also add the total amount of points directly to the user documents
    var points =  Points.listPointsFromUser(userId);
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    Meteor.users.update(userId, {$set: {"totalPoints": totalPoints}});

    if(type === "comment"){
      var commentPoints = Points.getCommentPointsFromUser(userId);
      var updatedCommentPoints = commentPoints + pointsToIncrease;
      Meteor.users.update(userId, {$set: {"commentPoints": updatedCommentPoints}});
    }
    if(type === "post"){
      var postPoints = Points.getPostPointsFromUser(userId);
      var updatedPostPoints = postPoints + pointsToIncrease;
      Meteor.users.update(userId, {$set: {"postPoints": updatedPostPoints}});
    }
  },
});
