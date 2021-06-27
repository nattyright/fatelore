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
  //console.log(data);
  return data;
}




$(document).ready(function(){
    $.getScript("../servant/abigail-williams.js", function() {
       alert("Script loaded but not necessarily executed.");
       console.log(a);
       console.log("haha")
    });
});




//document.getElementById('infoHubServantPage')