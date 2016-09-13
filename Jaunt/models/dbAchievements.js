Achievements = new Meteor.Collection('achievements');


/**
 * Adds a new achievement to the user.
 */
Achievements.addAchievement = function (achievement, userId) {
    this.insert({
      userId: userId,
      date: new Date(),
      title: achievement.title,
      description : achievement.description,
      image: achievement.image
    });
};


Achievements.listAchievementsFromUser = function(userId){
  return this.find({userId : userId});
};

Achievements.achievementsCountFromUser = function (userId){
    return this.find({userId : userId}).count();
};

/**
* returns if an achievement exists for a specific user and condition.
*/
Achievements.checkAchievementByCondition = function (userId, condition){
  var result = this.find({userId : userId, "conditionValue": condition});
  return result;
};
