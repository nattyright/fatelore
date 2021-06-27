
/*
$(document).ready(function(){
    $.getScript("../servant/abigail-williams.js", function() {
       alert("Script loaded but not necessarily executed.");
       console.log(a);
       console.log("haha")
    });
});

*/

import { a } from '../servant/abigail-williams.js';
console.log(a.content[6].i18n.en.name.id);


//document.getElementById('infoHubServantPage')