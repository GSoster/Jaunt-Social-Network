/*
* formates a Date javascript object to something that the user actually wants to see.
* @param {Date javascript object} date
* @returns string
*/
function formatDate (date) {
  var formatedDate = date.getDate() + '/' + (date.getMonth() + 1)  + '/' + date.getFullYear() + ' ';
  formatedDate += (date.getHours().toString().length === 1) ? '0'+date.getHours() : date.getHours();
  formatedDate += (date.getMinutes().toString().length === 1) ? ':0'+date.getMinutes() : ':'+date.getMinutes();
  return formatedDate;
};

/**
* @param array
* returns an array with unique elements.
*/
function uniquefyArray(arrayToCheck) {
    var unique = [];
    for (var i = 0; i < arrayToCheck.length; i++) {
        var current = arrayToCheck[i];
        if (unique.indexOf(current) < 0) {
          unique.push(current);
        }
    }
    return unique;
};

Router.map(function(){
   this.route('home',
   { path : "/",
    template : "home",
     layoutTemplate : "layout",
     onBeforeAction : function(){
        var _id = Meteor.userId();
        this.subscribe("posts", _id);//posts from the user and his friends (followers/followings)
        this.subscribe("friendship", _id);
        this.subscribe("latestGlobalPosts");//latet 100 posts in the social network
        this.subscribe("points", _id);
        this.next();
     },
   data : function(){
     var _id = Meteor.userId();
     var timelineTitle = "Posts";
     var noPostsMessage = "There are no Posts";
     if (Session.get("timelineToDisplay") === "timelineGlobal"){
       //the line below is used to format the date time. Posts.find only contains what comes from publisher
       var postsToPrepare = Posts.find({},{sort: {date: -1}, limit : 100});
       posts = postsToPrepare.map(function (value) {value.date = formatDate(value.date); return value;});
       timelineTitle = "Global Posts";
       noPostsMessage = "There are no new Global Posts to be displayed";
     }else{//My Timeline
        timelineTitle = "My Timeline";
        var timelineIds = Friendships.timelineIds(_id);
        var postsToPrepare = Posts.find({userId : {'$in' : timelineIds}},{sort: {time: -1, name: 1}});
        posts = postsToPrepare.map(function (value) {value.date = formatDate(value.date); return value;});
     }
      return {
        posts : posts,
        timelineTitle : timelineTitle,
        noPostsMessage : noPostsMessage,
        followers : Friendships.followers(_id),
        followings : Friendships.followings(_id),
      };
    }
    });
    this.route('user',{
      path : "/user/:_id",
      template: "user",
      layoutTemplate : "layout",
      onBeforeAction : function(){
        var _id = this.params._id;
        this.subscribe("postsFromUser", _id);
        this.subscribe("friendship", _id);
        this.subscribe("isFollowing", _id);
        this.subscribe("user", _id);
        this.subscribe("achievements", _id);
        this.subscribe("points", _id);
        this.next();
      },
      data : function(){
        var _id = this.params._id;//other user id (the one which the profile our currentUser is visiting )
        var isFollowing = Friendships.isFollowing(_id);
        Session.set("currentUserId", _id);
        Session.set("isFollowing", isFollowing);
        return {
          user : Meteor.users.findOne({_id : _id}),
          posts : Posts.find({}),
          followers : Friendships.followers(_id),
          followings : Friendships.followings(_id),
        }
      }
    });
    this.route("follow", {
      path: "/user/:_id/follow",
      action : function(){
      var _id = this.params._id;
      Meteor.call("followUser", _id);
      this.redirect("/user/"+_id);
      }
    });
    this.route("unfollow", {
      path: "/user/:_id/unfollow",
      action : function(){
        var _id = this.params._id;
        Meteor.call("unfollowUser", _id);
        this.redirect("/user/"+_id);
      }
    });


    this.route('leaderboard',{
      path : "/leaderboard/:_id",
      template: "leaderboard",
      layoutTemplate : "layout",
      onBeforeAction : function(){
        var _id = this.params._id;
        this.subscribe("postsFromUser", _id);
        this.subscribe("friendship", _id);
        this.subscribe("isFollowing", _id);
        this.subscribe("user", _id);
        this.subscribe("achievements", _id);
        this.subscribe("points", _id);
        //this.subscribe("friends");//it is not necessary anymore. remove in next version
        this.subscribe("users");
        this.next();
      },
      data : function(){
        var _id = this.params._id;//in this case it is the current user's id
        //fetching the friends information
        var ids = Friendships.followersAndFollowings(_id);
        var friendsIds = new Array();
        ids.map(function(friend){//maps if the user has being added by the friend or added the friend.
          friendsIds.push( (friend.userId === Meteor.userId()) ? friend.friendId : friend.userId);
        });
        uniqueFriendsIds = uniquefyArray(friendsIds);
        var friendsToReturn = Meteor.users.find( {_id: { $in: uniqueFriendsIds } } );
        var friends = Meteor.users.find({_id: { $in: uniqueFriendsIds } } );
        return {
          user: Meteor.users.findOne({_id : _id}),
          title: "Your friend's stats",
          friends:friends,
        }
      }
    });


 });
