
Template.commentModal.helpers({
  userName : function(){
    if(Meteor.user()){
      return Meteor.user().profile.firstName;
    }
  },
});

Template.commentModal.events({
  "click #js-commentModal-save": function(event, template){
    event.preventDefault();
    var commentText = $('#userComment').val();
    if(commentText.length === 0){
      console.warn("Comment length can't be zero.");
      $('#commentModal').modal('hide');//dimiss modal
      return false;
    }
    var postId = Session.get('postBeingCommented');
    var comment = {
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
    return false;
  },

});
