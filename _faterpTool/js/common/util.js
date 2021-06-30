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