//Session.set("showGlobalTimeline", true);
Session.set("timelineToDisplay", "timelineGlobal");

/**
* 'isGlobalTimeline' and 'isMyTimeline' should be in global helpers.
*/
Template.home.helpers({
    isGlobalTimeline: function () {
        return Session.get("timelineToDisplay") === "timelineGlobal";
    },
    isMyTimeline: function () {
        return Session.get("timelineToDisplay") === "myTimeline";
    },
    userId : function(){
      return Meteor.userId();
    }
});
