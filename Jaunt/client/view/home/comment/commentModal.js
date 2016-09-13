
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
    console.log(comment);
    $('#userComment').val('');//cleans the modal textbox
    return false;
  },

});
