/*
 * Add/Remove input fields depending on metric/imperial system
 */

function changeMeasurementSystemHeight(unit) {

    if(unit == 'cm') {
        if (document.getElementById("sideHeight2") != null) {
            document.getElementById("sideHeight2").remove();
            document.getElementById("sideHeightUnit2").remove();           
        }


    } else {

        var html = "<input type='text' id='sideHeight2'>"
                 + "<select id='sideHeightUnit2'>"
                 +   "<option>in</option>"
                 + "</select>"
                 //console.log(html);
        document.getElementById('sideHeightUnit').insertAdjacentHTML("afterend", html);
        
        //set up event listener for the new unit for auto save
        $('#sideHeight2').on('input propertychange change', function() {
            var toSaveId = $(this).attr('id');
            clearTimeout(saveToLocalTimeoutId);
            timeoutId = setTimeout(function() {
                // Runs 1 second (1000 ms) after the last change    
                saveFormData(toSaveId);
                generatePreview();
            }, 1000);
        });

        //check if we're in darkmode
        if ($("#sideHeightUnit").hasClass( "darkMode" )) {
            turnOnDarkMode();
        }
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



