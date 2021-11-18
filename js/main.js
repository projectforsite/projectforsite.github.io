$(function() {
    $('.top__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      fade: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {

            dots: false
          }
        }
      ]
    });
    $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      slidersToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1141,
          settings: {
            slidersToShow: 3,
          }
        },
        {
          breakpoint: 846,
          settings: {
            slidersToShow: 2,
          }
        },
        {
          breakpoint: 585,
          settings: {
            slidersToShow: 1,
          }
        }
      ]
    });
    $('.menu__btn').on('click', function(){
      // клік додає ще один клас стилю-перевірки в інспекторі
      $('.menu__list').toggleClass('menu__list--active');
    });
});
