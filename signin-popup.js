// signin-popup.js


const openSigninBtn = document.getElementById("openSigninBtn");
const signinPopup = document.getElementById("signinPopup");
const closeSigninBtn = document.getElementById("closeSigninBtn");


openSigninBtn.addEventListener("click", () => {
  signinPopup.style.display = "block";
});


closeSigninBtn.addEventListener("click", () => {
  signinPopup.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === signinPopup) {
    signinPopup.style.display = "none";
  }
});
