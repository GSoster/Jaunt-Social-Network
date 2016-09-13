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
