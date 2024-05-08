const menu = document.querySelector("#menu");
const box = document.querySelector("nav"); // Changed selector to match the nav element
const boxPosition = box.getBoundingClientRect().top;

console.log("script works");

window.addEventListener("scroll", function () {
  const boxPosition = box.getBoundingClientRect().top;
  if (window.pageYOffset >= boxPosition) {
    menu.style.top = "0px";
  } else {
    menu.style.top = "calc(100% - 100px)";
  }
});
