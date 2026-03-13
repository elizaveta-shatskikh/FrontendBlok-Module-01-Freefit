// Smooth

window.addEventListener('scroll', function () { 
   const header = document.querySelector('.header'); 
   if (window.scrollY > 100) { 
      header.classList.add('scroll'); 
   } 
   else { 
      header.classList.remove('scroll'); 
   } 
});