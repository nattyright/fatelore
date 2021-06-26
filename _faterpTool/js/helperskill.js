/* 
 * display skill description from fandom wiki
 */

function helperClassSkill(divId) {

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



async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  //console.log(data);
  return data;
}

