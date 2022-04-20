/* 
 * display skill description from fandom wiki
 */

//TO-DO: show a list of applicable class skills, then open detailed
//       skill description in a new <div>

function helperClassSkill() {
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
    document.getElementById('infoHubCS').innerHTML = html;


    // add event listener to each skill name
    var elements = document.getElementsByClassName("skillName");
    for (var i = 0; i < elements.length; i++) {
        let indx = i;
        elements[i].addEventListener('click', () => {
             getSkillInfoFromWiki(elements[indx].innerText, 'infoHubCSWiki');
         });
    }

}

function getClassSkillHTML(skillList) {
  var message = "";
  for(key in skillList) {
      if (key != "") {
        message += '<tr><td><a href="#" class="skillName">' 
                 + key 
                 + '</a></td></tr>';
        
      }
  }
  return message;
}


function helperPersonalSkill() {
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
    document.getElementById('infoHubPS').innerHTML = html;


    // add event listener to each skill name
    var elements = document.getElementsByClassName("skillName");
    for (var i = 0; i < elements.length; i++) {
        let indx = i;
        elements[i].addEventListener('click', () => {
             getSkillInfoFromWiki(elements[indx].innerText, 'infoHubPSWiki');
         });
    }

}


function getPersonalSkillHTML(skillList) {
  var message = "";
  for(key in skillList) {
      if (key != "") {
        message += '<tr><td>' + skillList[key].join(', ')
                 + '</td><td><a href="#" class="skillName">' 
                 + key 
                 + '</a></td></tr>';
        
      }
  }
  return message;
}



/*
 * Put wiki skill description in infohub div
 */
function getSkillInfoFromWiki(skillName, displayDivId) {

  /*
  var url = 'https://typemoon.fandom.com/api.php?action=parse&page=Skill/' 
           + skillName[0].toUpperCase() 
           + '&prop=sections&format=json&origin=*';
  */
  var url = 'https://typemoon.fandom.com/api.php?action=parse&page=' 
           + skillName.replace(/\s/g, "_")
           + '&format=json&origin=*';

  var skillList = fetchAsync(url);
  //console.log(url);

  skillList.then(function(result) {
    //console.log(result);

    var skillDescription = result['parse']['text']['*'];
    // add col for css manipulation
    skillDescription = skillDescription.replace("<tbody>", "<colgroup><col><col></colgroup><tbody>")
    // get rid of links and other unneeded html
    skillDescription = skillDescription.replace(/<a[^>]*>/g,"")
                                       .replace(/<sup[^>]*>/g,"")
                                       .replace(/<span class="mw-editsection"[^>]*>[\S\s]*<\/span>\s*<\/h2>/g,"</h2>")
                                       .replace(/<ol class="references"[^>]*>[\S\s]*<\/ol>\s*<\/div>/g,"</div>");
    
    document.getElementById(displayDivId).innerHTML = skillDescription;

});
    
}



/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputCSkill = document.getElementById('tabsRef-CS');
let myInputCSkillSearch = document.getElementById('infoHubCSSearch');

let myInputPSkill = document.getElementById('tabsRef-PS');
let myInputPSkillSearch = document.getElementById('infoHubPSSearch');


/*
 * Class skills
 */
//on keyup, start the countdown
myInputCSkillSearch.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputCSkillSearch.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputCSkillSearch.value, 'infoHubCSWiki');
    }
});
//on focus, fire helper func
myInputCSkill.addEventListener('click', () => {
    helperClassSkill();
});

/*
 * Personal skills
 */
//on keyup, start the countdown
myInputPSkillSearch.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInputPSkillSearch.value) {
        typingTimer = setTimeout(getSkillInfoFromWiki, doneTypingInterval, myInputPSkillSearch.value, 'infoHubPSWiki');
    }
});
//on focus, fire helper func
myInputPSkill.addEventListener('click', () => {
    helperPersonalSkill();
});
