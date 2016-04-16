Template.post.events({
    "submit form": function (e, template) {
        e.preventDefault();
        var textarea = template.find("textarea");
        Posts.publish(textarea.value); //it takes the place of insert        
        textarea.value = "";
        return false;
    }
});