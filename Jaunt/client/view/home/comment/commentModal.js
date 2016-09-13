
Template.commentModal.helpers({
  userName : function(){
    return Meteor.user().profile.firstName;
  },
});

Template.commentModal.events({
  "click #js-commentModal-save": function(event, template){
    event.preventDefault();
    var commentText = $('#userComment').val();
    var postId = Session.get('postBeingCommented');
    var comment = {
      userId: Meteor.userId(),
      date: new Date(),
      text: commentText,
      postId: postId
    };
    Meteor.call('commentOnPost', comment, postId);
    $('#userComment').val('');//cleans the modal textbox
    $('#commentModal').modal('hide');//dimiss modal
    jauntNotifications.defaultCommentPublised();//calls notification    
    return false;
  },

});
