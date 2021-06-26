/* 
 * find servants with the same alignment
 */

function helperAlignment() {

  var servantData = canonServants;

  var alignment = document.getElementById('sideAlignment');
  if (alignment != null && alignment.value != "") {

    // show the servants with scoreDiff <= 3
    var html = "<center>Servants with the same alignment</center><br>"; 
    html += "<table><tr><th>NAME</th><th>CLASS</th><th>ALIGNMENT</th></tr>";
    for (servant of servantData) {
      html += getServantAlignmentTableHTML(servant, alignment.value);
    }

    html += "</table>"
    document.getElementById('infoHub').innerHTML = html;

  } else {

    document.getElementById('infoHub').innerHTML = "";

  }


}


function getServantAlignmentTableHTML(servant, alignment) {
  var s = servant;
  var message = "";

  if (s["sideAlignment"] == null) {
    return "";
  }


  var sAlign = s["sideAlignment"].toUpperCase();
  var align = alignment.toUpperCase();

  var hits = ['CHAOTIC NEUTRAL', 'TRUE NEUTRAL', 'LAWFUL NEUTRAL'];

  // canon data has the second neutral as 'balanced'
  if (hits.includes(align)) {
    switch(align.substr(0,4)) {
      case 'CHAO':
        if (sAlign != 'CHAOTIC BALANCED') {
          return ""
        } else {
          message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' +
                              s['sideClass'] + '</td><td>' + 
                              s['sideAlignment'] + '</td></tr>';   
        }
        break;
      case 'TRUE':
        if (sAlign != 'NEUTRAL BALANCED') {
          return ""
        } else {
          message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' +
                              s['sideClass'] + '</td><td>' + 
                              s['sideAlignment'] + '</td></tr>';   
        }
        break;
      case 'LAWF':
        if (sAlign != 'LAWFUL BALANCED') {
          return ""
        } else {
          message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' +
                              s['sideClass'] + '</td><td>' + 
                              s['sideAlignment'] + '</td></tr>';   
        }
        break;
      default:
         break;
    }

  } else if (sAlign == align ) {
    message = '<tr><td>' + 
                          s['title'].split("(")[0] + '</td><td>' +
                          s['sideClass'] + '</td><td>' + 
                          s['sideAlignment'] + '</td></tr>';
  }



  return message
}
