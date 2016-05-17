//Session.set("showGlobalTimeline", true);
Session.set("timelineToDisplay", "timelineGlobal");


Template.home.helpers({
    isGlobalTimeline: function () {
        return Session.get("timelineToDisplay") === "timelineGlobal";
    },
    isMyTimeline: function () {
        return Session.get("timelineToDisplay") === "myTimeline";
    }
});