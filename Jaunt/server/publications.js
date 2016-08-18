/**
* This file has all the publishers necessary by the client.
*/

Meteor.autorun(function(){  
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
});
