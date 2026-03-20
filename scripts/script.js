// Smooth

// window.addEventListener('scroll', function () { 
//     const header = document.querySelector('.header'); 
//     if (window.scrollY > 100) { 
//         header.classList.add('scroll'); 
//     } 
//     else { 
//         header.classList.remove('scroll');
//     } 
// });

const header = document.querySelector('.header');

// Проверяет, прокрутили ли страницу больше 100px и добавляет/убирает класс .scroll
function checkScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
};

// Проверка при построении DOM, чтобы шапка сразу была корректной, чтобы не было милисекундной вспышки серой обводки у шапки
document.addEventListener('DOMContentLoaded', checkScroll);

// Проверка после полной загрузки страницы и добавление класса .js-ready для плавного эффекта
window.addEventListener('load', () => {
    checkScroll();
    header.classList.add('js-ready');
});

// Проверка при прокрутке страницы
window.addEventListener('scroll', checkScroll);





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