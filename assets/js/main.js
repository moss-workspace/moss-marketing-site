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
  toggleBackground($("#creativity"));
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
    offsetPercent = 0.1;

  if (index == 2) {
    offsetPercent = 0.25;
  }

  var offset = windowHeight * offsetPercent;

  if (windowScroll > elementTop + elementHeight - windowHeight + offset) {
    element.addClass("visible");
  } else {
    element.removeClass("visible");
  }
}

// Creativity
////////////////////////////////////////////////////////////////////////////////
function toggleBackground(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();

  if (
    windowScroll > elementTop &&
    windowScroll < elementTop + elementHeight - windowHeight
  ) {
    $("body").addClass("dark");
    $("#creativity").addClass("show-text");
  } else {
    $("body").removeClass("dark");
    $("#creativity").removeClass("show-text");
  }
}
