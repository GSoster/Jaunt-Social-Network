Template.timelineGlobal.helpers({
    postsGlobal: function () {
        return Post.find({}, {
            sort: {
                date: -1
            }
        });
    }

});