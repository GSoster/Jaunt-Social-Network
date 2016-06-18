//formates a Date javascript object to something that the user actually wants to see.
function formatDate (date) {
  var formatedDate = date.getDate() + '/' + (date.getMonth() + 1)  + '/' + date.getFullYear() + ' ';
  formatedDate += (date.getHours().toString().length === 1) ? '0'+date.getHours() : date.getHours();
  formatedDate += (date.getMinutes().toString().length === 1) ? ':0'+date.getMinutes() : ':'+date.getMinutes();
  return formatedDate;
};

Router.map(function(){
   this.route('home',
   { path : "/", template : "home", layoutTemplate : "layout", data : function(){
     var _id = Meteor.userId();
     var post = Posts.listGlobal();;
     var timelineTitle = "Posts";
     var noPostsMessage = "There are no Posts";
     if (Session.get("timelineToDisplay") === "timelineGlobal"){
       //the line below is used to format the date time.
       posts = Posts.listGlobal().map(function (value) {value.date = formatDate(value.date); return value;});
       timelineTitle = "Global Posts";
       noPostsMessage = "There are no new Global Posts to be displayed";
     }else{
        posts = Posts.list(_id).map(function (value) {value.date = formatDate(value.date); return value;});;
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
      data : function(){
        var _id = this.params._id;//other user id (the one which the profile our currentUser is visiting )
        var isFollowing = Friendships.isFollowing(_id);
        Session.set("currentUserId", _id);
        Session.set("isFollowing", isFollowing);
        return {
          user : Meteor.users.findOne({_id : _id}),
          posts : Posts.list(_id),
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
 });
