
// Client ID and API key from the Developer Console
var CLIENT_ID = '778097834484-silhbl6nl43o4i34bl06t53skaqg8qqi.apps.googleusercontent.com'
var API_KEY = 'AIzaSyDht0ZEh1-W2aTYzDmFVR88r4QUjSLFAo4';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1', 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file";

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
    signoutButton.style.display = 'block';
    printDocTitle();
    //printDocBody();
    //copyDoc();
    //updateDoc();
  } else {
    authorizeButton.style.display = 'block';
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
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Prints the title of a sample doc:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 */
function printDocTitle() {
  gapi.client.docs.documents.get({
  documentId: '1p5fTaP8l5YLXrm0RZNkhIScgZQOT4Tu8euaiXCMsF4w'
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
  documentId: '1p5fTaP8l5YLXrm0RZNkhIScgZQOT4Tu8euaiXCMsF4w'
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
    fileId: '1p5fTaP8l5YLXrm0RZNkhIScgZQOT4Tu8euaiXCMsF4w',
  }
  gapi.client.drive.files.copy(body)
  .then(function(res) { // Modified
    console.log(res);

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
      7: "title",
    93: "sideName",
    100: "sideClassIcon",
    107: "sidePic",
    121: "sideClass",
    133: "sideAlias",
    146: "sideGender",
    157: "sideBorn",
    168: "sideDied",
    181: "sideHeight",
    194: "sideWeight",
    212: "sideNationality",
    228: "sideAlignment",
    241: "sideWeapon",
    253: "sideLikes",
    268: "sideDislikes",
    318: "sideStr",
    322: "sideEnd",
    326: "sideAgi",
    348: "sideMan",
    352: "sideLuc",
    356: "sideNP",
    367: "personality",
    794: "backstory",
    980: "otherInfo",
    1164: "description",
    1351: "weapon",
    1530: "np1Name",
    1537: "np1Chant",
    1560: "np1Classifier",
    1571: "np1Rank",
    1583: "np1Range",
    1597: "np1Targets",
    1615: "np1Description",
    1628: "np1Effect",
    1637: "np2Name",
    1644: "np2Chant",
    1667: "np2Classifier",
    1678: "np2Rank",
    1690: "np2Range",
    1704: "np2Targets",
    1722: "np2Description",
    1735: "np2Effect",
    1941: "cSkill1Name",
    1954: "cSkill1Rank",
    1972: "cSkill1Description",
    1997: "cSkill2Name",
    2010: "cSkill2Rank",
    2028: "cSkill2Description",
    2053: "cSkill3Name",
    2066: "cSkill3Rank",
    2084: "cSkill3Description",
    2288: "pSkill1Name",
    2301: "pSkill1Rank",
    2319: "pSkill1Description",
    2344: "pSkill1Example",
    2372: "pSkill2Name",
    2385: "pSkill2Rank",
    2403: "pSkill2Description",
    2428: "pSkill2Example",
    2456: "pSkill3Name",
    2469: "pSkill3Rank",
    2487: "pSkill3Description",
    2512: "pSkill3Example",
    2624: "gallery"
  };

  var updateObject = {
    documentId: fileId,
    resource: {
      requests: [],
    },
  };
  
  var count = 0, specialIds = ['sideName', 'sideClassIcon', 'sidePic'];


  var keys = Object.keys(updateLoc);
  keys.sort(function(a,b) {return b - a});


 // for (let [key, value] of Object.entries(updateLoc)) {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i], value = updateLoc[key];
    
    var element = document.getElementById(value), content;

    // 3 special values without input areas at the beginning
    if (count < 3 && specialIds.includes(value)) {
      count++;

      if (value.localeCompare('sideName') == 0) {

        var titleEle = document.getElementById('title');
        if (titleEle != null && titleEle.value != "") {
          content = titleEle.value;
        } else {
          content = 'haha';
        }

      } else if (value.localeCompare('sideClassIcon') == 0) {
        content = 'N/A';
      } else if (value.localeCompare('sidePic') == 0) {
        content = 'N/A';
      }

    } else if (element != null && element.value != "") {
      content = element.value;
    } else {
      content = 'haha';
    }

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
    
  }
  //console.log(updateObject);

  
  gapi.client.docs.documents.batchUpdate(updateObject)
  .then(function(res) { // Modified
    console.log(res);
  },function(err) {
    console.error(err);
  });

  var pre = document.getElementById('docMessage');
  var textContent = "Please sign into your Google account first.";
  var URL = "https://docs.google.com/document/d/" + fileId;
  var textContent = "Google Doc URL: <a target='_blank' href='" + URL + "'>" + URL + "</a>";
  pre.innerHTML = textContent;
}




