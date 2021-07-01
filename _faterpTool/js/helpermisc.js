/*
 * Update class/personal skill tab's skill lists on Class change
 */
//setup before functions
let myInputClass = document.getElementById('sideClass');

//on change functions
myInputClass.addEventListener('change', () => {
    helperClassSkill();
    helperPersonalSkill();
});












/*
 * Add/Remove input fields depending on rank change
 */

function copyOtherRankToSelectMenu(divId, divIdToCopy) {
    var toChange = document.getElementById(divId).options[6];
    toChange.value = document.getElementById(divIdToCopy).value;
    toChange.text = document.getElementById(divIdToCopy).value;
}


function changeRankFields(divId, divIdToAdd) {
    var availableRanks = ['A', 'B', 'C', 'D', 'E', 'EX'];

    var selectElem = document.getElementById(divId);
    var rank = selectElem.value;

    if(!availableRanks.includes(rank)) {

        var html = "<input type='text' id='" 
                  + divIdToAdd 
                  + "' title='1 rank EX and 1 rank A skill allowed. For skills with shifting ranks, choose \"Other\" and specify (e.g. C-A, D-E).'>";
        selectElem.insertAdjacentHTML("afterend", html);


        // reflect the change in the options menu
        let myInputRankOther = document.getElementById(divIdToAdd);
        myInputRankOther.addEventListener('keyup', () => {
            copyOtherRankToSelectMenu(divId, divIdToAdd)
            saveFormData(divId);
            generatePreview();
        });

    } else {
        $('#' + divIdToAdd).remove();
        //reset rank 'other's text & value to Other
        var toChange = document.getElementById(divId).options[6];
        toChange.value = 'Other';
        toChange.text = 'Other';  
    }

}





 /*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputPS1Rank = document.getElementById('pSkill1Rank');
let myInputPS2Rank = document.getElementById('pSkill2Rank');
let myInputPS3Rank = document.getElementById('pSkill3Rank');
let myInputCS1Rank = document.getElementById('cSkill1Rank');
let myInputCS2Rank = document.getElementById('cSkill2Rank');
let myInputCS3Rank = document.getElementById('cSkill3Rank');

//on change functions
myInputPS1Rank.addEventListener('change', () => {
    changeRankFields('pSkill1Rank', 'pSkill1RankOther');
});
myInputPS2Rank.addEventListener('change', () => {
    changeRankFields('pSkill2Rank', 'pSkill2RankOther');
});
myInputPS3Rank.addEventListener('change', () => {
    changeRankFields('pSkill3Rank', 'pSkill3RankOther');
});
myInputCS1Rank.addEventListener('change', () => {
    changeRankFields('cSkill1Rank', 'cSkill1RankOther');
});
myInputCS2Rank.addEventListener('change', () => {
    changeRankFields('cSkill2Rank', 'cSkill2RankOther');
});
myInputCS3Rank.addEventListener('change', () => {
    changeRankFields('cSkill3Rank', 'cSkill3RankOther');
});