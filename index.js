const menu = document.querySelector("#burger");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    nav.classList.remove("hidden");
    menu.classList.add("hidden");
  } else {
    nav.classList.add("hidden");
    menu.classList.remove("hidden");
  }
});

// Smooth scrolling effect
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000,
    "easeInOutCubic"
  );
});
