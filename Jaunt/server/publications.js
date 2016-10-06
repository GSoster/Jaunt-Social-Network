/**
* This file has all the publishers necessary by the client.
*/


function uniquefyArray(arrayToCheck) {
    var unique = [];
    for (var i = 0; i < arrayToCheck.length; i++) {
        var current = arrayToCheck[i];
        if (unique.indexOf(current) < 0) unique.push(current);
    }
    return unique;
}


Meteor.autorun(function(){
  Meteor.publish("latestGlobalPosts", function(){
    return Posts.listGlobal();
  });

   Meteor.publish("posts", function (_id) {
     var timelineIds = Friendships.timelineIds(_id);
     return Posts.listFromManyIds(timelineIds);
   });

   Meteor.publish("postsFromUser", function(_id){
     return Posts.list(_id);
   });

   Meteor.publish("isFollowing", function(_id){
     return Friendships.isFollowing(_id);
   });

   Meteor.publish("user", function(_id){
     return Meteor.users.find({_id : _id});
   });

   Meteor.publish("friendship", function(_id){
      return Friendships.followersAndFollowings(_id);
   });

   Meteor.publish("achievements", function(_id){
      return Achievements.listAchievementsFromUser(_id);
   });

   Meteor.publish("points", function(_id){
      return Points.listPointsFromUser(_id);
   });
   /**
   * uses the user Id to discover users related to him and
   * sends all their information back.
   */
   Meteor.publish("friends", function(_id){
     var ids = Friendships.followersAndFollowings(_id);
     var friendsIds = new Array();
     ids.map(function(friend){//maps if the user has being added by the friend or added the friend.
       friendsIds.push( (friend.userId === Meteor.userId()) ? friend.friendId : friend.userId);
     });
     uniqueFriendsIds = uniquefyArray(friendsIds);
     var usersToReturn = Meteor.users.find( {_id: { $in: uniqueFriendsIds } } );
     return usersToReturn;
   });

   Meteor.publish("users", function(_id){
     return Meteor.users.find({});
   });
});
