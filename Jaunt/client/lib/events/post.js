Template.post.events({
    "submit form": function (e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        console.log("Profile:");
        console.log(Meteor.user().profile);
        var name = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
        Posts.publish(textarea.value, name); //Post.publish takes the place of insert and is defined in model/posts.js
        textarea.value = "";
        return false;
    }
});
