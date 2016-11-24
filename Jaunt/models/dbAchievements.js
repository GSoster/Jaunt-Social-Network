Achievements = new Meteor.Collection('achievements');


/**
 * Adds a new achievement to the user.
 */
Achievements.addAchievement = function (achievement, userId) {
    this.insert({
      userId: userId,
      date: new Date(),
      achievementId: achievement.achievementId,
      title: achievement.title,
      type: achievement.type,
      description : achievement.description,
      image: achievement.image,
      conditionValue: achievement.conditionValue,
      achieved: true
    });

    var userDoc = Meteor.users.findOne({_id: userId});
    var achievementsDoc = userDoc.achievements;
    achievementsDoc.push({
      userId: userId,
      date: new Date(),
      achievementId: achievement.achievementId,
      title: achievement.title,
      type: achievement.type,
      description : achievement.description,
      image: achievement.image,
      conditionValue: achievement.conditionValue,
      achieved: true
    });
    Meteor.users.update(userId, {$set: {"achievements": achievementsDoc}});
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
