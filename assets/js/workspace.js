$(document).ready( function() {
    // run slick
    $('.slick').slick({
      infinite: true,
      initialSlide: 2,
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '18px',
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      focusOnSelect: true,
    });
})

$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log(currentSlide);
  $('.workspace__carousel__button').removeClass('active');
  $('.workspace__carousel__button').eq(currentSlide).addClass('active');

});

function goToSlide(number, target) {
  $('.slick').slick('slickGoTo', number);
}