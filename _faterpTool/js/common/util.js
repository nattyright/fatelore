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






var idsToSave = ['title', 
            'sideName', 
            'sideClass', 
            'sideAlias', 
            'sideGender', 
            'sideBorn', 
            'sideDied', 
            'sideHeight', 
            'sideWeight', 
            'sideHeightUnit2', 
            'sideNationality', 
            'sideAlignment', 
            'sideWeapon', 
            'sideLikes', 
            'sideDislikes', 
            'sideStr', 
            'sideEnd', 
            'sideAgi', 
            'sideMan', 
            'sideLuc', 
            'sideNP', 
            'personality', 
            'backstory', 
            'otherInfo', 
            'description', 
            'weapon', 
            'np1Name', 
            'np1Chant', 
            'np1Classifier', 
            'np1Rank', 
            'np1Range', 
            'np1Targets', 
            'np1Description', 
            'np1Effect', 
            'np2Name', 
            'np2Chant', 
            'np2Classifier', 
            'np2Rank', 
            'np2Range', 
            'np2Targets', 
            'np2Description', 
            'np2Effect', 
            'cSkill1Name', 
            'cSkill1Rank', 
            'cSkill1Description', 
            'cSkill2Name', 
            'cSkill2Rank', 
            'cSkill2Description', 
            'cSkill3Name', 
            'cSkill3Rank', 
            'cSkill3Description', 
            'pSkill1Name', 
            'pSkill1Rank', 
            'pSkill1Description', 
            'pSkill1Example', 
            'pSkill2Name', 
            'pSkill2Rank', 
            'pSkill2Description', 
            'pSkill2Example', 
            'pSkill3Name', 
            'pSkill3Rank', 
            'pSkill3Description', 
            'pSkill3Example'];



/*
 * Cache info in local storage
 */
function saveFormData(divId) {
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem(divId, document.getElementById(divId).value);
    } else {
      document.getElementById("divId").value = "Sorry, your browser does not support Web Storage...";
    }
}
/*
 * Load info from local storage
 */
function loadFormData(divId) {
    if (localStorage.getItem(divId) != null && document.getElementById(divId) != null) {
        document.getElementById(divId).value = localStorage.getItem(divId);
    }
}


$( document ).ready(function() {
    // retrieve cache data, if any
    for (var i = 0; i < idsToSave.length; i++) {
        loadFormData(idsToSave[i]);
    }
});


var saveToLocalTimeoutId;
$('form input, form textarea, form select, form button, form option').on('input propertychange change', function() {
    //console.log(this.value);
    var toSaveId = $(this).attr('id');

    clearTimeout(saveToLocalTimeoutId);
    timeoutId = setTimeout(function() {
        // Runs 1 second (1000 ms) after the last change    
        saveFormData(toSaveId);
    }, 1000);
});
