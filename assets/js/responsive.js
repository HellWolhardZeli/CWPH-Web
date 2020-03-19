$(window).resize(function() {
  if ($(window).width() < 991) {
    $(".nav-tabs").removeClass("flex-column");
    $(".nav-tabs").addClass(".justify-content-center");
  }
});
