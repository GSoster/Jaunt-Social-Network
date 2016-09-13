Template.timeline.events({
  "click #js-commentPost": function(event, template){
     event.preventDefault();
     var postId = this._id;
     console.log("post: " + postId);
     $('#commentModal').modal('show');
  }
});
