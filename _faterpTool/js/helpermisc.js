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