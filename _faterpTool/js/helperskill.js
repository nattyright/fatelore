/* 
 * display skill description from fandom wiki
 */

//TO-DO: show a list of applicable class skills, then open detailed
//       skill description in a new <div>

function helperClassSkill(inputField) {
    var servantData = canonServants;
    var className = document.getElementById('sideClass');
    var skillList = {};

    for(servant of servantData) {
        if (servant['sideClass'].toUpperCase() == className.value.toUpperCase()) {
            for(skillId in servant['cSkill']) {
                var skill = servant['cSkill'][skillId];
                if(skill['name'] in skillList) {
                    skillList[skill['name']] += 1;
                } else {
                    skillList[skill['name']] = 1;
                }
            }
        }
    }

    // get html table of skills used by servant in the class
    var html = "<center>Class Skills Used By Other " + className.value + "s</center>";
    html += "<table><tr><th>SKILL NAME</th></tr>";
    html += getClassSkillHTML(skillList);
    html += "</table>"
    document.getElementById('infoHubServantDataCompare').innerHTML = html;


    // if the skill name isn't empty, see if we can fetch the skill description from wikia
    if(inputField != null && inputField.value != "") {
        getSkillInfoFromWiki(inputField.value);
    }
    
}



function helperPersonalSkill(inputField) {
    var servantData = canonServants;
    var className = document.getElementById('sideClass');
    var skillList = {};

    for(servant of servantData) {
        if (servant['sideClass'].toUpperCase() == className.value.toUpperCase()) {
            for(skillId in servant['pSkill']) {
                var skill = servant['pSkill'][skillId];
                if(skill['name'] in skillList) {
                    skillList[skill['name']].push(servant['title']);
                } else {
                    skillList[skill['name']] = [servant['title']];
                }
            }
        }
    }
    
    // get html table of skills used by servant in the class
    var html = "<center>Personal Skills Used By Other " + className.value + "s</center>";
    html += "<table><tr><th>SERVANT NAME</th><th>SKILL NAME</th></tr>";
    html += getPersonalSkillHTML(skillList);
    html += "</table>"
    document.getElementById('infoHubServantDataCompare').innerHTML = html;


    // if the skill name isn't empty, see if we can fetch the skill description from wikia
    document.getElementById('infoHub').innerHTML = "";
    for(key in skillList) {
        getPersonalSkillInfoFromWiki(key);
    }
}




function getClassSkillHTML(skillList) {
  var message = "";
  for(key in skillList) {
      if (key != "") {
        message += '<tr><td>' + key + '</td></tr>';
        
      }
  }
  return message;
}



function getPersonalSkillHTML(skillList) {
  var message = "";
  for(key in skillList) {
      if (key != "") {
        message += '<tr><td>' + skillList[key] + '</td><td>' + key + '</td></tr>';
        
      }
  }
  return message;
}



/*
 * Put wiki skill description in infohub div
 */
function getSkillInfoFromWiki(skillName) {

  var url = 'https://typemoon.fandom.com/api.php?action=parse&page=Skill/' 
           + skillName[0].toUpperCase() 
           + '&prop=sections&format=json&origin=*';



  var skillList = fetchAsync(url);
  //console.log(url);
  skillList.then(function(result) {
    //console.log(result);
    for (skill of result['parse']['sections']) {
      if(skill['line'].toUpperCase() == skillName.toUpperCase()) {
        
        var skillIndex = skill['index'];
        var skillTextURL = 'https://typemoon.fandom.com/api.php?action=parse&page=Skill/' 
                          + skillName[0].toUpperCase() 
                          + '&section='
                          + skillIndex.toString()
                          + '&format=json&origin=*';
        var skillTextAll = fetchAsync(skillTextURL);
        skillTextAll.then(function(result) {
            
            var skillDescription = result['parse']['text']['*'];
            skillDescription = skillDescription.replace(/<a[^>]*>/g,"")
                                               .replace(/<sup[^>]*>/g,"")
                                               .replace(/<span class="mw-editsection"[^>]*>[\S\s]*<\/span>\s*<\/h2>/g,"</h2>")
                                               .replace(/<ol class="references"[^>]*>[\S\s]*<\/ol>\s*<\/div>/g,"</div>");
            document.getElementById('infoHub').innerHTML = skillDescription;
        });
      }
    }
});
    
}


/*
 * (PERSONAL SKILLS DEVIANT) Put wiki skill description in infohub div
 */
function getPersonalSkillInfoFromWiki(skillName) {

  var url = 'https://typemoon.fandom.com/api.php?action=parse&page=Skill/' 
           + skillName[0].toUpperCase() 
           + '&prop=sections&format=json&origin=*';



  var skillList = fetchAsync(url);
  //console.log(url);
  skillList.then(function(result) {
    //console.log(result);
    for (skill of result['parse']['sections']) {
      if(skill['line'].toUpperCase() == skillName.toUpperCase()) {
        
        var skillIndex = skill['index'];
        var skillTextURL = 'https://typemoon.fandom.com/api.php?action=parse&page=Skill/' 
                          + skillName[0].toUpperCase() 
                          + '&section='
                          + skillIndex.toString()
                          + '&format=json&origin=*';
        var skillTextAll = fetchAsync(skillTextURL);
        skillTextAll.then(function(result) {
            
            var skillDescription = result['parse']['text']['*'];
            skillDescription = skillDescription.replace(/<a[^>]*>/g,"")
                                               .replace(/<sup[^>]*>/g,"")
                                               .replace(/<span class="mw-editsection"[^>]*>[\S\s]*<\/span>\s*<\/h2>/g,"</h2>")
                                               .replace(/<ol class="references"[^>]*>[\S\s]*<\/ol>\s*<\/div>/g,"</div>");
            document.getElementById('infoHub').insertAdjacentHTML('beforeend', skillDescription);
        });
      }
    }
});
    
}





/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputCSkill1 = document.getElementById('cSkill1Name');
let myInputCSkill2 = document.getElementById('cSkill2Name');
let myInputCSkill3 = document.getElementById('cSkill3Name');

let myInputPSkill1 = document.getElementById('pSkill1Name');
let myInputPSkill2 = document.getElementById('pSkill2Name');
let myInputPSkill3 = document.getElementById('pSkill3Name');


/*
 * Class skills
 */
//on keyup, start the countdown
myInputCSkill1.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputCSkill1.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputCSkill1.value);
    }
});
myInputCSkill2.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputCSkill2.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputCSkill2.value);
    }
});
myInputCSkill3.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputCSkill3.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputCSkill3.value);
    }
});
//on focus, fire helper func
myInputCSkill1.addEventListener('focus', () => {
    helperClassSkill(myInputCSkill1);
});
myInputCSkill2.addEventListener('focus', () => {
    helperClassSkill(myInputCSkill2);
});
myInputCSkill3.addEventListener('focus', () => {
    helperClassSkill(myInputCSkill3);
});


/*
 * Personal skills
 */
//on keyup, start the countdown
myInputPSkill1.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputPSkill1.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputPSkill1.value);
    }
});
myInputPSkill2.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputPSkill2.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputPSkill2.value);
    }
});
myInputPSkill3.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputPSkill3.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputPSkill3.value);
    }
});

myInputPSkill1.addEventListener('focus', () => {
    helperPersonalSkill(myInputPSkill1);
});
myInputPSkill2.addEventListener('focus', () => {
    helperPersonalSkill(myInputPSkill2);
});
myInputPSkill3.addEventListener('focus', () => {
    helperPersonalSkill(myInputPSkill3);
});



