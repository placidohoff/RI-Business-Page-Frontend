$("#business-carousel").carousel();

// Enable Carousel Indicators
$(".carousel-item").click(function(){
  $("#business-carousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});
$(".right").click(function(){
  $("#myCarousel").carousel("next");
});