Template.user.helpers({
  postsCount : function(){
    return Posts.postsCountFromUser(Meteor.userId());
  },
  totalPoints : function(){
    var points =  Points.listPointsFromUser(Meteor.userId());
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    return totalPoints;
  },
  commentPoints : function(){
    var points =  Points.listPointsFromUser(Meteor.userId());
    commentPoints = 0;
    points.map(function(p){
      if(p.type === "comment"){
          commentPoints+= p.points;
      }
    });
    return commentPoints;
  },
  postPoints : function(){
    var points =  Points.listPointsFromUser(Meteor.userId());
    postPoints = 0;
    points.map(function(p){
      if(p.type === "post"){
          postPoints+= p.points;
      }
    });
    return postPoints;
  },
});


Template.userProfileAchievements.helpers({
  achievementsUnlocked : function(){
    return Achievements.listAchievementsFromUser(Meteor.userId());
  },
  achievementsCount : function(){
    return Achievements.achievementsCountFromUser(Meteor.userId());
  }
});
