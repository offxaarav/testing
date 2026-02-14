// enquiry-modal.js


const modal = document.getElementById("enquiry-modal");
const btn = document.getElementById("enquiry-btn");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
