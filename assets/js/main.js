$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".header-area").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 300) {
      $(".scroll-top").show();
      $(".header-area").addClass("overlay");
    } else {
      $(".scroll-top").hide();
      $(".header-area").removeClass("overlay");
    }

    $(".loader").fadeOut(300);
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // filter items on button click
  // init Isotope
  var $grid = $(".portfolio").isotope({
    itemSelector: ".portfolio-box",
  });
  // filter items on button click
  $(".portfolio-list").on("click", function () {
    $(".portfolio-list").removeClass("filter-active");

    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(this).addClass("filter-active");
  });

  // Owl Carousel

  $(".testimonials").owlCarousel({
    items: 1,
    loop: true,
    rewind: true,
    nav: true,
    autoplay: true,
    dotClass: "bullets",
    dotsClass: "bullets-btn",
  });

  // One Page Scrolling
  $(".navbar-nav").onePageNav({
    currentClass: "current",
  });

  $(window).scrollTop(0);
});
var typed = new Typed(".myText", {
  strings: ["Zahabul Islam", "Web Developer", "Graphics Designer"],
  smartBackspace: true, // Default value
  loop: true,
  backDelay: 2000,
  typeSpeed: 20,
});
