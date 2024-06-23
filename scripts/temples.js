document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const title = document.getElementById("title");
  const x = document.getElementById("x-symbol");
  const hamburger = document.getElementById("hamburger-symbol");
  const icon = document.getElementById("icon");

  icon.addEventListener("click", function (event) {
    event.preventDefault();
    if (nav.style.display == "none") {
      nav.style.display = "flex";
      title.style.display = "none";
      x.style.display = "block";
      hamburger.style.display = "none";
    } else {
      nav.style.display = "none";
      title.style.display = "block";
      x.style.display = "none";
      hamburger.style.display = "block";
    }
  });
});
