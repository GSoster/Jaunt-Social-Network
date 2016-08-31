Template.user.helpers({
  postsCount : function(){
    return Posts.postsCountFromUser(Meteor.userId());
  },
  totalPoints : function(){
    var points =  Points.listPointsFromUser(Meteor.userId());
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    return totalPoints;
  }
});


Template.userProfileAchievements.helpers({
  achievementsUnlocked : function(){
    return Achievements.listAchievementsFromUser(Meteor.userId());
  },
  achievementsCount : function(){
    return Achievements.achievementsCountFromUser(Meteor.userId());
  }
});
