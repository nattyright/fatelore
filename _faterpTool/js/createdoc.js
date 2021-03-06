
// Client ID and API key from the Developer Console
var CLIENT_ID = '778097834484-silhbl6nl43o4i34bl06t53skaqg8qqi.apps.googleusercontent.com'
var API_KEY = 'AIzaSyDht0ZEh1-W2aTYzDmFVR88r4QUjSLFAo4';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1', 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive"; 

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function() {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'inline-block';
    printDocTitle();
    //printDocBody();
    //copyDoc();
    //updateDoc();
  } else {
    authorizeButton.style.display = 'inline-block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('docMessage');
  var textContent = message;
  pre.innerText = textContent;
}

/**
 * Prints the title of a sample doc:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 */
function printDocTitle() {
  gapi.client.docs.documents.get({
  documentId: '1YaJHplrOmvtzUzzP-OI0uMM0MK27OsQt4iUQxcyUtAI'
}).then(function(response) {
  var doc = response.result;
  var title = doc.title;
  appendPre('Document "' + title + '" successfully found.\n');
}, function(response) {
  appendPre('Error: ' + response.result.error.message);
});
}

/**
 * Prints the JSON body of a document.
 */
function printDocBody() {
  gapi.client.docs.documents.get({
  documentId: '1YaJHplrOmvtzUzzP-OI0uMM0MK27OsQt4iUQxcyUtAI'
}).then(function(response) {
  var doc = response.result;
  appendPre(JSON.stringify(doc.body, null, 4));
},function(response) {
  appendPre('Error: ' + response.result.error.message);
  });
}

/**
 * Copies an existing document
 */
function copyDoc() {
  var body = {
    fileId: '1YaJHplrOmvtzUzzP-OI0uMM0MK27OsQt4iUQxcyUtAI',
  }
  gapi.client.drive.files.copy(body)
  .then(function(res) { // Modified
    //console.log(res);

    // get new file id
    var newFileId = res.result.id;
    console.log(newFileId);

    // update new file
    updateDoc(newFileId)

  },function(err) {
    var pre = document.getElementById('docMessage');
    var textContent = "Please sign into your Google account first.";
    pre.innerHTML = textContent;
    console.error(err);
  });
}

/**
 * Update a doc with fileId on google docs
 */
