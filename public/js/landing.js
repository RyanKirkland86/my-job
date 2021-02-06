$(document).ready(function () {

    $("#login-btn").on("click", function (event) {
        event.preventDefault();
        var username = $("#login-username").val().trim();
        var password = $("#login-password").val().trim();

        getUser(username, password);
    })

    function getUser(username, password) {
        $.get("/api/login/" + username + "/" + password, function (data) {
            if(data === null)
            alert("Please create an account");
            userId = data.id;
            window.location = "/" + userId;
        });
    }

    $("#sign-up-btn").on("click", function(event) {
        event.preventDefault();
        var userName = $("#signup-username").val().trim();
        var firstName = $("#signup-firstname").val().trim();
        var lastName = $("#signup-lastname").val().trim();
        var userEmail = $("#signup-email").val().trim();
        var password = $("#signup-password").val().trim();

        var newUser = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: userEmail
        }
        
        // Post to Users table
        $.ajax("api/newuser", {
            type: "POST",
            data: newUser
        }).then(function(result) {
            getUser(userName, password);
        });
    });
});