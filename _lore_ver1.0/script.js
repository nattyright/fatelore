$(document).ready(function() {
  $('.raitrackcategory').click(function() {
    $(this).siblings().removeClass('raitrackcategoryactive');
    $(this).siblings().addClass('raitrackcategoryhidden');
    $(this).toggleClass('raitrackcategoryhidden raitrackcategoryactive');

    if ($(this).hasClass('raitrackcategoryhidden')) {
      $(this).closest('.raitrackcont').removeClass('raitrackcontactive');
      $(this).closest('.raitrackcont').siblings('.raitrackbot').removeClass('raitrackbotactive');
      
      // menu header size
      $(this).children('.raitrackmenu').removeClass('raitrackmenuactive');
    } else {
      $(this).closest('.raitrackcont').addClass('raitrackcontactive');
      $(this).closest('.raitrackcont').siblings('.raitrackbot').addClass('raitrackbotactive');
      
      // menu header size
      $(this).children('.raitrackmenu').addClass('raitrackmenuactive');
    }

  });
});
