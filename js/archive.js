$('.slide-nav').on('click', function(e) {
    e.preventDefault(); 
    // get current slide
    var next = $(this).data('slide');
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');




    var $container = $('.flex__content'),
        $scrollTo = $('.year[data-slide=' + next + ']');


    // Or you can animate the scrolling:
    $container.animate({
        scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    });


});
