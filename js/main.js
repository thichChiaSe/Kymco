//menu-left
$(".btn").click(function () {
  $(".left-menu").addClass("active");
});

$(".left-menu").click(function () {
  $(".left-menu").removeClass("active");
});

//project-scroll
$(".lang__current").click(function () {
  $(".lang__ul").toggleClass("active");
});

$(".lang__ul li").click(function () {
  console.log($(this).text());
  $(".current").text($(this).text());
  $(".lang__ul").removeClass("active");
});
