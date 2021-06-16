// Load
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  checkInstagram();
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

  toggleBackgroundColor();
  sizeStack();
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
    $("#files").offset().top + $("#files").outerHeight() - windowHeight / 4
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
  var bodyHeight = $("body").height(),
    scrollTop = $(window).scrollTop();

  if (scrollTop < bodyHeight / 2) {
    $("html, body").animate({ scrollTop: $("#hero").offset().top });
    $("#mce-EMAIL").focus();
  } else {
    $("html, body").animate({ scrollTop: $("#tagline").offset().top });
    $("#tagline-email").focus();
  }
}

// Scroll to manifesto
////////////////////////////////////////////////////////////////////////////////
function scrollToManifesto() {
  $("html, body").animate({ scrollTop: $("#desktop").offset().top - 150 });
}

// Fill & submit mailchimp form from another form
////////////////////////////////////////////////////////////////////////////////
function joinWaitlist() {
  var email = $("#tagline-email").val();
  $("#mce-EMAIL").val(email);
  $("#mc-embedded-subscribe").click();
  $("#tagline-email").val("");
}
