/* 
 * display skill description from fandom wiki
 */

//TO-DO: show a list of applicable class skills, then open detailed
//       skill description in a new <div>

function helperClassSkill(divId) {
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
    console.log(skillList);

    
}

function helperPersonalSkill(divId) {
    var servantData = canonServants;
    var className = document.getElementById('sideClass');
    var skillList = {};

    for(servant of servantData) {
        if (servant['sideClass'].toUpperCase() == className.value.toUpperCase()) {
            for(skillId in servant['pSkill']) {
                var skill = servant['pSkill'][skillId];
                if(skill['name'] in skillList) {
                    skillList[skill['name']] += 1;
                } else {
                    skillList[skill['name']] = 1;
                }
            }
        }
    }
    console.log(skillList);

    
}



function getSkillInfoFromWiki(divId) {

  var skillName = document.getElementById(divId).value;
    
  if(skillName.length < 3) {
    return -1;
  }


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
            document.getElementById('infoHub').innerHTML = skillDescription;

        });
      }
    }
});
    
}








