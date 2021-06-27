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
 * Populate div innerhtml
 */
function replaceDivHtml(divId, html) {
    document.getElementById(divId).innerHTML = html;
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





