Template.profileForm.events({
    "submit form": function (e, template) {
        e.preventDefault();
        var inputs = template.findAll("input");
        Session.set("editProfile", false);
        Meteor.users.update({
            _id: Meteor.user()._id
        }, {
            $set: {
                "profile.firstName": inputs[0].value,
                "profile.about": inputs[1].value
            }
        });
    }
});
