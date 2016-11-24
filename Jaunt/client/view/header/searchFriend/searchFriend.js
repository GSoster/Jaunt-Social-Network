Template.searchFriend.events({
  "keyup #searchFriendField": function(event, template){
    event.preventDefault();
    console.log("mudou!");
    $("#friendsList").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');
  }
});


Template.searchFriend.helpers({

});
