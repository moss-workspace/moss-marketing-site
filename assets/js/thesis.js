// Load
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  checkInstagram();
});

// Scroll
////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function (event) {
  $(".stack").each(function () {
    stack($(this));
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