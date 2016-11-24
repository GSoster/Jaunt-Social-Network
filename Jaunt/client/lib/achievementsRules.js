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
}];
jauntAchievementsRules.commentAchievements = [{
    achievementId: 8,
    title: 'First Comment',
    type: 'comment',
    description: 'Congratulations! You have commented for the first time!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 1,
    achieved: false
}, {
    achievementId: 9,
    title: 'Five Comments',
    type: 'comment',
    description: 'Congratulations! You have commented 5 times!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 5,
    achieved: false
}, {
    achievementId: 10,
    title: 'Ten Comments',
    type: 'comment',
    description: 'Congratulations! You have commented 10 times!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 10,
    achieved: false
}, {
    achievementId: 11,
    title: 'Twenty Five Comments',
    type: 'comment',
    description: 'Congratulations! You have commented 25 times!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 25,
    achieved: false
}, {
    achievementId: 12,
    title: 'Fifty Comments',
    type: 'comment',
    description: 'Congratulations! You have commented 50 times!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 50,
    achieved: false
}, {
    achievementId: 13,
    title: 'One Hundred Comments',
    type: 'comment',
    description: 'Congratulations! You have commented 100 times!',
    image: '/resources/achievementsImages/achievement_firstComment.png',
    conditionValue: 100,
    achieved: false
}];


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



/**
 * Verifies if the number of posts from an user is enough to unlock an achievement.
 * if it is, then checks if it wasn't achieved before. Then achieves it.
 */
jauntAchievementsRules.checkAndUnlockPostAchievementByCondition = function(userId) {
    var postsCount = Posts.postsCountFromUser(userId);
    for (var i = 0; i < jauntAchievementsRules.postAchievements.length; i++) {
        var achievement = jauntAchievementsRules.postAchievements[i];
        if (achievement.conditionValue === postsCount) {
            var exists = Achievements.checkAchievementByCondition(userId, achievement.conditionValue);
            if (!exists.hasOwnProperty('achieved') || !exists.achieved) {
                Meteor.call("addAchievement", achievement, Meteor.userId());
                //jauntNotifications.achievementCommentPublishedNotification(achievement.conditionValue + ' Posts published!');
                jauntNotifications.achievementPostPublishedNotification(achievement.conditionValue + ' Post published!');
            }
        }
    }
};



jauntAchievementsRules.checkAndUnlockCommentAchievementByCondition = function(userId) {
    var commentsCount = 1; //need to refactor
    console.log("total:");
    //console.log(Posts.commentsCountFromUser(userId));
    console.log('t');
    for (var i = 0; i < jauntAchievementsRules.commentAchievements.length; i++) {
        var achievement = jauntAchievementsRules.commentAchievements[i];
        if (achievement.conditionValue === commentsCount) {
            var exists = Achievements.checkAchievementByCondition(userId, achievement.conditionValue);
            if (!exists.hasOwnProperty('achieved') || !exists.achieved) {
                Meteor.call("addAchievement", achievement, Meteor.userId());
                //jauntNotifications.achievementPostPublishedNotification(achievement.conditionValue + ' Post published!');//old, it seems that it was in the place of comments
                jauntNotifications.achievementCommentPublishedNotification(achievement.conditionValue + ' Comment published!');
            }
        }
    }
};
