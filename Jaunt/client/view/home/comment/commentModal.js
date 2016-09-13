
Template.commentModal.helpers({
  userName : function(){
    return Meteor.user().profile.firstName;
  },
});

Template.commentModal.events({
  "click #js-commentModal-save": function(event, template){
    event.preventDefault();
    console.log($('#userComment').val());
    console.log(this);
    var parentElementId = $(this).parent().attr('id');
    console.log(parentElementId);
    return false;
  },

});
