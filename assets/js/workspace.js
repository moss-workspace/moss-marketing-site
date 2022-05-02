$(document).ready( function() {
    // run slick
    $('.slick').slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '600px',
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            centerPadding: '300px',
          }
        },
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
  $('.workspace__carousel__button').eq(nextSlide).addClass('active');
});

function goToSlide(number, target) {
  $('.slick').slick('slickGoTo', number);
}

// Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function (event) {
  toggleBackgroundColor();
});

// Background
////////////////////////////////////////////////////////////////////////////////
function toggleBackgroundColor() {
  var windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop();

  if (scrollTop > $("#gray-end").offset().top - windowHeight) {
    $("body").removeClass("gray");
  } else if (scrollTop > $("#gray-start").offset().top - windowHeight) {
    $("body").addClass("gray");
  } else {
    $("body").removeClass("gray");
  }
}