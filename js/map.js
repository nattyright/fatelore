// change to _districts map
$('.loc').on('click', function(e) {
  // get city name
  var loc = $(this).data('loc');
  // change image src
  $(".map").attr('src','../images/maps/' + loc + '_districts.png');
});


// change to _base map
$('.info').on('click', function(e) {
  // get city name
  var loc = $(this).data('loc');
  // change image src
  $(".map").attr('src','../images/maps/' + loc + '_base.png');
});


// change the sidebar content
$('.sidebar-nav-item').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.sidebar-nav-item').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.flex--active').removeClass('flex--active');
    $('.sidebar').find('.sidebar-content[data-slide=' + next + ']').addClass('flex--active');
      
  }
});


// load footer navigation
$(document).ready(function (){
  //$("#header").load("header.html"); 
  $("#footer").load("../components/map_footer.html"); 
});