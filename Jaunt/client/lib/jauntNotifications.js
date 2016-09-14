//Global object
//can't use var here because Meteor declares a variable with var only to the current file.
jauntNotifications = {};
//docs here: http://s-alert.meteorapp.com/#

//new post published notification
jauntNotifications.achievementPostPublishedNotification = function(message){
  sAlert.success(message + '<img width="40px" height="40px" src="resources/achievementsImages/achievement_firstPost.png" alt="foi">', {position: 'bottom-right', timeout: 'none', html: true});
};


jauntNotifications.friendAdded = function(followingsName){
  sAlert.info('You are now following ' + followingsName + ' !!', {position: 'bottom-right', timeout: 'none'});
};


jauntNotifications.defaultCommentPublised = function(){
  sAlert.info('Your <strong>comment</strong> was published.', {position: 'bottom-right', timeout: 'none', html: true});
};

jauntNotifications.defaultPostPublised = function(){
  sAlert.info('Your <strong>post</strong> was published.', {position: 'bottom-right', timeout: 'none', html: true});
};
