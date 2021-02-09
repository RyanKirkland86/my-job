$(document).ready(function () {
    $("#save-app").on("click", function(event) {
        event.preventDefault();
        // var createDate = new Date($("#apply-date").val().trim()).toLocaleDateString("en-US").split("/");
        var compName = $("#compName").val().trim();
        var roleName = $("#roleName").val().trim();
        var jobLink = $("#jobsitelink").val().trim();
        var recruiterName = $("#recruiterName").val().trim();
        var recruiterContact = $("#recruiterEmail").val().trim();
        var user;
        if (window.location.href.slice(-2, -1)==="/") {
            user = window.location.href.slice(-1);
        } else { user = window.location.href.slice(-2)};
        console.log(user);


        var newApp = {
            company: compName,
            role: roleName,
            jobsitelink: jobLink,
            status: "Applied - Awaiting Response",
            recruiterName: recruiterName,
            recruiterContact: recruiterContact,
            // createdAt: createDate,
            UserId: user
        }

        $.ajax("/api/newapp", {
            type: "POST",
            data: newApp
        }).then(function(result) {
            console.log(result);
            location.reload();
        });     
    });

    $(document.body).on("click", ".application", function (event) {
        event.preventDefault();
        var appId = event.target.getAttribute("data-id");
        var user;
        if(window.location.href.slice(-2,-1) === "/"){
           user = window.location.href.slice(-1);
        } else {user = window.location.href.slice(-2)};
        console.log(appId +", " + user);
        window.location.pathname = (`/dashboard/${user}/${appId}`);
    })
});
