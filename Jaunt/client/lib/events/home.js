Template.home.events({
    "click #js-globalTimeline": function (e) {
        e.preventDefault();
        Session.set("timelineToDisplay", "timelineGlobal");
        return false;
    },
    "click #js-myTimeline": function (e) {
        e.preventDefault();
        Session.set("timelineToDisplay", "myTimeline");
        return false;
    }
});