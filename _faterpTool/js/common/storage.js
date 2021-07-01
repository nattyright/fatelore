/*
 * Saving and loading from local storage
 */
var idsToSave = ['title', 'sideName', 'sidePic', 'sideClass', 'sideAlias', 'sideGender', 'sideBorn', 'sideDied', 'sideHeight', 'sideHeightUnit', 'sideWeight', 'sideWeightUnit', 'sideHeight2', 'sideHeightUnit2', 'sideNationality', 'sideAlignment', 'sideWeapon', 'sideLikes', 'sideDislikes', 'sideStr', 'sideEnd', 'sideAgi', 'sideMan', 'sideLuc', 'sideNP', 'np1Name', 'np1Chant', 'np1Classifier', 'np1Rank', 'np1Range', 'np1Targets', 'np2Name', 'np2Chant', 'np2Classifier', 'np2Rank', 'np2Range', 'np2Targets', 'cSkill1Name', 'cSkill1Rank', 'cSkill2Name', 'cSkill2Rank', 'cSkill3Name', 'cSkill3Rank', 'pSkill1Name', 'pSkill1Rank', 'pSkill2Name', 'pSkill2Rank', 'pSkill3Name', 'pSkill3Rank'];
var idsToSaveTextEditor = ['personality', 'backstory', 'otherInfo', 'description', 'weapon', 'np1Description', 'np1Effect', 'np2Description', 'np2Effect', 'cSkill1Description', 'cSkill2Description', 'cSkill3Description', 'pSkill1Description', 'pSkill1Example', 'pSkill2Description', 'pSkill2Example', 'pSkill3Description', 'pSkill3Example'];
var idsResetTextEditorMsg = [
'Your Servant’s personality and how well they work with their potential master.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'Your Servant’s backstory. Remember to make it fit the setting of the RP and have it not break the rules of the Fate series. It is recommended you read the <b>#roleplay-lore</b> section for any further questions on the setting.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'Anything you feel needs clarification goes here. For example, your Servant’s <b>wish</b>, <b>quirks</b>, and any <b>trivia</b> that can help you flesh out the character.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'You can choose to describe how your character looks <b>in this text box</b>, or you can post a face claim or drawing of them in the Gallery section <b>after generating the Google Doc</b>.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'Details on your Servant’s weapon(s) go here, if needed.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'You should at least include 1. Why your Servant has this NP/how does it relate to them 2.  What your Servant can accomplish with their Rank of the Noble Phantasm along with its limitations, if any.<br><br>If the NP has a chant, include it here as well.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Example(s) of usage, if applicable.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'You should at least include 1. Why your Servant has this NP/how does it relate to them 2.  What your Servant can accomplish with their Rank of the Noble Phantasm along with its limitations, if any.<br><br>If the NP has a chant, include it here as well.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Example(s) of usage, if applicable.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'Your Servant’s Skills that are tied to their Class. Please use the <b>"Class Skills"</b> tab on the right to reference skills from canon Servants sharing your Servant Class.<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Your Servant’s Skills that are tied to their Class. Please use the <b>"Class Skills"</b> tab on the right to reference skills from canon Servants sharing your Servant Class.<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Your Servant’s Skills that are tied to their Class. Please use the <b>"Class Skills"</b> tab on the right to reference skills from canon Servants sharing your Servant Class.<br><br>A description of why this skill pertains to your Servant specifically is also necessary. In addition, include what your Servant can accomplish with their Ranks of Class Skills.<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',

'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Your Servant’s Skills that are either unique to them, or similar to existing Skills shared by other Servants. They are usually based on personal traits or the Servant’s biography, so make sure that they are accurate to your Servant’s history. Some Servants share the same Skills, but under different Ranks (Example: Charisma, Mind’s Eye, Innocent Monster etc.)<br><br>Please note that <b>skill restrictions</b> exist on this server. For a detailed list of them, please refer to the help section on the google doc template, or ask us on discord.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>',
'Please include a description of what your Servant can accomplish with their Ranks of Personal Skills.<br><br><b>BOLD and <i>ITALIC</i> formatting will NOT translate to Google Docs when you generate the sheet. They only exist as visual aid.</b>'

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
        generatePreview();
    }, 1000);
});
// text editors
$('.trumbowyg-editor').on('keyup', function() {
    var toSaveId = $(this).attr('id');
    clearTimeout(saveToLocalTimeoutId);
    timeoutId = setTimeout(function() {
        // Runs 1 second (1000 ms) after the last change    
        saveFormDataTextEditor(toSaveId);
        generatePreview();
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
        if (document.getElementById(divId).type == 'select-one') {
            var availableRanks = ['A', 'B', 'C', 'D', 'E', 'EX'];
            var unavailableIds = ['sideClass', 'sideHeightUnit', 'sideHeightUnit2', 'sideWeightUnit'];
            if (!availableRanks.includes(localStorage.getItem(divId)) && !unavailableIds.includes(divId)) {
                document.getElementById(divId).selectedIndex = 6;
                changeRankFields(divId, divId + 'Other');
                var elem = document.getElementById(divId);
                elem.options[6].value = localStorage.getItem(divId);
                elem.options[6].text = localStorage.getItem(divId);
                document.getElementById(divId + 'Other').value = localStorage.getItem(divId);
                //console.log(elem.options[6].value);
                

            }
        }
    }
}
$( document ).ready(function() {
    // retrieve cache data, if any
    for (var i = 0; i < idsToSave.length; i++) {
        loadFormData(idsToSave[i]);
        // check if we need to show imperial measurement for height unit 2
        if (idsToSave[i] == "sideHeightUnit") {
            changeMeasurementSystemHeight(document.getElementById(idsToSave[i]).value)
        }
    }
    populateReferenceTabs();
});
// text editors
function loadFormDataTextEditor(divId) {
    if (localStorage.getItem(divId) != null && document.getElementById(divId) != null) {
        var toLoad = localStorage.getItem(divId);
        toLoad = toLoad.replace(/<[^>]*>/g,"");

        // no local storage - use preset
        if (toLoad == "") {
            $('#' + divId).trumbowyg('html', '<p>' + idsResetTextEditorMsg[idsToSaveTextEditor.indexOf(divId)] + '</p>');
        } else {
            $('#' + divId).trumbowyg('html', localStorage.getItem(divId));
        }
    } else if (localStorage.getItem(divId) == null && document.getElementById(divId) != null) {
        $('#' + divId).trumbowyg('html', '<p>' + idsResetTextEditorMsg[idsToSaveTextEditor.indexOf(divId)] + '</p>');
    }
}
$( document ).ready(function() {
    // retrieve cache data, if any
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        loadFormDataTextEditor(idsToSaveTextEditor[i]);
    }
    generatePreview();
});




/*
 * Clear all data on form, then save to local storage
 */
// input fields
function clearForm() {
    for (var i = 0; i < idsToSave.length; i++) {
        if (document.getElementById(idsToSave[i]) != null && document.getElementById(idsToSave[i]).type == 'select-one') { // if it's a select form, rest to the first option
            document.getElementById(idsToSave[i]).selectedIndex = 0;

        } else if (document.getElementById(idsToSave[i]) != null) {
            document.getElementById(idsToSave[i]).value = "";
        }
    }
 }
// text editors
function clearFormTextEditor() {
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        if (document.getElementById(idsToSaveTextEditor[i]) != null) {
            $('#' + idsToSaveTextEditor[i]).trumbowyg('html', '<p>' + idsResetTextEditorMsg[i] + '</p')
        }
    }
 }

