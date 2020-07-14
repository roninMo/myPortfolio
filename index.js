// This gives the open class to the top nav on click, adding the transform properties we have in the css for a schnazzy nav
$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  //   The navbar links to different parts of the page
  $(".a-t").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".s-t").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".p-t").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".e-t").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".c-t").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
});
