/* 
 * find servants from the same region
 */

function helperRegion() {

  var servantData = canonServants;

  var region = document.getElementById('sideNationality');
  if (region != null && region.value != "") {

    // show the servants with same region
    var html = ""; 
    html += "<table><tr><th>NAME</th><th>CLASS</th><th>REGION</th></tr>";
    for (servant of servantData) {
      html += getServantRegionTableHTML(servant, region.value);
    }

    html += "</table>"
    document.getElementById('infoHubRegion').innerHTML = html;

  } else {

    //document.getElementById('infoHubServantDataCompare').innerHTML = "";

  }


}


function getServantRegionTableHTML(servant, nationality) {
  var s = servant;

  if (s["sideNationality"] != null && 
    s["sideNationality"].toUpperCase() == nationality.toUpperCase().trim()) {
    var message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' + 
                              s['sideClass'] + '</td><td>' + 
                              s['sideNationality'] + '</td></tr>';
    return message
  }
  return "";
}




/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputRegion = document.getElementById('sideNationality');

//on keyup, start the countdown
myInputRegion.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputRegion.value) {
        typingTimer = setTimeout(helperRegion, doneTypingInterval);
    }
});