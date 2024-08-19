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
  }
  const pics = document.querySelector(".pics");

};



// dark/light mode data-bs-theme
const toggleButton = document.getElementById('theme-toggle-btn');
const htmlElement = document.documentElement;
const one= document.querySelector(".one-");
const two= document.querySelector(".two-");
const three= document.querySelector(".three-");
const four= document.querySelector(".four-");
const five= document.querySelector(".five-");
const six= document.querySelector(".six-");
const seven= document.querySelector(".seven-");
const ate= document.querySelector(".ate-");
toggleButton.addEventListener('click', () => {

    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    if(one.classList.contains('aa')){
      one.classList.remove('aa');
      one.classList.add('text-light');
      two.classList.add('text-light');
      three.classList.add('text-light');
      four.classList.add('text-light');
      five.classList.add('text-light');
      six.classList.add('text-light');
      seven.classList.add('text-light');
      ate.classList.add('text-light');
    }
    else{
      one.classList.remove('text-light');
      one.classList.add('aa');
      two.classList.remove('text-light');
      three.classList.remove('text-light');
      four.classList.remove('text-light');
      five.classList.remove('text-light');
      six.classList.remove('text-light');
      seven.classList.remove('text-light');
      ate.classList.remove('text-light');
     
    }

});
//loading
document.addEventListener("DOMContentLoaded", function() {
  var loader = document.querySelector(`.overlay`);

  // Hide the loader once the page has fully loaded
  window.onload = function() {
      loader.classList.add("d-none");
  };
});





