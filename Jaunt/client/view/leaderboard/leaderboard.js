
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


Template.leaderboard.helpers({
  friends : function(){
    var ids = Friendships.followersAndFollowings(Meteor.userId());
    var friendsIds = [];
    ids.map(function(friend){//maps if the user has being added by the friend or added the friend.
      friendsIds.push( (friend.userId === Meteor.userId()) ? friend.friendId : friend.userId);
    });
    uniqueFriendsIds = uniquefyArray(friendsIds);
    var friends = Meteor.users.find( {_id: { $in: uniqueFriendsIds } } );
    console.log(friends);
    friends.map(function(f){console.log(f);});
    return friends;
  },
});

Template.leaderboard.events({
});
