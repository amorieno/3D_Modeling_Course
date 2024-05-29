let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
    menu.style.transition = 'visibility 0.3s ease-in-out, transform 0.3s ease-in-out';

    document.body.classList.toggle('stop-scroll');
  })

  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('header__nav--active'))
      menu.removeAttribute('style');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})
