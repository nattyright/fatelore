/*
 * Global Vars
 */
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms (1 seconds)


/*
 * Check if an input field with Id has a valid value
 */
function getValueFromInput(divId) {
    var value = document.getElementById(divId);
    if(value != null) {
        if(value.value != "") {
            return value.value
        }
    }
    return false;
}


/*
 * Fetch info from given url
 */
async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}


/*
 * Hide buttons from main page
 */

function hideButtons() {
    document.getElementById('settingsTabWrapper').classList.add('hideMenu');
    document.getElementById('showMenu').classList.remove('hideMenu');
    document.getElementById('hideMenu').classList.add('hideMenu');
}


function showButtons() {
    document.getElementById('settingsTabWrapper').classList.remove('hideMenu');
    document.getElementById('hideMenu').classList.remove('hideMenu');
    document.getElementById('showMenu').classList.add('hideMenu');
}



/*
 * DARK MODE
 */
function turnOnDarkMode() {
  $('.personality').addClass('trumbowyg-dark');
  $('.backstory').addClass('trumbowyg-dark');
  $('.otherInfo').addClass('trumbowyg-dark');
  $('.description').addClass('trumbowyg-dark');
  $('.weapon').addClass('trumbowyg-dark');
  $('.np1Description').addClass('trumbowyg-dark');
  $('.np1Effect').addClass('trumbowyg-dark');
  $('.np2Description').addClass('trumbowyg-dark');
  $('.np2Effect').addClass('trumbowyg-dark');
  $('.cSkill1Description').addClass('trumbowyg-dark');
  $('.cSkill2Description').addClass('trumbowyg-dark');
  $('.cSkill3Description').addClass('trumbowyg-dark');
  $('.pSkill1Description').addClass('trumbowyg-dark');
  $('.pSkill2Description').addClass('trumbowyg-dark');
  $('.pSkill3Description').addClass('trumbowyg-dark');
  $('.pSkill1Example').addClass('trumbowyg-dark');
  $('.pSkill2Example').addClass('trumbowyg-dark');
  $('.pSkill3Example').addClass('trumbowyg-dark');

  $('div, input, textarea, select, option, label, ul, li, p, a, pre, button').addClass('darkMode');

  // delet the dark mode button because no one goes back once they make
  // the switch xD
  $('#darkModeButton').remove();
}