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

Template.postOnTimeline.helpers({
  isEmoticonEnabled : function(){
    var points = Meteor.user().totalPoints;
    if(points >= jauntAchievementsRules.EnableEmoticonsPointsRequired){
      return true;
    }
    return false;
  }
});

Template.timeline.helpers({
  /*the player needs at least 35 points to enable emoticons on his comments*/
  isEmoticonEnabled : function(){
    return true;
    var points =  Points.listPointsFromUser(Meteor.userId());
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    if (totalPoints > jauntAchievementsRules.EnableEmoticonsPointsRequired){
      return true;
    }
    return false;
  }

});
