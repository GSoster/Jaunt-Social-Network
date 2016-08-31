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
        Meteor.call("addAchievement", achievement, Meteor.userId());
        //Meteor.call("increasePontuation", 5, 'post');
        textarea.value = "";
        //notifications
        jauntNotifications.postPublishedNotification();
        return false;
    }
});
