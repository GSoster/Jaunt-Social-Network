Achievements = new Meteor.Collection('achievements');


/**
 * Adds a new achievement to the user.
 */
Achievements.addAchievement = function (achievement, userId) {
    this.insert({
        userId: userId,
        date: new Date(),
        achievement : achievement,
    });
};
