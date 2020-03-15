import DynamicParallax from "./parallax";
import "./styles/main.scss";

const paralaxing = new DynamicParallax(".parallax1");
const paralaxingLogo = new DynamicParallax(".parallax2");

window.addEventListener("scroll", function() {
  console.log(paralaxing.item);
  this.console.log(window.scrollY);
  console.log("scrolling");
  paralaxing.parallax(0.8, window.scrollY);
  paralaxingLogo.parallax(0.4, window.scrollY);
});

let menu = document.querySelector(".menu-toggle");
let menuToggle = document.querySelector(".burger");

menuToggle.onclick = function(e) {
  e.preventDefault();
  console.log(menu);
  menu.classList.toggle("open");
};
