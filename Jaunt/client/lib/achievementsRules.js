jauntAchievementsRules = {};

jauntAchievementsRules.postAchievements = [{
    achievementId: 1,
    title: 'First Post',
    type: 'post',
    description: 'Congratulations for your first post!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 1,
    achieved: false
}, {
    achievementId: 2,
    title: 'Five Posts',
    type: 'post',
    description: 'Congratulations! You have posted 5 times already!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 5,
    achieved: false
}, {
    achievementId: 3,
    title: 'Tens Posts',
    type: 'post',
    description: 'Congratulations! You have posted 10 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 10,
    achieved: false
}, {
    achievementId: 4,
    title: 'Fifteen Posts',
    type: 'post',
    description: 'Congratulations! You have posted 15 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 15,
    achieved: false
}, {
    achievementId: 5,
    title: 'Twenty Five Posts',
    type: 'post',
    description: 'Congratulations! You have posted 25 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 25,
    achieved: false
}, {
    achievementId: 6,
    title: 'Fifteen Posts',
    type: 'post',
    description: 'Congratulations! You have posted 50 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 50,
    achieved: false
}, {
    achievementId: 7,
    title: 'Sixty Posts',
    type: 'post',
    description: 'Congratulations! You have posted 60 times!',
    image: '/resources/achievementsImages/achievement_firstPost.png',
    conditionValue: 60,
    achieved: false
}, ];

/**
 * This method should be called after a new post was inserted on Posts collection.
 */
jauntAchievementsRules.verifyPostShouldUnlockAchievement = function(userId) {
    //get number of posts
    var postsCount = Posts.postsCountFromUser(userId);
    jauntAchievementsRules.postAchievements.map(function(achievement) {
        console.log(achievement);
    });
    return false;
    //verify if it is equals to an achievement necessity
    //verifi if user already have that achievement
    //return true/false
};



jauntAchievementsRules.checkAndUnlockPostAchievementByCondition = function(userId) {
    console.log("Entrando em: checkAndUnlockPostAchievementByCondition");
    var postsCount = Posts.postsCountFromUser(userId);
    var shouldAchieve = false;
    console.log("Quantidade de posts do user: " + postsCount);
    for (var i = 0; i < jauntAchievementsRules.postAchievements.length; i++) {
        var condition = jauntAchievementsRules.postAchievements[i].conditionValue;
        console.log("Conditio: " + condition);
        if (condition === postsCount) {
            //checa se já foi achieved!
            var exists = Achievements.checkAchievementByCondition(userId, condition);
            if (!exists.hasOwnProperty('achieved') || !exists.achieved) {
                console.log("VAMOS LIBERAR!");
                //shouldAchieve = true;
                Meteor.call("addAchievement", jauntAchievementsRules.postAchievements[i], Meteor.userId());
                jauntNotifications.achievementPostPublishedNotification(condition + ' Post published!');
            }

        }
    }
};
