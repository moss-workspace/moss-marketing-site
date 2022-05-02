// Document Ready
////////////////////////////////////////////////////////////////////////////////
var parallaxDepthHasBeenSet = false;
$(document).ready(function () {
  var consent = getCookie("analytics-consent");
  if (consent == "" || consent == null) {
    // prettier-ignore
    gtag("consent", "default", {
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
    });
    showCookiePrompt();
  }
  $(".toast").click(function () {
    if ($(this).attr("id") !== "cookieprompt") {
      $(this).hide();
    }
  });

  setParallaxDepth($(this));
  parallax($(this));

  togglePreviewInfo();
  chooseFooterImage();
});

$(".preview__first-load").on("load", function() {
  $(".parallax").each(function () {
    setParallaxDepth($(this));
    parallax($(this));
  });
});

// Window resize
////////////////////////////////////////////////////////////////////////////////
$( window ).resize(function() {
  togglePreviewInfo();
  setParallaxDepth($(this));
});

// Scroll
////////////////////////////////////////////////////////////////////////////////
var lastScrollTop = 0;
$(window).scroll(function (event) {
  
  toggleHeader();
  
  $(".reveal").each(function () {
    reveal($(this));
  });

  $(".animation-trigger").each(function () {
    animateKeyframes($(this));
  });

  $(".parallax").each(function () {
    parallax($(this));
  });
});

// Header nav
////////////////////////////////////////////////////////////////////////////////
function toggleHeader() {
  var scrollTop = $(this).scrollTop();
  if (scrollTop < lastScrollTop) {
    $("header").addClass("down");
  } else {
    $("header").removeClass("down");
  }
  lastScrollTop = scrollTop;
}

function toggleFullscreenNav() {
  $('.fullscreen-nav').toggle();
  if ($('.fullscreen-nav').is(':visible')) {
    $('body').css('overflow', 'hidden');
    $('.fullscreen-nav__icon-closed').show();
    $('.fullscreen-nav__icon-open').hide();
  } else {
    $('body').css('overflow', 'auto');
    $('.fullscreen-nav__icon-closed').hide();
    $('.fullscreen-nav__icon-open').show();
  }
}

// Animations
////////////////////////////////////////////////////////////////////////////////
function reveal(element) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    windowTop = $(window).scrollTop(),
    offset = windowHeight * element.attr("offset");

  if (windowTop > elementTop + elementHeight - windowHeight + offset) {
    element.addClass("visible");
  } else {
    element.removeClass("visible");
  }
}

function animateKeyframes(element) {
    var elementTop = element.offset().top,
      elementHeight = element.outerHeight(),
      windowTop = $(window).scrollTop(),
      windowHeight = $(window).height();

    // 0% means element has come into view, 100% means element has left view.
    var percentage = (windowTop + windowHeight - elementTop) / (windowHeight + elementHeight);
    if (percentage >= 0 && percentage <= 1) {
      element.find(".animation-target").css("--scroll", percentage);
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
  parallaxDepthHasBeenSet = true;
}

function togglePreviewInfo() {
  $(".parallax").each(function () {
    var element = $(this);
    if (element.width() < 125) {
      element.find('.preview__info').hide();
    }
  });
}

// Scroll to signup
////////////////////////////////////////////////////////////////////////////////
function scrollToSignup() {
  var bodyHeight = $("body").height(),
    scrollTop = $(window).scrollTop();

   var distance = bodyHeight;
   var closestSignup = null;

  $(".signup-form").each(function() {
    var elementTop = $(this).offset().top;
    var difference = Math.abs(scrollTop - elementTop)
    if (difference <= distance) {
      distance = difference
      closestSignup = $(this)
    }
  })

  $("html, body").animate({ scrollTop: closestSignup.parent().offset().top });
  closestSignup.find('input').first().focus()
}

// Footer image selection
////////////////////////////////////////////////////////////////////////////////
function chooseFooterImage() {
  var length = $('.footer__illustration').length;
  var random = Math.floor(Math.random() * length);
  $(".footer__illustration").eq(random).css("display", "block");
}

// Fill & submit mailchimp form from another form
////////////////////////////////////////////////////////////////////////////////
function joinWaitlist() {
  var email = $("#tagline-email").val();
  $("#mce-EMAIL").val(email);
  $("#mc-embedded-subscribe").click();
  $("#tagline-email").val("");
  return false;
}

// Update preferences
////////////////////////////////////////////////////////////////////////////////
function handleCookieAccept() {
  giveCookieConsent();
  hideCookiePrompt();
  if ($("#privacy__toggle")) {
    $("#privacy__toggle").addClass("on");
  }
}

function toggleCookieConsent() {
  var consent = getCookie("analytics-consent");
  if (consent == "true") {
    removeCookieConsent();
    $("#privacy__toggle").removeClass("on");
  } else {
    giveCookieConsent();
    $("#privacy__toggle").addClass("on");
  }
  if ($("#cookieprompt")) {
    hideCookiePrompt();
  }
}

function giveCookieConsent() {
  setCookie("analytics-consent", true, 365);
  // prettier-ignore
  gtag("consent", "update", {
    'analytics_storage': 'granted'
  });
}

function removeCookieConsent() {
  setCookie("analytics-consent", false, 365);
  // prettier-ignore
  gtag("consent", "update", {
    'analytics_storage': 'denied'
  });
}

// Cookie prompt
////////////////////////////////////////////////////////////////////////////////
function showCookiePrompt() {
  $("#cookieprompt").css("display", "flex");
}

function hideCookiePrompt() {
  $("#cookieprompt").css("display", "none");
}

// Basic Cookie Functions
////////////////////////////////////////////////////////////////////////////////
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
