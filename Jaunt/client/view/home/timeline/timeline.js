Template.timeline.events({
  /*it adds a specific class to the post being commented
    so the modal can find it and relate to it   */
  "click #js-commentPost": function(event, template){
     event.preventDefault();
     var postId = this._id;
     Session.set('postBeingCommented', postId);
     $('#commentModal').modal('show');
  }
});


Template.timeline.helpers({
  isEmoticonEnabled : function(){
    var points = Points.pointsCountFromUser(Meteor.userId());
    console.log(points);
    return true;
  }

});
