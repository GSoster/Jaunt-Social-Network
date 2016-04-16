Template.timeline.helpers({
    posts: function () {
        return Post.find({}, {
            sort: {
                createdOn: -1
            }
        });
    }
});