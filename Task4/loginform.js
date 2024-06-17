// script.js
document.addEventListener('DOMContentLoaded', function() {
      var modal = document.getElementById('loginModal');
      var loginLink = document.getElementById('loginLink');
      var closeBtn = document.getElementsByClassName('close')[0];
      var loginForm = document.getElementById('loginForm');
  
      loginLink.onclick = function() {
          modal.style.display = "block";
      }
  
      closeBtn.onclick = function() {
          modal.style.display = "none";
      }
  
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  
      loginForm.onsubmit = function(event) {
          event.preventDefault();
          var username = document.getElementById('username').value;
          var password = document.getElementById('password').value;
          // Example validation
          if (username === "example" && password === "password") {
              alert("Login successful!");
              modal.style.display = "none"; // Close the modal after successful login
              // Add redirection or other logic here after login
          } else {
              alert("Invalid username or password. Please try again.");
          }
      }
  });
  