jauntAchievementsRules = {};

jauntAchievementsRules.postAchievements = [
  {
    achievementId: 1,
    title: 'First Post',
    type: 'post',
    description: 'Congratulations for your first post!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 1,
    achieved: false
  },
  {
    achievementId: 2,
    title: 'Five Posts',
    type: 'post',
    description: 'Congratulations! You have posted 5 times already!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 5,
    achieved: false
  },
  {
    achievementId: 3,
    title: 'Tens Posts',
    type: 'post',
    description: 'Congratulations! You have posted 10 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 10,
    achieved: false
  },
  {
    achievementId: 4,
    title: 'Fifteen Posts',
    type: 'post',
    description: 'Congratulations! You have posted 15 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 15,
    achieved: false
  },
  {
    achievementId: 5,
    title: 'Twenty Five Posts',
    type: 'post',
    description: 'Congratulations! You have posted 25 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 15,
    achieved: false
  },
  {
    achievementId: 6,
    title: 'Fifteen Posts',
    type: 'post',
    description: 'Congratulations! You have posted 15 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 50,
    achieved: false
  },
];

/**
* This method should be called after a new post was inserted on Posts collection.
*/
jauntAchievementsRules.verifyPostShouldUnlockAchievement = function(userId){
  //get number of posts
  var postsCount = Posts.postsCountFromUser(userId);
  jauntAchievementsRules.postAchievements.map(function (achievement) {
    console.log(achievement);
  });
  return false;
  //verify if it is equals to an achievement necessity
  //verifi if user already have that achievement
  //return true/false
};
