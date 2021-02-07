$(document).ready(function () {
    $("#save-app").on("click", function(event) {
        event.preventDefault();
        var createDate = $("#apply-date").val().trim();
        var compName = $("#compName").val().trim();
        var roleName = $("#roleName").val().trim();
        var jobLink = $("#jobsitelink").val().trim();
        var recruiterName = $("#recruiterName").val().trim();
        var recruiterContact = $("#recruiterEmail").val().trim();

        var newApp = {
            company: compName,
            role: roleName,
            jobsitelink: jobLink,
            status: "Applied - Awaiting Response",
            recruiterName: recruiterName,
            recruiterContact: recruiterContact,
            createdAt: createDate
        }

        $.ajax("/api/newapp", {
            type: "POST",
            data: newApp
        }).then(function(result) {
            location.reload();
        });     
    });

    $(document.body).on("click", ".application", function (event) {
        event.preventDefault();
        const appId = event.target.getAttribute("data-id");
        window.location.pathname = (`/${appId}`);
    })
});