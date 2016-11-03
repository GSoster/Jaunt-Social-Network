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
        //the method above does all the trick ;)
        jauntAchievementsRules.checkAndUnlockPostAchievementByCondition(Meteor.userId());
        jauntNotifications.defaultPostPublised();
        tinyMCE.activeEditor.setContent('');
        textarea.value = "";
        return false;
    }
});

Template.post.onRendered(function() {
    tinymce.EditorManager.editors = []; //we need to remove the old instances.
    tinymce.init({
      selector: '#newPostTextArea',
      /*height : 200,*/
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
      menubar: false,
      statusbar: false
    });
});
