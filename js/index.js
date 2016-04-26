$(document).ready(function() {
  // Init Slider
  $('.owl-slider').owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
  });
  // Pref add class active to 1st thumbnail via js
  $('.thumbnail').eq(0).addClass('active');
  // When slider autoplay or drag is true 
  $('.owl-slider').on('changed.owl.carousel', function(event) {
    $('.thumbnail').removeClass('active');
    var sliders = 4;
    var currentItem = event.item.index - 2;
    if(currentItem >= sliders) {
      currentItem = 0;
    }
    $('.thumbnail').eq(currentItem).addClass('active');
  });
  // When thumbnail is clicked
  $('.thumbnail a').click(function(event) {
    event.preventDefault();
    $('.thumbnail').removeClass('active');
    var index = $('.thumbnail a').index(this);
    $('.thumbnail').eq(index).addClass('active');
    $('.owl-slider').trigger('to.owl.carousel', [index, 300, true]);
  });
});