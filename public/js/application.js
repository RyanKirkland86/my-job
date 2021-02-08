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
        var noteID = event.target.data-id;
        console.log(noteID);
    });
    
});
