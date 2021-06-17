// Slimmed down version of landing.js for the special waitlist page

// Load
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".parallax").each(function () {
    setParallaxDepth($(this));
    parallax($(this));
  });
});

// Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function (event) {
  $(".parallax").each(function () {
    parallax($(this));
  });
});

// Check for instagram in-app browser
////////////////////////////////////////////////////////////////////////////////
function checkInstagram() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
  if (isInstagram) {
    $(".files__stack__content").addClass("instagram");
  }
}

// Animations
////////////////////////////////////////////////////////////////////////////////
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

// Scroll to signup
////////////////////////////////////////////////////////////////////////////////
function scrollToSignup() {
  var bodyHeight = $("body").height(),
    scrollTop = $(window).scrollTop();

  $("html, body").animate({ scrollTop: $("#hero").offset().top });
  $("#mce-EMAIL").focus();
}
