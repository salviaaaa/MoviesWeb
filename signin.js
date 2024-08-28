document.addEventListener("DOMContentLoaded", function() {
    // add event listener btn "send now"
    document.getElementById("submit-button").addEventListener("click", function(event) {
      
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the input fields and their values
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
      
      // Menghapus pesan error sebelumnya
      document.getElementById("email-error").textContent = "";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("password-error").textContent = "";
      document.getElementById("password-error").style.display = "none";
      
      // Validation checks
      var valid = true;
  
      // Check if the email field is empty
      if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        document.getElementById("email-error").style.display = "block";
        valid = false;
      // Check if the email field contains an "@" symbol
      } else if (!email.includes("@gmail.com")) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        document.getElementById("email-error").style.display = "block";
        valid = false;
      }

      if (password === "") {
        document.getElementById("password-error").textContent = "Password is required.";
        document.getElementById("password-error").style.display = "block";
        valid = false;
      } else if (password.length < 8) {
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        valid = false;
      }

       // If all validations pass
     if (valid) {
      // Simulate successful login
      alert("SignIn successfully!");
      window.location.href = "home.html"; // Redirect to home.html after successful login
    }
    });

    // add event listener btn "cancel"
    document.getElementById("cancel-button").addEventListener("click", function(event) {
      // Reset the form to clear all fields
      document.getElementById("signin-form").reset();
      // Menghapus pesan error sebelumnya
      document.getElementById("email-error").textContent = "";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("password-error").textContent = "";
      document.getElementById("password-error").style.display = "none";
    });
});