const go_top = document.querySelector("#go_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    go_top.style.display = "block";
  } else {
    go_top.style.display = "none";
  }
});
go_top.addEventListener("click", () => {
  window.scrollTo({ top: 0});
});


// const themeToggle = document.getElementById("theme-toggle");

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });\

const contact = document.querySelector(".contact-form");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("contact-output");

contact.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const userName = name.value;
  const userMessage = message.value;
  output.innerHTML = `
    <p><b>Submitted Name:</b> ${userName}</p>
    <p><b>Submitted Message:</b> ${userMessage}</p>
  `;
  contact.reset();
});


