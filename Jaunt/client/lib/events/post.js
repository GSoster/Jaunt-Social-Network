Template.post.events({
    "submit form": function(e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        var name = Meteor.user().profile.firstName;
        if (Meteor.user().profile.lastName) {
            name += ' ' + Meteor.user().profile.lastName;
        }
        Meteor.call("publishPost", textarea.value, name);
        Meteor.call("increasePontuation", 5, 'post', Meteor.userId());//give points to user after a new post

        //if(jauntAchievementsRules.verifyPostShouldUnlockAchievement(Meteor.userId())){
        jauntAchievementsRules.checkAndUnlockPostAchievementByCondition(Meteor.userId());
        //  jauntNotifications.achievementPostPublishedNotification('First Post published!');
        //}
        textarea.value = "";
        //notifications
        return false;
    }
});
