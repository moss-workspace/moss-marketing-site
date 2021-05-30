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

  $(".stack").each(function () {
    stack($(this));
  });

  $(".parallax").each(function () {
    parallax($(this));
  });

  sizeStack($("#files__stack"));

  toggleBackground($("#creativity"));
});

// Animations
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

function stack(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop();
}

function parallax(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop(),
    diff = scrollTop - elementTop,
    pos = Math.round(diff / element.attr("speed"));

  element.css("transform", "translateY(" + pos + "px)");
}

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

// Files
////////////////////////////////////////////////////////////////////////////////
function sizeStack(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop();

  if (scrollTop > elementTop + elementHeight - windowHeight) {
    $(".files__stack__content").addClass("shrink");
  } else {
    $(".files__stack__content").removeClass("shrink");
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
