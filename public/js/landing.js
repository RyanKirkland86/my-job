$(document).ready(function () {

    $("#login-btn").on("click", function (event) {
        event.preventDefault();
        var username = $("#login-username").val().trim();
        var password = $("#login-password").val().trim();

        // Confirm input fields not empty.
        if (!username || !password) {
            return;
        }

        getUser(username, password);
    })

    function getUser(username, password) {
        $.ajax(`api/login/${username}/${password}`, {
            type: "GET",
        }).then(function(result) {
            console.log(result[0]);
            window.location = "/dashboard/" + result[0].id;
        });
    }

    $("#sign-up-btn").on("click", function(event) {
        event.preventDefault();
        var userName = $("#signup-username").val().trim();
        var firstName = $("#signup-firstname").val().trim();
        var lastName = $("#signup-lastname").val().trim();
        var userEmail = $("#signup-email").val().trim();
        var password = $("#signup-password").val().trim();

        // Confirm input fields not empty.
        if (!userName || !firstName || !lastName || !userEmail || !password) {
            return;
        }

        // Confirm password entered correctly.
        var passwordConfirm = $("#signup-passconfirm").val().trim();
        if (password !== passwordConfirm) {
            return;
        }

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