$(function () {

    $('.burger').on('click', function(e){
        e.preventDefault()
        $('.header__burger').toggleClass('header__burger--open');
    })

    // $(window).on('scroll', function () { 
    //     if ($(window).scrollTop() > 0 && $('.header__burger').hasClass('header--open') === false) {
    //         $('.burger').addClass('burger--follow')
    //     } else {
    //         $('.burger').removeClass('burger--follow')
    //     }
    // })

// $('.burger, .overlay').on('click', function (e) {
//     e.preventDefault()
//     $('.header__burger').toggleClass('header__burher--open')
//     $('.overlay').toggleClass('overlay--show')
// })

})