window.onscroll = function () {
  const nav = document.querySelector("nav");
  const one = document.querySelector(".one");
  const two = document.querySelector(".tow");
  const three = document.querySelector(".three");
  const four = document.querySelector(".for");
  const five = document.querySelector(".five");
  const logo = document.querySelector(".navbar-brand");
  if (window.scrollY > 24 ) {
    nav.classList.add("bg-light");
    nav.classList.add("shadow-sm");
    one.classList.add("text-dark");
    two.classList.add("text-dark");
    three.classList.add("text-dark");
    four.classList.add("text-dark");
    five.classList.add("text-dark");
    logo.classList.add("b");
  }
   else {
    nav.classList.remove("bg-light");
    nav.classList.remove("shadow-sm");
    one.classList.remove("text-dark");
    two.classList.remove("text-dark");
    three.classList.remove("text-dark");
    four.classList.remove("text-dark");
    five.classList.remove("text-dark");
    logo.classList.remove("b");
  }};
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
// script.js
const toggleButton = document.getElementById('theme-toggle-btn');
const htmlElement = document.documentElement;
toggleButton.addEventListener('click', () => {
  
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);


});

