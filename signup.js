document.addEventListener("DOMContentLoaded", function() {
    // add event listener btn "send now"
    document.getElementById("submit-button").addEventListener("click", function(event) {
      
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the input fields and their values
      var firstname = document.getElementById("firstname").value.trim();
      var lastname = document.getElementById("lastname").value.trim();
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
      var confirmPassword = document.getElementById("confirm-password").value.trim();
  
      // Menghapus pesan error sebelumnya
      document.getElementById("firstname-error").textContent = "";
      document.getElementById("firstname-error").style.display = "none";
      document.getElementById("lastname-error").textContent = "";
      document.getElementById("lastname-error").style.display = "none";
      document.getElementById("email-error").textContent = "";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("password-error").textContent = "";
      document.getElementById("password-error").style.display = "none";
      if (document.getElementById("confirm-password")) {
        document.getElementById("confirm-password-error").textContent = "";
        document.getElementById("confirm-password-error").style.display = "none";
      }
  
      // Validation checks
      var valid = true;
  
      // Check if the firstname field is empty
      if (firstname === "") {
        document.getElementById("firstname-error").textContent = "First Name is required.";
        document.getElementById("firstname-error").style.display = "block";
        valid = false;
      } else if (firstname.length < 4) {
        document.getElementById("firstname-error").textContent = "First Name must be at least 4 characters.";
        document.getElementById("firstname-error").style.display = "block";
        valid = false;
      }

      // Check if the lastname field is empty
      if (lastname === "") {
        document.getElementById("lastname-error").textContent = "Last Name is required.";
        document.getElementById("lastname-error").style.display = "block";
        valid = false;
      } else if (lastname.length < 4) {
        document.getElementById("lastname-error").textContent = "Last Name must be at least 4 characters.";
        document.getElementById("lastname-error").style.display = "block";
        valid = false;
      }

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

      if (document.getElementById("confirm-password")) {
        if (confirmPassword === "") {
          document.getElementById("confirm-password-error").textContent = "Confirm Password is required.";
          document.getElementById("confirm-password-error").style.display = "block";
          valid = false;
        } else if (password !== confirmPassword) {
          document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
          document.getElementById("confirm-password-error").style.display = "block";
          valid = false;
        }
      }
  
     
    // If all validations pass
    if (valid) {
      // Simulate successful signup
      alert("SignUp successfully!");
      window.location.href = "signin.html"; // Redirect to home.html after successful login
    }
    });

    // add event listener btn "cancel"
    document.getElementById("cancel-button").addEventListener("click", function(event) {
      // Reset the form to clear all fields
      document.getElementById("signup-form").reset();
      // Menghapus pesan error sebelumnya
      document.getElementById("firstname-error").textContent = "";
      document.getElementById("firstname-error").style.display = "none";
      document.getElementById("lastname-error").textContent = "";
      document.getElementById("lastname-error").style.display = "none";
      document.getElementById("email-error").textContent = "";
      document.getElementById("email-error").style.display = "none";
      document.getElementById("password-error").textContent = "";
      document.getElementById("password-error").style.display = "none";
      document.getElementById("confirm-password-error").textContent = "";
      document.getElementById("confirm-password-error").style.display = "none";
    });
});