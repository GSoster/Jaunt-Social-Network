Template.user.helpers({
  postsCount : function(){
    return Posts.postsCountFromUser(Meteor.userId());
  },  
});


Template.userProfileAchievements.helpers({
  achievementsUnlocked : function(){
    return [{src: '/resources/achievementsImages/achievement_firstPost.png', alt : 1},{src: '/resources/achievementsImages/achievement_firstPost.png', alt : 2}];
  },
});
