Template.post.events({
    "submit form": function (e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        var name = Meteor.user().profile.firstName;
        if (Meteor.user().profile.lastName) {
          name += ' ' + Meteor.user().profile.lastName;
        }
        Meteor.call("publishPost",textarea.value, name);
        var achievement = {
          title : "First Post!",
          description: "Congratulations for your first post!",
          image: "/resources/achievementsImages/achievement_firstPost.png",
        };
        //give points to user after a new post:
        Meteor.call("increasePontuation", 5, 'post', Meteor.userId());
        //verifies if it is necessary to unlock a new achievement
        if(jauntAchievementsRules.verifyPostShouldUnlockAchievement(Meteor.userId())){          
          Meteor.call("addAchievement", achievement, Meteor.userId());
          jauntNotifications.achievementPostPublishedNotification();
        }
        textarea.value = "";
        //notifications
        return false;
    }
});
