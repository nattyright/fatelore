/* 
 * find the most similar servants by parameter
 */

function helperParam() {

  var servantData = canonServants;
  var formScores = getParamScoresFromForm();
  if (formScores.length == 6) {
    servantData.forEach((value, index, array) => 
      addParamData(value, index, array,formScores));

    // sort by scoreDiff in ascending order
    servantData.sort(function(a, b) {
      return (a["paramScoreDiff"] - b["paramScoreDiff"]);
    });
    
    // show the servants with scoreDiff <= 3
    var html = "";
    html += "<table><tr><th>NAME</th><th>CLASS</th><th>STR</th><th>END</th><th>AGI</th><th>MAN</th><th>LUC</th><th>NP</th><th>SCORE</th></tr>";
    for (servant of servantData) {
      html += getServantParamTableHTML(servant, 3, 5);
    }

    html += "</table>"
    document.getElementById('infoHubParam').innerHTML = html;

  } else {

    //document.getElementById('infoHubServantDataCompare').innerHTML = "";
    
  }

}


function getServantParamTableHTML(value, scoreDiff, sumSquaredError) {
  var s = value;
  if (s["paramScoreDiff"] <= scoreDiff && s["paramSumSquaredError"] <= sumSquaredError) {
    var score = 6 - parseInt(s['paramSumSquaredError'], 10);
    var message = '<tr><td>' + 
                              s['title'].split("(")[0] + '</td><td>' +
                              s['sideClass'] + '</td><td>' +
                              s['param']['sideStr'].split("+")[0].split("-")[0] + '</td><td>' + 
                              s['param']['sideEnd'].split("+")[0].split("-")[0] + '</td><td>' + 
                              s['param']['sideAgi'].split("+")[0].split("-")[0] + '</td><td>' + 
                              s['param']['sideMan'].split("+")[0].split("-")[0] + '</td><td>' + 
                              s['param']['sideLuc'].split("+")[0].split("-")[0] + '</td><td>' + 
                              s['param']['sideNP'].split("+")[0].split("-")[0] + '</td><td>' + 
                              score.toString() + '</td></tr>';
    return message
  }
  return "";
}


function getParamScoresFromForm() {
  var score = [];
  var ids = ['sideStr', 'sideEnd', 'sideAgi', 'sideMan', 'sideLuc', 'sideNP'];
  ids.forEach(function(value) {
    var elem = document.getElementById(value);

    // input field is empty
    if (elem == null || elem.value == "") {
      return 0;
    } 

    // change input to uppercase - and save this value
    var upper = elem.value.toUpperCase();
    elem.value = upper;
    saveFormData(elem.id);

    var p = convertParamToInt(upper);
    // input field starts with an illegible letter
    if (p == 7) {
      return 0;
    }
    score.push(p);
  });
  return score;
}

/*
 * Calculate param score difference between an existing servant and the WIP servant
 */
function addParamData(value, index, array, formScores) {
  var servant = value;
  var servantScores = getParamScores(servant["param"]);
  var scoreDiff = 0;
  var sumSquaredError = 0;
  // calculate abs dif between form and servant params
  for (i = 0; i < 6; i++) {
    scoreDiff += Math.abs(formScores[i] - servantScores[i]);
    sumSquaredError += (formScores[i] - servantScores[i]) ** 2;
  }
  servant["paramSumSquaredError"] = sumSquaredError;
  servant["paramScoreDiff"] = scoreDiff;
}


function getParamScores(params) {
  var scores = [];
  Object.values(params).forEach(function(val) {
    scores.push(convertParamToInt(val));
  });

  return scores;
}


function convertParamToInt(param) {
  var p = param.substr(0, 1), i;
  switch(p) {
    case 'E':
      if (param.length == 1) {
        i = 1;
        break; 
      } else if (param.substr(0, 2) == 'EX') {
        i = 6;
        break;
      }
    case 'D':
      i = 2;
      break;
    case 'C':
      i = 3;
      break;
    case 'B':
      i = 4;
      break;
    case 'A':
      i = 5;
      break;
    case 'EX':
      i = 6;
      break;
    default:
      i = 7;
  }
  return i;
}





/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputStr = document.getElementById('sideStr');
let myInputEnd = document.getElementById('sideEnd');
let myInputAgi = document.getElementById('sideAgi');
let myInputMan = document.getElementById('sideMan');
let myInputLuc = document.getElementById('sideLuc');
let myInputNP = document.getElementById('sideNP');

//on keyup, start the countdown
myInputStr.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputStr.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});
myInputEnd.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputEnd.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});
myInputAgi.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputAgi.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});
myInputMan.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputMan.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});
myInputLuc.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputLuc.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});
myInputNP.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInputNP.value) {
        typingTimer = setTimeout(helperParam, doneTypingInterval);
    }
});