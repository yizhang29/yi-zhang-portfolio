(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({ scrollTop: (target.offset().top - 65) }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({ target: '#mainNav', offset: 54 });

  $(".modal").on("shown.bs.modal", function() {
    history.pushState(null, null, "#" + $(this).attr('id'));
  });
  $(window).on('popstate', function() {
    $(".modal").modal('hide');
  });

  var navbarCollapse = function() {
    $("#mainNav").toggleClass("navbar-shrink", $("#mainNav").offset().top > 100);
  };

  $(window).scroll(function() {
    if ($(window).scrollTop() > 35) {
      $("#mainNav").addClass('active');
    } else if (!$("#mainNav").hasClass('hamburger-active')) {
      $("#mainNav").removeClass('active', 1000);
    }
  });

  $(window).scroll(function() {
    $(this).scrollTop() > 0 ? $("#scroll-top").fadeIn(1000) : $("#scroll-top").fadeOut(1000);
  });

  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);

function changeIcon() {
  var menuIcon = document.getElementsByClassName('navbar-toggler')[0];
  if (!menuIcon) return;
  menuIcon.classList.toggle("change");
  if ($("#mainNav").hasClass('hamburger-active')) {
    $("#mainNav").removeClass('hamburger-active');
    if ($(window).scrollTop() <= 35) $("#mainNav").removeClass('active');
  } else {
    $("#mainNav").addClass('hamburger-active active');
  }
}
