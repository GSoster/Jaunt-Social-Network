
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

Template.leaderboard.events({});
