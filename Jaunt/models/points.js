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
Points.listPointsFromUser = function(userId){  
  return this.find({userId : userId});
};
