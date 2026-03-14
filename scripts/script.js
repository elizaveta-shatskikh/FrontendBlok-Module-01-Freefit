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

// Burger Menu

const btnBurger = document.getElementById("btnBurger");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");

btnBurger.addEventListener("click", function () {
    modal.classList.add("active");
})

btnClose.addEventListener("click", function () {
    modal.classList.remove("active");
})