function updateDoc(fileId) {
  

  updateLoc = {
    463: "title",
    568: "sideName",
    575: "sideClassIcon",
    582: "sidePic",
    596: "sideClass",
    608: "sideAlias",
    621: "sideGender",
    632: "sideBorn",
    643: "sideDied",
    656: "sideHeight",
    669: "sideWeight",
    687: "sideNationality",
    703: "sideAlignment",
    716: "sideWeapon",
    728: "sideLikes",
    743: "sideDislikes",
    793: "sideStr",
    797: "sideEnd",
    801: "sideAgi",
    823: "sideMan",
    827: "sideLuc",
    831: "sideNP",
    848: "personality",
    1142: "backstory",
    1165: "otherInfo",
    1189: "description",
    1209: "weapon",

    1241: "np1Nameweapon",
    1248: "np1Chant",
    1271: "np1Classifier",
    1282: "np1Rank",
    1294: "np1Range",
    1308: "np1Targets",
    1326: "np1Description",
    1351: "np1Effect",
    1359: "np2Name",

    1366: "np2Chant",
    1389: "np2Classifier",
    1400: "np2Rank",
    1412: "np2Range",
    1426: "np2Targets",
    1444: "np2Description",
    1469: "np2Effect",

    1500: "cSkill1Name",
    1513: "cSkill1Rank",
    1531: "cSkill1Description",

    1539: "cSkill2Name",
    1552: "cSkill2Rank",
    1570: "cSkill2Description",

    1578: "cSkill3Name",
    1591: "cSkill3Rank",
    1609: "cSkill3Description",

    1643: "pSkill1Name",
    1656: "pSkill1Rank",
    1674: "pSkill1Description",
    1699: "pSkill1Example",

    1707: "pSkill2Name",
    1720: "pSkill2Rank",
    1738: "pSkill2Description",
    1763: "pSkill2Example",

    1771: "pSkill3Name",
    1784: "pSkill3Rank",
    1802: "pSkill3Description",
    1827: "pSkill3Example",

    1849: "gallery"
  };

  

  var updateObject = {
    documentId: fileId,
    resource: {
      requests: [],
    },
  };
  
  var count = 0, specialIds = ['sideName', 'sideClassIcon', 'sidePic', 'sideWeight', 'sideHeight', 'sideHeight2'];
  var updateIdFromTextEditor = ['personality', 'backstory', 'otherInfo', 'description', 'weapon', 'np1Description', 'np1Effect', 'np2Description', 'np2Effect', 'cSkill1Description', 'cSkill2Description', 'cSkill3Description', 'pSkill1Description', 'pSkill1Example', 'pSkill2Description', 'pSkill2Example', 'pSkill3Description', 'pSkill3Example'];
  var multiPara = false;


  var keys = Object.keys(updateLoc);
  keys.sort(function(a,b) {return b - a});


 // for (let [key, value] of Object.entries(updateLoc)) {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i], value = updateLoc[key];
    
    var element = document.getElementById(value), content = '';

    // omit the 3 special values without input areas at the beginning
    if (count < 6 && specialIds.includes(value)) {
      count++;

      if (value.localeCompare('sideName') == 0) {

        var titleEle = document.getElementById('title');
        if (titleEle != null && titleEle.value != "") {
          content = titleEle.value;
        } else {
          content = ''; // no data = no content to sent to google docs
        }

      } else if (value.localeCompare('sideClassIcon') == 0) {
        var servantClasseURL = {'Saber':'https://cdn.discordapp.com/attachments/694493129671442453/859534555596455966/image2.png',
                                'Archer':'https://cdn.discordapp.com/attachments/694493129671442453/859534571947294780/image5.png',
                                'Lancer':'https://cdn.discordapp.com/attachments/694493129671442453/859534587805302874/image7.png',
                                'Caster':'https://cdn.discordapp.com/attachments/694493129671442453/859534630931005450/image3.png',
                                'Rider':'https://cdn.discordapp.com/attachments/694493129671442453/859534644919795763/image1.png',
                                'Assassin':'https://cdn.discordapp.com/attachments/694493129671442453/859534655825117264/image9.png',
                                'Berserker':'https://cdn.discordapp.com/attachments/694493129671442453/859534664598945822/image6.png'};
        var getServantURL = servantClasseURL[document.getElementById('sideClass').value];

        // delete the default 'zz' message in every text area on the doc
        var newObjectDeletePrev = {
          deleteContentRange: {
            range: {
              startIndex: parseInt(key),
              endIndex: parseInt(key) + 2,
            }
          }
        };
        var newObject = {
          insertInlineImage: {
            uri: getServantURL,
            location: {
              index: parseInt(key)
            },

            
          }
        };
        updateObject.resource.requests.push(newObjectDeletePrev);
        updateObject.resource.requests.push(newObject);

        content = ''; // create inline image object here individually - no need to pass content
      } else if (value.localeCompare('sidePic') == 0) {

        // only get PFP if the URL isn't empty
        if (document.getElementById('sidePic') != null && document.getElementById('sidePic').value != '') {
          var getServantURL = document.getElementById('sidePic').value;

          // delete the default 'zz' message in every text area on the doc
          var newObjectDeletePrev = {
            deleteContentRange: {
              range: {
                startIndex: parseInt(key),
                endIndex: parseInt(key) + 2,
              }
            }
          };
          var newObject = {
            insertInlineImage: {
              uri: getServantURL,
              location: {
                index: parseInt(key)
              },

              objectSize: {         //2.47 in, 72PT to an in
                width: {
                    magnitude: 175,
                    unit: 'PT'
                }
              }

            }
          };
          updateObject.resource.requests.push(newObjectDeletePrev);
          updateObject.resource.requests.push(newObject);
        }

        content = '';
      } else if (value.localeCompare('sideWeight') == 0) {
        if (element.value) {
          content = element.value + document.getElementById('sideWeightUnit').value;
        }
      } else if (value.localeCompare('sideHeight') == 0) {
        if (element.value) {
          content = element.value + document.getElementById('sideHeightUnit').value;
        }
        // check if using imperial
        if (document.getElementById('sideHeight2') != null && document.getElementById('sideHeight2').value != "") {
          content = content + document.getElementById('sideHeight2').value + document.getElementById('sideHeightUnit2').value;
        }
      }

    } else if (element != null && !updateIdFromTextEditor.includes(element.id) && element.value != "") { //input fields go by 'value'
      content = element.value;
    } else if (element != null && updateIdFromTextEditor.includes(element.id) && $('#' + element.id).trumbowyg('html') != "") { //text editors are divs with html
      content = $('#' + element.id).trumbowyg('html');
      // strip formatting from html
      // <p><br></p> = empty lines = remove                 ""
      // </p> = new paragraph = [n] for double              \n
      // &nbsp; for white space at the end of para = remove ""
      // <> strip all other tags = no formatting
      content = content.replace(/<p><br><\/p>/g,"")
                       .replace(/<p><b><\/b><\/p>/g,"")
                       .replace(/<p><i><\/i><\/p>/g,"")
                       .replace(/<p[^>]*>[\s]*<\/p[^>]*>/g,"")
                       .replace(/<\/p[^>]*>/g,"[n]")
                       .replace(/&nbsp;/g,"")     
                       .replace(/<[^>]*>/g,"");
      content = content.split("[n]");
      //console.log(content);
      multiPara = true;
    } else {
      content = ''; // no data = no content to sent to google docs
    }


    if (multiPara == false && content != "") {
      //console.log(value);
      //console.log(content);
                    
          // delete the default 'zz' message in every text area on the doc
          var newObjectDeletePrev = {
            deleteContentRange: {
              range: {
                startIndex: parseInt(key),
                endIndex: parseInt(key) + 2,
              }
            }
          };

          var newObject = {
            insertText: {
              text: content,
              location: {
                index: parseInt(key),
              },
            },
          };

          // insert object to updateObject
          updateObject.resource.requests.push(newObjectDeletePrev);
          updateObject.resource.requests.push(newObject);
    } else if (multiPara == true) {
          multiPara = false;
          var paraStartIndex = parseInt(key);
          
          // delete the default 'zz' message in every text area on the doc
          var newObjectDeletePrev = {
            deleteContentRange: {
              range: {
                startIndex: paraStartIndex,
                endIndex: paraStartIndex + 2,
              }
            }
          };
          updateObject.resource.requests.push(newObjectDeletePrev);

          // insert each para in a loop
          for (var j = (content.length - 1); j >= 0; j--) {
            var contentFinal = content[j].trim();

            // only add newline for paras other than the last para
            if (j < (content.length - 2)) {
              contentFinal = contentFinal + "\n\n";
            }

            // only write to google docs if line isn't empty
            if (contentFinal != "") {
              var newObject = {
                insertText: {
                  text: contentFinal,
                  location: {
                    index: paraStartIndex,
                  },
                },
              };

              // insert object to updateObject
              updateObject.resource.requests.push(newObject);
            }

                
          }

    }


    
  }
  //console.log(updateObject);

  
  gapi.client.docs.documents.batchUpdate(updateObject)
  .then(function(res) { // Modified
    //console.log(res);
  },function(err) {
    console.error(err);
    console.log(updateLoc[parseInt(key)]);
  });

  var pre = document.getElementById('docMessage');
  var textContent = "Please sign into your Google account first.";
  var URL = "https://docs.google.com/document/d/" + fileId;
  var textContent = "Google Doc URL: <a target='_blank' href='" + URL + "'>" + URL + "</a>";
  pre.innerHTML = textContent;
}




