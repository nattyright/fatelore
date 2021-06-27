// sort servants alphabetically then populate menu on index page
var servantData = canonServants;
servantData.sort((a, b) => 
   (a.title > b.title) ? 1 : -1);


let html = "<ul>";
for(servant of servantData) {
   html += "<li><a href='#' class='fgoMaterialServantName' id='";
   html += servant.URL;
   html += "'>";
   html += servant.title;
   html += "</a></li>";
}
html += "</ul>"


$( document ).ready(function() {
   document.getElementById('infoHubServantIndex').innerHTML = html;


   for(servant of servantData) {
      let elem = document.getElementById(servant.URL)
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
   import { a } from '../servant/' + servantURL + '.js';
   console.log(a.content[6].i18n.en.name.id);
}

//import { a } from '../servant/abigail-williams.js';
//console.log(a.content[6].i18n.en.name.id);


//document.getElementById('infoHubServantPage')

