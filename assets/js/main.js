// Load
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  sizeHeroVideo();
});

// Resize
////////////////////////////////////////////////////////////////////////////////
$(window).resize(function () {
  sizeHeroVideo();
});

// Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function () {
  $(".desktop__image").each(function (index) {
    toggleDesktopImage($(this), index);
  });
});

// Hero
////////////////////////////////////////////////////////////////////////////////
function sizeHeroVideo() {
  if ($(window).height() <= $(window).width()) {
    $("#hero__video--portrait").hide();
    $("#hero__video--landscape").show();
  } else {
    $("#hero__video--portrait").show();
    $("#hero__video--landscape").hide();
  }
}

// Desktop
////////////////////////////////////////////////////////////////////////////////
function toggleDesktopImage(element, index) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop(),
    offset = 100;

  if (index == 2) {
    offset = 250;
  }

  if (windowScroll > elementTop + elementHeight - windowHeight + offset) {
    element.addClass("visible");
  } else {
    element.removeClass("visible");
  }
}
