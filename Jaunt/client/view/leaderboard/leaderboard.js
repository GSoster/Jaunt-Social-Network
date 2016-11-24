
/**
* @param array
* returns an array with unique elements.
*/
function uniquefyArray(arrayToCheck) {
    var unique = [];
    for (var i = 0; i < arrayToCheck.length; i++) {
        var current = arrayToCheck[i];
        if (unique.indexOf(current) < 0) unique.push(current);
    }
    return unique;
}

/* ## ATTENTION ##
 * the helpers of leaderboard.html are hosted in the route file
 */
Template.leaderboard.helpers({});
Template.leaderboard.events({
  "click #js-challengeFriend" : function(event, template){
      event.preventDefault();
      var friendId = this._id;
      console.log("friendId: " + friendId);
      $('#commentModal').modal('show');
  }

});

/**
* leaderboardFriend template (it is hosted on the same html file as leaderboard)
*/
Template.leaderboardFriend.helpers({
  getFriendTotalPoints: function(friendId){
    console.log(friendId);
    var points =  Points.fetchPointsFromUser(friendId);
    console.log(points);
    var totalPoints = 0;
    points.map(function(x){totalPoints += x.points;});
    return totalPoints;
  }
});

Template.leaderboardUserAchievement.helpers({
    formatedDate: function(date){
      return jauntAchievementsRules.formatDate(date);
    }
});
