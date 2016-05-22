Router.map(function(){
   this.route('home',
   { path : "/", template : "home", layoutTemplate : "layout", data : function(){
      return {posts :Posts.list(Meteor.userId())}; },
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
          posts : Posts.list(_id)
        }
      }
    });
    this.route("follow", {
      path: "/user/:_id/follow",
      action : function(){
      var _id = this.params._id;
      console.log("chegou no router:"+ _id);
      Friendships.follow(_id);
      this.redirect("/user/"+_id);
      }
    });
    this.route("unfollow", {
      path: "/user/:_id/unfollow",
      action : function(){
        var _id = this.params._id;
        Friendships.unfollow(_id);
        this.redirect("/user/"+_id);
      }
    });
 });
