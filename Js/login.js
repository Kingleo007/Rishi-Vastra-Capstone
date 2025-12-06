const form = document.querySelector(".login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  error.textContent = "";

  if (password.value.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    error.style.color = "red";
    return;
  }

  error.textContent = "Login successful!";
  error.style.color = "green";

  form.reset();
});
