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
 * Saving and loading from local storage
 */
var idsToSave = ['title', 'sideName', 'sideClass', 'sideAlias', 'sideGender', 'sideBorn', 'sideDied', 'sideHeight', 'sideWeight', 'sideHeightUnit2', 'sideNationality', 'sideAlignment', 'sideWeapon', 'sideLikes', 'sideDislikes', 'sideStr', 'sideEnd', 'sideAgi', 'sideMan', 'sideLuc', 'sideNP', 'np1Name', 'np1Chant', 'np1Classifier', 'np1Rank', 'np1Range', 'np1Targets', 'np2Name', 'np2Chant', 'np2Classifier', 'np2Rank', 'np2Range', 'np2Targets', 'cSkill1Name', 'cSkill1Rank', 'cSkill2Name', 'cSkill2Rank', 'cSkill3Name', 'cSkill3Rank', 'pSkill1Name', 'pSkill1Rank', 'pSkill2Name', 'pSkill2Rank', 'pSkill3Name', 'pSkill3Rank'];
var idsToSaveTextEditor = ['personality', 'backstory', 'otherInfo', 'description', 'weapon', 'np1Description', 'np1Effect', 'np2Description', 'np2Effect', 'cSkill1Description', 'cSkill2Description', 'cSkill3Description', 'pSkill1Description', 'pSkill1Example', 'pSkill2Description', 'pSkill2Example', 'pSkill3Description', 'pSkill3Example'];
var idsResetTextEditorMsg = [
'Your Servant’s personality and how well they work with their potential master.',
'Your Servant’s backstory. Remember to make it fit the setting of the RP and have it not break the rules of the Fate series. It is recommended you read the <b>#roleplay-lore</b> section for any further questions on the setting.',
'Anything you feel needs clarification goes here. For example, your Servant’s <b>wish</b>, <b>quirks</b>, and any <b>trivia</b> that can help you flesh out the character.',
'You can choose to describe how your character looks, or you can post a face claim or drawing of them in the Gallery section.',
'Details on your Servant’s weapon(s) go here, if needed.',
'You should at least include 1. Why your Servant has this NP/how does it relate to them 2.  What your Servant can accomplish with their Rank of the Noble Phantasm along with its limitations, if any.<br><br>If the NP has a chant, include it here as well.',
'Example(s) of usage, if applicable.',
'You should at least include 1. Why your Servant has this NP/how does it relate to them 2.  What your Servant can accomplish with their Rank of the Noble Phantasm along with its limitations, if any.<br><br>If the NP has a chant, include it here as well.',
'Example(s) of usage, if applicable.',
'Your Servant’s Skills that are tied to their Class. Simply look at Fate/Grand Order Wiki or Type-Moon Wiki for reference on what skills each Class usually has. (Example: Independent Action for Archers, Territory Creation for Casters etc.)<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Your Servant’s Skills that are tied to their Class. Simply look at Fate/Grand Order Wiki or Type-Moon Wiki for reference on what skills each Class usually has. (Example: Independent Action for Archers, Territory Creation for Casters etc.)<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Your Servant’s Skills that are tied to their Class. Simply look at Fate/Grand Order Wiki or Type-Moon Wiki for reference on what skills each Class usually has. (Example: Independent Action for Archers, Territory Creation for Casters etc.)<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.',
'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.',
'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that skill restrictions exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.'

];


/*
 * Save data in local storage 1 second after each key press
 */
// input fields
function saveFormData(divId) {
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem(divId, document.getElementById(divId).value);
    } else {
      document.getElementById("divId").value = "Sorry, your browser does not support Web Storage...";
    }
}
function saveFormDataAll() {
    for (var i = 0; i < idsToSave.length; i++) {
        if (document.getElementById(idsToSave[i]) != null) {
            saveFormData(idsToSave[i]);
        }
        
    }
}
// text editors
function saveFormDataTextEditor(divId) {
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem(divId, $('#' + divId).trumbowyg('html'));
    } else {
      document.getElementById("divId").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function saveFormDataAllTextEditor() {
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        if (document.getElementById(idsToSaveTextEditor[i]) != null) {
            saveFormDataTextEditor(idsToSaveTextEditor[i]);
        }
        
    }
}


