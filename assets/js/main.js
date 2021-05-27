$(window).scroll(function () {
  $(".desktop__image").each(function (index) {
    toggleDesktopImage($(this), index);
  });
});

function toggleDesktopImage(element, index) {
  var elementTop = element.offset().top,
    elementHeight = element.outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop(),
    offset = 100;

  if (index == 2) {
    offset = 250;
  }

  if (windowScroll > elementTop + elementHeight - windowHeight + offset) {
    element.addClass("visible");
  } else {
    element.removeClass("visible");
  }
}
