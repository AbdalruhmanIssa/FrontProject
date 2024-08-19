//reveal on scroll
window.addEventListener('scroll', function() {

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const statics=this.document.querySelector('.statics');
    revealElements.forEach(function(element) {
      const triggerHeight = statics.offsetTop - window.innerHeight / 2;
    if (window.scrollY > triggerHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
    
  });
  });
  //nice scroll
  document.querySelector('.scrollspy-example').addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollBy({
        top: event.deltaY,
        left: 0,
        behavior: 'smooth' 
    });
  });
  