/*
 * Auto save event handlers
 */
var saveToLocalTimeoutId;
// input fields
$('form input, form textarea, form select, form button, form option').on('input propertychange change', function() {
    var toSaveId = $(this).attr('id');
    clearTimeout(saveToLocalTimeoutId);
    timeoutId = setTimeout(function() {
        // Runs 1 second (1000 ms) after the last change    
        saveFormData(toSaveId);
    }, 1000);
});
// text editors
$('.trumbowyg-editor').on('keyup', function() {
    var toSaveId = $(this).attr('id');
    clearTimeout(saveToLocalTimeoutId);
    timeoutId = setTimeout(function() {
        // Runs 1 second (1000 ms) after the last change    
        saveFormDataTextEditor(toSaveId);
    }, 1000);
});


/*
 * Populate eligible reference tabs from local storage data upon page startup
 */
function populateReferenceTabs() {
    let paramsToPopulate = ['sideStr', 'sideEnd', 'sideAgi', 'sideMan', 'sideLuc', 'sideNP'];
    if (document.getElementById('title') != null) {
        getWikipediaPage(document.getElementById('title').value);
    }
    if (document.getElementById('sideNationality') != null) {
        helperRegion();
    }
    if (document.getElementById('sideAlignment') != null) {
        helperAlignment();
    }
    for (var i = 0; i < paramsToPopulate.length; i++) {
        if (document.getElementById(paramsToPopulate[i]) == null) {
            break;
        } else if (i == (paramsToPopulate.length - 1)) {

            helperParam();
        }
    }

}



/*
 * Load data from local storage upon page startup
 */
 // input fields
function loadFormData(divId) {
    if (localStorage.getItem(divId) != null && document.getElementById(divId) != null) {
        document.getElementById(divId).value = localStorage.getItem(divId);
    }
}
$( document ).ready(function() {
    // retrieve cache data, if any
    for (var i = 0; i < idsToSave.length; i++) {
        loadFormData(idsToSave[i]);
        populateReferenceTabs();
    }
});
// text editors
function loadFormDataTextEditor(divId) {
    if (localStorage.getItem(divId) != null && document.getElementById(divId) != null) {
        var toLoad = localStorage.getItem(divId);
        toLoad = toLoad.replace(/<[^>]*>/g,"");

        // no local storage - use preset
        if (toLoad == "") {
            $('#' + divId).trumbowyg('html', idsResetTextEditorMsg[idsToSaveTextEditor.indexOf(divId)])
        } else {
            $('#' + divId).trumbowyg('html', localStorage.getItem(divId))
        }
    }
}
$( document ).ready(function() {
    // retrieve cache data, if any
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        loadFormDataTextEditor(idsToSaveTextEditor[i]);
    }
});


/*
 * Clear all data on form, then save to local storage
 */
// input fields
function clearForm() {
    for (var i = 0; i < idsToSave.length; i++) {
        if (document.getElementById(idsToSave[i]) != null) {
            document.getElementById(idsToSave[i]).value = "";
        }
    }
 }
// text editors
function clearFormTextEditor() {
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        if (document.getElementById(idsToSaveTextEditor[i]) != null) {
            $('#' + idsToSaveTextEditor[i]).trumbowyg('html', idsResetTextEditorMsg[i])
        }
    }
 }
let myButtonClearForm = document.getElementById('clearFormData');
myButtonClearForm.addEventListener('click', () => {
    clearForm();
    clearFormTextEditor();
    saveFormDataAll();
    saveFormDataAllTextEditor();
});

 