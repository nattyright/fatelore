/*
 * Seasons nav bar
 */

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


/*
 * Word counter
 */

/*
var arr = [], l = document.links;
for (var i = 0; i < l.length; i++) {
    arr.push(l[i].href);
}
document.getElementById('word-counter-wrapper').innerHTML = arr;
*/