let container = document.querySelector(".containerP");
let togle = document.querySelector(".nav_item_two");

togle.addEventListener("click", function () {
  container.classList.toggle("active");

  if (container.classList.contains("active")) {
    container.style.setProperty("--back", "#ACC8E5");
  } else {
    container.style.setProperty("--back", "white");
  }
});
