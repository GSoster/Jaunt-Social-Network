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
    var friendId = Session.get('friendBeingChallenged');
    console.log("Challenge called for the friend: " + friendId);
    var challenge = {
      dateChallenged : new Date(),
      challengedUser: friendId,
      challengedBy: Meteor.userId(),
      pointsSpentToChallenge: 5,
      pointsToReceive: 2,
      completed: false,
      completedOn: null,
    };
    Meteor.call('challengeUser', friendId, Meteor.userId());//this method handles points too.
    //Meteor.call('commentOnPost', comment, postId);
    //jauntNotifications.defaultCommentPublised();//calls notification
    console.log(challenge);
    $('#challengeModal').modal('hide');//dimiss modal
    return;
  },

});
