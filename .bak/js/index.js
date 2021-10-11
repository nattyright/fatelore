$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 500);

    
    $('.subslide-nav').removeClass('active');
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').find('.subslide-nav[data-slide=' + next + '1' + ']').addClass('active');
    $('.subslide--active').removeClass('subslide--active');
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').find('.subslide__content[data-slide=' + next + '1' + ']').addClass('subslide--active');
    
    
  }
});


$('.subslide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.subslide--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.subslide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.subslide--active').removeClass('subslide--active');
    $('.flex__content').find('.subslide__content[data-slide=' + next + ']').addClass('subslide--active');
  }
});