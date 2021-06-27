/*
 * Add/Remove input fields depending on metric/imperial system
 */

function changeMeasurementSystemHeight(unit) {

    if(unit == 'cm') {
        document. getElementById("sideHeight2").remove();
        document. getElementById("sideHeightUnit2").remove();

    } else {

        var html = "<input type='text' id='sideHeight2'>"
                 + "<select id='sideHeightUnit2'>"
                 +   "<option>in</option>"
                 + "</select>"
                 console.log(html);
        document.getElementById('sideHeightUnit').insertAdjacentHTML("afterend", html);
    }
}




 /*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let myInputHeight = document.getElementById('sideHeightUnit');

//on change functions
myInputHeight.addEventListener('change', () => {
    changeMeasurementSystemHeight(myInputHeight.value);
});



