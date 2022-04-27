// Document Ready
////////////////////////////////////////////////////////////////////////////////
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
  chooseFooterImage();
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


// Scroll
////////////////////////////////////////////////////////////////////////////////
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var scrollTop = $(this).scrollTop();
  if (scrollTop < lastScrollTop) {
    $("header").addClass("down");
  } else {
    $("header").removeClass("down");
  }
  lastScrollTop = scrollTop;
  
  $(".reveal").each(function () {
    reveal($(this));
  });
});

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
