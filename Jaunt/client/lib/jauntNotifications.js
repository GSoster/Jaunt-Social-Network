//Global object
//can't use var here because Meteor declares a variable with var only to the current file.
jauntNotifications = {};
//docs here: http://s-alert.meteorapp.com/#

//new post published notification
jauntNotifications.postPublishedNotification = function(){
  sAlert.success('Post published!!', {position: 'bottom-right', timeout: 'none'});
};


jauntNotifications.friendAdded = function(followingsName){
  sAlert.info('You are now following ' + followingsName + ' !!', {position: 'bottom-right', timeout: 'none'});
};
