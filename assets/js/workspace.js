$(document).ready( function() {
    // run slick
    $('.slick').slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '18px',
      autoplay: true,
      autoplaySpeed: 4000,
    //   slidesToScroll: 3,
      responsive: [
        // {
        //   breakpoint: 450,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ]
    });
})