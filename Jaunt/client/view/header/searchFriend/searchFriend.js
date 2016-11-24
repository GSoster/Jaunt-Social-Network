Template.searchFriend.events({
  "keyup #searchFriendField": function(event, template){
    event.preventDefault();
    $(".friendListItem").remove();//cleans items from list
    $("#friendsList").empty();//cleans items from list
    var searchValue = $("#searchFriendField").val();
    if(searchValue.length === 0){
      $("#searchFriendField").val("");
      $(".friendListItem").remove();
      $("#friendsList").empty();
      return;
    }
    var regex = new RegExp(".*"+searchValue+".*", "i");
    var resultQuery = Meteor.users.find({"profile.firstName": {$regex: regex}}).fetch();
    resultQuery.map((x) => {
      $("#friendsList").append('<li class="friendListItem"><a href="/user/'+x._id+'"><span class="tab">'+x.profile.firstName+'</span></a></li>');
    });
    //console.log(resultQuery);//debug
  }
});


Template.searchFriend.helpers({

});
