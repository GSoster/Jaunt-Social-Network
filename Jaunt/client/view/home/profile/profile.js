Template.profile.helpers({
    editProfile: function () {
        return Session.get("editProfile");
    }
});

Template.profileBox.helpers({
    currentUser: function () {
        return Meteor.user();
    }
});