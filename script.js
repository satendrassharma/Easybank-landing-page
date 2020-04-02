const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav_links");

const close = document.getElementById("close");

hamburger.addEventListener("click", e => {
  navLinks.style.display = "block";
  close.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", e => {
  navLinks.style.display = "none";
  hamburger.style.display = "block";
  close.style.display = "none";
});
