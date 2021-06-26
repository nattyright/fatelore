/* 
 * find servants from the same region
 */

function helperRegion() {

  var servantData = canonServants;

  var region = document.getElementById('sideNationality');
  if (region != null && region.value != "") {

    // show the servants with scoreDiff <= 3
    var html = "<center>Servants from the Same Region</center><br>"; 
    html += "<table><tr><th>NAME</th><th>CLASS</th><th>REGION</th></tr>";
    for (servant of servantData) {
      html += getServantRegionTableHTML(servant, region.value);
    }

    html += "</table>"
    document.getElementById('infoHub').innerHTML = html;

  } else {

    document.getElementById('infoHub').innerHTML = "";

  }


}


function getServantRegionTableHTML(servant, nationality) {
  var s = servant;

  if (s["sideNationality"] != null && 
    s["sideNationality"].toUpperCase() == nationality.toUpperCase()) {
    var message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' + 
                              s['sideClass'] + '</td><td>' + 
                              s['sideNationality'] + '</td></tr>';
    return message
  }
  return "";
}
