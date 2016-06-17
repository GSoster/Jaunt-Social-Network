Template.post.events({
    "submit form": function (e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        var name = Meteor.user().profile.firstName;
        if (Meteor.user().profile.lastName) {
          name += ' ' + Meteor.user().profile.lastName;
        }
        Meteor.call("publishPost",textarea.value, name);
        textarea.value = "";
        return false;
    }
});
