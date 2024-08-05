window.onscroll= function(){
    const nav=document.querySelector("nav");
    const abt=document.querySelector(".carousel-box");
    const one=document.querySelector(".one");
    const two=document.querySelector(".tow");
    const three=document.querySelector(".three");
    const four=document.querySelector(".for");
    const five=document.querySelector(".five");
    const logo=document.querySelector(".navbar-brand");
    console.log(abt.offsetTop);
    if(window.scrollY > 24){
        nav.classList.add('bg-light');
        nav.classList.add('shadow-sm');
        one.classList.add('text-dark');
        two.classList.add('text-dark');
        three.classList.add('text-dark');
        four.classList.add('text-dark');
        five.classList.add('text-dark');
        logo.classList.add('b');
    }
    else{
        nav.classList.remove('bg-light');
        nav.classList.remove('shadow-sm');
        one.classList.remove('text-dark');
        two.classList.remove('text-dark');
        three.classList.remove('text-dark');
        four.classList.remove('text-dark');
        five.classList.remove('text-dark'); 
        logo.classList.remove('b');
    }
}
function addClassOnWidth() {
    if (window.innerWidth <= 450) { // Change 768 to your desired width
      document.querySelector('.xyz').classList.add('flex-column');
      document.querySelector('.xyz').classList.add('text-center');
    }
    else{ document.querySelector('.xyz').classList.remove('flex-column');
    } 
  }
  
  // Run on initial load
  addClassOnWidth();