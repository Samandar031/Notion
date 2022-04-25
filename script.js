const fs = require("fs");

// let container = document.querySelector(".containerP");
// let togle = document.querySelector(".nav_item_two");

// togle.addEventListener("click", function () {
//   container.classList.toggle("active");

//   if (container.classList.contains("active")) {
//     container.style.setProperty("--back", "#ACC8E5");
//   } else {
//     container.style.setProperty("--back", "white");
//   }
// });

fs.readFile("./text.txt", "utf-8", function (err) {
  console.log("fs ni o'qidi");
  setTimeout(() => {
    console.log("set timeout ishladi");
  });
  setImmediate(() => {
    console.log("set immediate ishladi");
  });

  console.log("oxiri");
});
