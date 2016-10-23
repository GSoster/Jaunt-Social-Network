Template.user.helpers({
  postsCount : function(){
    return Posts.postsCountFromUser(this.user._id);
  },
  totalPoints : function(){
    var points =  Points.listPointsFromUser(this.user._id);
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    return totalPoints;
  },
  commentPoints : function(){
    //var points =  Points.listPointsFromUser(Meteor.userId());
    console.log("user sendo visto: ", this.user._id);//this contains data by the router
    var points =  Points.fetchPointsFromUser(this.user._id);
    commentPoints = 0;
    points.map(function(p){
      if(p.type === "comment"){
          commentPoints+= p.points;
      }
    });
    return commentPoints;
  },
  postPoints : function(){
    var points =  Points.listPointsFromUser(this.user._id);
    postPoints = 0;
    points.map(function(p){
      if(p.type === "post"){
          postPoints+= p.points;
      }
    });
    return postPoints;
  },
  pointsFetched : function(){
    var points =  Points.fetchPointsFromUser(this.user._id);
    console.log("##fetch##");
    console.log(points);
    console.log("##fetch##");
    return 0;
  }
});


Template.userProfileAchievements.helpers({
  achievementsUnlocked : function(){
    console.log("achievementsProfile", this.user._id);
    return Achievements.listAchievementsFromUser(this.user._id);
  },
  achievementsCount : function(){
    return Achievements.achievementsCountFromUser(this.user._id);
  }
});
