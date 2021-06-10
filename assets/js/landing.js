// Load
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".toast").click(function () {
    if ($(this) !== $("#cookieprompt")) {
      $(this).hide();
    }
  });
  $(".parallax").each(function () {
    setParallaxDepth($(this));
    parallax($(this));
  });
});

// Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function (event) {
  $(".reveal").each(function () {
    reveal($(this));
  });

  $(".stack").each(function () {
    stack($(this));
  });

  $(".parallax").each(function () {
    parallax($(this));
  });

  sizeStack();
  toggleBackgroundColor();
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
  var wrapperTop = $("#files__stack__wrapper").offset().top,
    wrapperHeight = $("#files__stack__wrapper").outerHeight(),
    windowHeight = $(window).height(),
    elementZ = element.css("z-index"),
    scrollTop = $(window).scrollTop(),
    offset = wrapperHeight * (elementZ / 600);

  if (scrollTop > wrapperTop + offset - windowHeight) {
    element.addClass("visible");
  } else {
    element.removeClass("visible");
  }
}

function parallax(element) {
  var elementTop = element.offset().top,
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop(),
    diff = scrollTop - elementTop,
    pos = diff / element.attr("speed");

  element.css("transform", "translateY(" + pos + "px)");
}

function setParallaxDepth(element) {
  var speed = element.attr("speed");
  if (speed) {
    element.css("z-index", speed);
  } else {
    element.css("z-index", "1");
  }
}

// Files
////////////////////////////////////////////////////////////////////////////////
function sizeStack(element) {
  var element = $("#files__stack"),
    elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop();

  if (scrollTop > elementTop + elementHeight - windowHeight) {
    $(".files__stack__content").addClass("shrink");
  } else {
    $(".files__stack__content").removeClass("shrink");
  }
}

// Background
////////////////////////////////////////////////////////////////////////////////
function toggleBackgroundColor() {
  var windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop();

  if (
    scrollTop >
    $("#files").offset().top + $("#files").outerHeight() - windowHeight / 2
  ) {
    $("body, header").removeClass("dark");
  } else if (scrollTop > $("#desktop").offset().top - windowHeight) {
    $("body, header").addClass("dark");
  } else {
    $("body, header").removeClass("dark");
  }
}

// Scroll to signup
////////////////////////////////////////////////////////////////////////////////
function scrollToSignup() {
  $("html, body").animate({ scrollTop: $("#signup").offset().top });
}