Router.map(function(){
   this.route('home',
   { path : "/", template : "home", layoutTemplate : "layout", data : function(){
     var _id = Meteor.userId();
     var post = Posts.listGlobal();;
     var timelineTitle = "Posts";
     var noPostsMessage = "There are no Posts";
     if (Session.get("timelineToDisplay") === "timelineGlobal"){
       posts = Posts.listGlobal();
       timelineTitle = "Global Posts";
       noPostsMessage = "There are no new Global Posts to be displayed";
     }else{
        posts = Posts.list(_id);
     }
     console.log(Session.get("timelineToDisplay"));
      return {
        posts : posts,
        timelineTitle : timelineTitle,
        noPostsMessage : noPostsMessage,
        //followers : Friendships.followers(_id),
        //followings : Friendships.followings(_id),
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
          //followers : Friendships.followers(_id),
          //followings : Friendships.followings(_id),
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
