// This gives the open class to the top nav on click, adding the transform properties we have in the css for a schnazzy nav
$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  //   The navbar links to different parts of the page
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // $('nav a[href*="#"]').on('click', function() {
  //   $('html, body').animate( keyframes: {
  //     scrollTop: $($(this).attr('href')).offset().top - 100
  //   }, options: 2000);
  // });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
});
