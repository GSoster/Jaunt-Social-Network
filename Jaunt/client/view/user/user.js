Template.user.helpers({
  postsCount : function(){
    return Posts.postsCountFromUser(Meteor.userId());
  },
  /*points : function(){
    var points =  Meteor.users.find({_id : Meteor.userId()}).points;
    console.log(points);
    return points;
  }*/
});


Template.userProfileAchievements.helpers({
  achievementsUnlocked : function(){
    return Achievements.listAchievementsFromUser(Meteor.userId());
  },
  achievementsCount : function(){
    return Achievements.achievementsCountFromUser(Meteor.userId());
  }
});
