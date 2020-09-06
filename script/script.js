$(document).ready(() => {

    $('#menu-button').on('click', () => {
        $('#menu-button').toggleClass('menu-rotate');
        $('#menu').toggleClass('hidden');
        $('body').toggleClass('scroll-lock');
        $('#menu-slider').toggleClass('menu-slide');
    });

    $('.navigation-mobile__menu').on('click', () => {
        $('#menu-button').removeClass('menu-rotate');
        $('#menu').addClass('hidden');
        $('body').removeClass('scroll-lock');
        $('#menu-slider').removeClass('menu-slide');
    });

    $('.web-filter__element').on('click', (event) => {
        $('.web-filter__element').removeClass('selected')
        event.target.classList.add('selected');
    });

});
