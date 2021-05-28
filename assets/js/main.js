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
  $(".parallax").each(function () {
    parallax($(this));
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
    scrollTop = $(this).scrollTop(),
    offsetPercent = 0.1;

  if (index == 2) {
    offsetPercent = 0.18;
  }

  var offset = windowHeight * offsetPercent;

  if (scrollTop > elementTop + elementHeight - windowHeight + offset) {
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
    scrollTop = $(window).scrollTop();

  if (
    scrollTop > elementTop &&
    scrollTop < elementTop + elementHeight - windowHeight
  ) {
    $("body").addClass("dark");
    $("#creativity").addClass("show-text");
  } else {
    $("body").removeClass("dark");
    $("#creativity").removeClass("show-text");
  }
}

// Parallax
////////////////////////////////////////////////////////////////////////////////
function parallax(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop(),
    diff = scrollTop - elementTop,
    pos = Math.round(diff / element.attr("speed"));

  // only parallax when in view
  if (
    scrollTop + windowHeight >= elementTop &&
    scrollTop < elementTop + elementHeight
  ) {
    element.css("transform", "translateY(" + pos + "px)");
  }
}
