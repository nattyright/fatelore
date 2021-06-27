/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/


function getWikipediaPage(servantName) {

    if(servantName) {
        var url = "https://en.wikipedia.org/w/api.php"; 

        var params = {
            action: "query",
            list: "search",
            srsearch: servantName,
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                if (response.query.searchinfo.totalhits > 0){
                    console.log("Your search page exists on English Wikipedia" );
                    console.log(response.query.search[0].title);
                    displayWikipediaPageContent(response.query.search[0].title);
                    
                }
            })
            .catch(function(error){console.log(error);});
    }


}



function displayWikipediaPageContent(pageName) {
        var url = "https://en.wikipedia.org/w/api.php"; 
        /*
        var params = {
            action: "parse",
            page: pageName,
            format: "json"
        };
        */
        var params = {
            action: "query",
            prop: "extracts",
            titles: pageName,
            format: "json"
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});


        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                var firstKey = Object.keys(response.query.pages)[0];
                //console.log(response.query.pages[firstKey.toString()].extract);
                let content = response.query.pages[firstKey.toString()].extract;
                document.getElementById('infoHub').innerHTML = content;
            })
            .catch(function(error){console.log(error);});



        // infobox
        url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "parse",
            page: pageName,
            format: "json"
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

        console.log(url);
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                //console.log(response.parse.text['*']);
                var infoBox = document.createElement('div');
                let content = response.parse.text['*'];
                infoBox.innerHTML = content;

                if(infoBox.getElementsByClassName('vcard').item(0) == null) {
                    var infoBoxHtml = "<center>No Extra Wiki Info Found.</center>"
                } else {
                    var infoBoxHtml = infoBox.getElementsByClassName('vcard').item(0).outerHTML;
                    infoBoxHtml = infoBoxHtml.replace(/<img[^>]*>/g,"")
                                             .replace(/<a[^>]*>/g,"")
                                             .replace(/<sup[^>]*>/g,"");
                }

                document.getElementById('infoHubWikiInfoBox').innerHTML = infoBoxHtml;
            })
            .catch(function(error){console.log(error);});

            
            //infoBox.innerHTML = 




}



/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
let typingTimer;                //timer identifier
let doneTypingInterval = 1000;  //time in ms (1 seconds)
let myInput = document.getElementById('title');

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(getWikipediaPage, doneTypingInterval, myInput.value);
    }
});

//on focus, start the countdown
myInput.addEventListener('focus', () => {
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(getWikipediaPage, doneTypingInterval, myInput.value);
    }
});