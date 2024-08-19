//nav-bar
window.onscroll = function () {
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".navbar-brand");
  const text = document.querySelectorAll(".nav-link");
  text.forEach(function (element) {
    if (window.scrollY > 24) {
      element.classList.add("text-dark");
    } else {
      element.classList.remove("text-dark");
    }
  });
  if (window.scrollY > 24) {
    nav.classList.add("bg-light");
    nav.classList.add("shadow-sm");
    logo.classList.add("black-font-logo");
  } else {
    nav.classList.remove("bg-light");
    nav.classList.remove("shadow-sm");
    logo.classList.remove("black-font-logo");
  }
};

// dark/light mode data-bs-theme
const toggleButton = document.getElementById("theme-toggle-btn");
const htmlElement = document.documentElement;
const one = document.querySelector(".one-");
const two = document.querySelector(".two-");
const three = document.querySelector(".three-");
const four = document.querySelector(".four-");
const five = document.querySelector(".five-");
const six = document.querySelector(".six-");
const seven = document.querySelector(".seven-");
const ate = document.querySelector(".ate-");
toggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-bs-theme", newTheme);
  if (one.classList.contains("shine")) {
    one.classList.remove("shine");
    one.classList.add("text-light");
    two.classList.add("text-light");
    three.classList.add("text-light");
    four.classList.add("text-light");
    five.classList.add("text-light");
    six.classList.add("text-light");
    seven.classList.add("text-light");
    ate.classList.add("text-light");
  } else {
    one.classList.remove("text-light");
    one.classList.add("shine");
    two.classList.remove("text-light");
    three.classList.remove("text-light");
    four.classList.remove("text-light");
    five.classList.remove("text-light");
    six.classList.remove("text-light");
    seven.classList.remove("text-light");
    ate.classList.remove("text-light");
  }
});
//loading
document.addEventListener("DOMContentLoaded", function () {
  var loader = document.querySelector(`.overlay`);
  window.onload = function () {
    loader.classList.add("d-none");
  };
});
