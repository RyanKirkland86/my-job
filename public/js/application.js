$(document).ready(function () {
    $("#save-edits").on("click", function(event) {
        event.preventDefault();
        var status = $("#edit-status").val().trim();
        var source = $("#edit-source").val().trim();
        var company = $("#edit-company").val().trim();
        var role = $("#edit-role").val().trim();
        var appID = window.location.href.slice(-1);
        // console.log(appID);

        // Confirm input fields not empty.
        if (!status || !source || !company || !role) {
            return alert("All input fields are required");
        }

        var appEdits = {
            status: status,
            jobsitelink: source,
            company: company,
            role: role
        }

        
        $.ajax(`/api/applications/edit/${appID}`, {
            type: "PUT",
            data: appEdits
        }).then(function(result) {
            console.log(result);
            
        });
        location.reload();
    });

    $("#note-edits").on("click", function(event) {
        event.preventDefault();
        var noteID = $("#edit-noteID").val().trim();
        var body = {};
        body.body = $("#edit-noteBody").val().trim();
        console.log(noteID);
        console.log(body);
        $.ajax(`/api/notes/edit/${noteID}`, {
            type: "PUT",
            data: body
        }).then(function(result) {
            console.log(result);
        });
        location.reload();
    });

    $("#add-note").on("click", function(event) {
        event.preventDefault();
        var body = {};
        var appid;
        if(window.location.href.slice(-2,-1) === "/"){
            appid = window.location.href.slice(-1);
         } else {appid = window.location.href.slice(-2)};
        body.body = $("#new-noteBody").val().trim();
        body.ApplicationId = appid;
        $.ajax("/api/notes/new", {
            type: "POST",
            data: body
        }).then(function(result) {
            console.log(result);
        });
        location.reload();
    })
    
});
