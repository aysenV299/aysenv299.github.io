const hamburger = document.querySelector('.header__hamburger');
const navMenu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll('.header__link').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

const pageup = $('.pageup');
$(window).scroll(function() {
    if($(window).scrollTop() > 300){
        pageup.addClass('pageup_show');
    } else {
        pageup.removeClass('pageup_show');
    }
});

const header = document.querySelectorAll('.sections__header');
const descr = document.querySelectorAll('sections__descr');

header.forEach((sections__header) => {
    sections__header.addEventListener("click", () => {
        const panel = sections__header.nextElementSibling;
        panel.classList.toggle('sections__descr-active')
        sections__header.classList.toggle('sections__header-active');
    })
});

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
});
$('.modal__send').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
});
$('[data-modal=join]').on('click', function() {
    $('.overlay, #join').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #join').fadeOut('slow');
});
// $('[data-modal=write]').on('click', function() {
//     $('.overlay, #write').fadeIn('slow');
// });
// $('.modal__close').on('click', function() {
//     $('.overlay, #write').fadeOut('slow');
// });
// $('.modal__send').on('click', function() {
//     $('.overlay, #write').fadeOut('slow');
// });

$('input[name="entry.668812130"]').mask("+7 (999) 999-99-99");
$('input[name="entry.1826077251"]').mask("+7 (999) 999-99-99");
$('input[name="entry.737684123"]').mask("+7 (999) 999-99-99");
