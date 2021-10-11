document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("menu-links").classList.toggle("show");
});

// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});