Template.challengeModal.helpers({
  userName : function(){
    if(Meteor.user()){
      return Meteor.user().profile.firstName;
    }
  },
});


Template.challengeModal.events({
  "click #js-challengeModal-save": function(event, template){
    event.preventDefault();

      $('#challengeModal').modal('hide');//dimiss modal

    var friendId = Session.get('friendBeingChallenged');
     /*var comment = {
      userId: Meteor.userId(),
      userName: Meteor.user().profile.firstName,
      date: new Date(),
      text: commentText,
      postId: postId
    };
    Meteor.call('commentOnPost', comment, postId);
    Meteor.call("increasePontuation", jauntAchievementsRules.CommentPointsIncrease, 'comment', Meteor.userId());
    $('#userComment').val('');//cleans the modal textbox
    $('#commentModal').modal('hide');//dimiss modal
    jauntNotifications.defaultCommentPublised();//calls notification
    jauntAchievementsRules.checkAndUnlockCommentAchievementByCondition(Meteor.userId());
    return false;*/
  },

});
