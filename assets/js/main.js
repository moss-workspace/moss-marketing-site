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
  $(".reveal").each(function () {
    reveal($(this));
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
function reveal(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(this).scrollTop(),
    offset = windowHeight * element.attr("offset");

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

  if (scrollTop > elementTop + elementHeight) {
    $("body").addClass("white");
    $("body").removeClass("dark");
    $("#creativity").removeClass("show-text");
  } else if (scrollTop > elementTop - windowHeight) {
    $("body").addClass("dark");
    $("body").removeClass("white");
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

  element.css("transform", "translateY(" + pos + "px)");

  // uncomment to only parallax when in view
  // if (
  //   scrollTop + windowHeight >= elementTop &&
  //   scrollTop < elementTop + elementHeight
  // ) {
  //   element.css("transform", "translateY(" + pos + "px)");
  // }
}