// 'are you sure' dialog before resetting the sheet

function resetSheetConfirmation() {
    $( function() {
        $( "#reset-sheet-message" ).dialog({
          modal: true,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
              clearAllData();
            }
          }
        });
      } );
}

function clearAllData() {
    clearForm();
    clearFormTextEditor();
    saveFormDataAll();
    saveFormDataAllTextEditor();
    generatePreview();
}

let myButtonClearForm = document.getElementById('clearFormData');
myButtonClearForm.addEventListener('click', () => {
    resetSheetConfirmation();
});

 


/*
 * Generate RAW text
 */
function generateRawData() {
    //'{"name":"John", "age":30, "city":"New York"}'
    // generate raw data in JSON format
    var rawData = {};
    for (var i = 0; i < idsToSave.length; i++) {
        if (document.getElementById(idsToSave[i]) != null) {
            rawData[idsToSave[i]] = document.getElementById(idsToSave[i]).value;
        }
    }
    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        if (document.getElementById(idsToSaveTextEditor[i]) != null) {
            rawData[idsToSaveTextEditor[i]] = $('#' + (idsToSaveTextEditor[i])).trumbowyg('html');
        }
    }
    rawData = JSON.stringify(rawData);

    var win = window.open('', '_blank', 'width="100%",height="100%"');
    win.document.write('<html><head></head><body><textarea readonly style="resize: none;width:100%;height:100%;padding:10px 10px;">' + rawData + '</textarea></body></html>');
    appendPre("Data generated in new window. If there is no new window, check your pop-up blocker.");
}


/*
 * Load RAW text
 */
function loadRawData() {
    var rawData = document.getElementById('importBox').value;
    try {
        rawData = JSON.parse(rawData);
        //console.log(rawData);

        for (var i = 0; i < idsToSave.length; i++) {
            if (document.getElementById(idsToSave[i]) != null) {
                document.getElementById(idsToSave[i]).value = rawData[idsToSave[i]];
            }
        }
        for (var i = 0; i < idsToSaveTextEditor.length; i++) {
            if (document.getElementById(idsToSaveTextEditor[i]) != null) {
                $('#' + (idsToSaveTextEditor[i])).trumbowyg('html', rawData[idsToSaveTextEditor[i]]);
            }
        }
        saveFormDataAll();
        saveFormDataAllTextEditor();
        generatePreview();
        appendPre("Successfully imported data.");
    } catch (e) {
        appendPre("Invalid data.");
    }

    document.getElementById('importDataWrapper').innerHTML = '';
}
function importData() {
    var importBox = document.createElement('textarea');
    importBox.id = 'importBox'
    importBox.style.width = "100%";
    var submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit Data';
    submitButton.onclick = function() { loadRawData() };

    var insertLoc = document.getElementById('importDataWrapper');
    insertLoc.innerHTML = "";
    insertLoc.appendChild(importBox);
    insertLoc.appendChild(submitButton);
}
