// sort servants alphabetically then populate menu on index page
var servantData = canonServants;
servantData.sort((a, b) => 
   (a.title > b.title) ? 1 : -1);


let html = "<ul>";
for(var i = 0; i < servantData.length; i++) {
   var servant2 = servantData[i];
   html += "<li><a href='#' class='fgoMaterialServantName' id='";
   html += servant2.URL;
   html += "'>";
   html += servant2.title;
   html += "</a></li>";
}
html += "</ul>"


$( document ).ready(function() {
   document.getElementById('infoHubFGOMatDex').innerHTML = html;

   for(var i = 0; i < servantData.length; i++) {
      var servant = servantData[i];
      
      let elem = document.getElementById(servant.URL);
      elem.addEventListener('click', function(e) {
         e.preventDefault();
         showFGOMaterial(elem.id);
      });
   }


});


function getServantURL(servantName) {
   var servantData = canonServants;
   for (servant of servantData) {
      if (servant.title == servantName) {
         return servant.URL;
      }
   }
}


function showFGOMaterial(servantURL) {

   var matURL = 'js/servant/' + servantURL + '.js';
   $.ajaxSetup({'cache':true});
   $.getScript(matURL, function() {
    //console.log(a.content[6].i18n.en.name.id);
    var fgomathtml = "";
    for (var i = 0; i < a.content.length; i++) {
      fgomathtml += '<div>';
      fgomathtml += a.content[i].i18n.en.name.name;
      fgomathtml += a.content[i].i18n.en.html;
      fgomathtml += '</div>';
      //console.log(a.content[i].i18n.en.name.name);
      //console.log(a.content[i].i18n.en.html);
    }
     
    document.getElementById('infoHubFGOMatPage').innerHTML = fgomathtml;

   });

}
