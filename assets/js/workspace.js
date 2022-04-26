$(document).ready( function() {
    // run slick
    $('.slick').slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '175px',
      // autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            centerPadding: '26px',
          }
        },
      ]
    });
})

$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.workspace__carousel__button').removeClass('active');
  $('.workspace__carousel__button').eq(currentSlide).addClass('active');
  $(slick.$slides).removeClass('active');
});

$('.slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  $(slick.$slides.get(currentSlide)).addClass('active');
});

function goToSlide(number, target) {
  $('.slick').slick('slickGoTo', number);
}