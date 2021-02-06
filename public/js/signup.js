$(document).ready(() => {
  // SIGN-UP NEW USER
  $("#sign-up-btn").on("click", (event) => {
    event.preventDefault();

    // Get user info from input fields
    const signupData = {
      username: $("#signup-username").val().trim(),
      firstname: $("#signup-firstname").val().trim(),
      lastname: $("#signup-lastname").val().trim(),
      email: $("#signup-email").val().trim(),
      password: $("#signup-password").val().trim()
    }

    // Ensure that all input fields have been filled out.
    if (!signupData.username || !signupData.firstname || !signupData.lastname || !signupData.email || !signupData.password) {
      return;
    }

    // Confirm that the password was entered correctly.
    const passwordConfirm = $("#signup-passconfirm").val().trim();
    if (signupData.password !== passwordConfirm) {
      return;
    }

    // Execute signupUser function.
    signupUser(signupData.username, signupData.firstname, signupData.lastname, signupData.email, signupData.password);
    // Clear inputs.
    $("#signup-username").val("")
    $("#signup-firstname").val("")
    $("#signup-lastname").val("")
    $("#signup-email").val("")
    $("#signup-password").val("")
    $("#signup-passconfirm").val("")
  })

  // Ajax POST function.
  const signupUser = (username, firstname, lastname, email, password) => {
    $.post("/api/newuser"), {
      userName: username,
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password
    }.then(() => {
      window.location.replace("/dashboard");
    }).catch((err) => {
      console.log(err);
    })
  }
})