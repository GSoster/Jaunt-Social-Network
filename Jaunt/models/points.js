Points = new Meteor.Collection('points');


Points.increasePontuation = function (points, type, userId) {
    this.insert({
      userId: userId,
      date: new Date(),
      points : points,
      type : type
    });
};

Points.pointsCountFromUser = function (userId){
  return this.find({userId : userId}).count();
};

/**
* returns a collection cursor with points (to be worked with in template helpers).
*/
Points.listPointsFromUser = function (userId){
  return this.find({userId : userId});
};

/**
* returns an array of points documents (to be worked with in functions).
*/
Points.fetchPointsFromUser = function (userId) {
  //console.log('db.points.find({"userId": "'+userId+'"});');
  return this.find({userId : userId}).fetch();
};


/**
* returns all comment points from user
*/
Points.getCommentPointsFromUser = function (userId) {
  var userDoc = Meteor.users.findOne({_id: userId});
  return userDoc.commentPoints || 0;
};

/**
* returns all posts points from user
*/
Points.getPostPointsFromUser = function (userId) {
  var userDoc = Meteor.users.findOne({_id: userId});
  return userDoc.postPoints || 0;
};
