const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.9)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "transparent";
  }
});



const go_top = document.querySelector("#go_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    go_top.style.display = "block";
  } else {
    go_top.style.display = "none";
  }
});
go_top.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// const themeToggle = document.querySelector("#theme-toggle");

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

const contact = document.querySelector(".contact-form");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("contact-output");

contact.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const userName = name.value;
  const userMessage = message.value;
  console.log("Name:", userName);
  console.log("Message:", userMessage);
  output.innerHTML = `
    <p><b>Submitted Name:</b> ${userName}</p>
    <p><b>Submitted Message:</b> ${userMessage}</p>
  `;
  contact.reset();
});