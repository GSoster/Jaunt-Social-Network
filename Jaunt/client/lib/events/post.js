function colorPicker () {
  var colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#e67e22", "#f1c40f", "#e74c3c"];
  var min = 0;
  var max = colors.length;
  var colorToPick = Math.floor(Math.random() * (max - min + 1)) + min;
  return colors[colorToPick];
};


Template.post.events({
    "submit form": function(e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        var name = Meteor.user().profile.firstName;
        if (Meteor.user().profile.lastName) {
            name += ' ' + Meteor.user().profile.lastName;
        }
        /*Meteor.call("publishPost", textarea.value, name);*/
        //cardColor = colorPicker();//receives the color from a randomColorGenerator function
        var cardColor = $('#cardsColor').children(":selected").attr("id");//receives the color from the select (html)
        Meteor.call("publishPostWithColor", textarea.value, name, cardColor);
        Meteor.call("increasePontuation", jauntAchievementsRules.PostPointsIncrease, 'post', Meteor.userId());//give points to user after a new post
        //the method above does all the trick ;)
        jauntAchievementsRules.checkAndUnlockPostAchievementByCondition(Meteor.userId());
        jauntNotifications.defaultPostPublised();
        tinyMCE.activeEditor.setContent('');
        textarea.value = "";/*to clean textarea when there is no tinyMCE*/
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
