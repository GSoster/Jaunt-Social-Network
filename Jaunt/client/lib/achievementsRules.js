jauntAchievementsRules = {};

/*jauntAchievementsRules.postConditions = [
  {
    achievementName: 'First Post',
    type: 'post',
    condition: 'equals',
    conditionValue: 1
  },
];
*/

/**
* This method should be called after a new post was inserted on Posts collection.
*/
jauntAchievementsRules.verifyPostShouldUnlockAchievement = function(userId){
  //get number of posts
  var count = Posts.postsCountFromUser(userId);
  return count === 44;
  //verify if it is equals to an achievement necessity
  //return true/false
};
