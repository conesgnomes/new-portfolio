$(window).scroll(function(){

  if ($(window).width() <= 759 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 60) {
      $('.navigation').addClass('fixed-mobile');
    }
    else {
      $('.navigation').removeClass('fixed-mobile');
    }
  }
  if ($(window).width() >= 760 && $(window).width() <= 999 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 20) {
      $('.navigation').addClass('fixed-tablet');
    }
    else {
      $('.navigation').removeClass('fixed-tablet');
    }
  }
  if ($(window).width() >= 1000 && $(window).width() <= 1199 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 40) {
      $('.navigation').addClass('fixed-desktop');
    }
    else {
      $('.navigation').removeClass('fixed-desktop');
    }
  }
  if ($(window).width() >= 1200 && $('body').hasClass("index")) {
    if ($(window).scrollTop() >= 42) {
      $('.navigation').addClass('fixed-desktop');
    }
    else {
      $('.navigation').removeClass('fixed-desktop');
    }
  }

  // Fixed header for all subpages

  if ($(window).width() <= 759 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 60) {
      $('.navigation').addClass('fixed-mobile-sub');
    }
    else {
      $('.navigation').removeClass('fixed-mobile-sub');
    }
  }
  if ($(window).width() >= 760 && $(window).width() <= 999 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 20) {
      $('.navigation').addClass('fixed-tablet-sub');
    }
    else {
      $('.navigation').removeClass('fixed-tablet-sub');
    }
  }
  if ($(window).width() >= 1000 && $(window).width() <= 1199 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 40) {
      $('.navigation').addClass('fixed-desktop-sub');
    }
    else {
      $('.navigation').removeClass('fixed-desktop-sub');
    }
  }
  if ($(window).width() >= 1200 && $('body').hasClass("subpage")) {
    if ($(window).scrollTop() >= 42) {
      $('.navigation').addClass('fixed-desktop-sub');
    }
    else {
      $('.navigation').removeClass('fixed-desktop-sub');
    }
  }
});
