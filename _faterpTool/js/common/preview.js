function generatePreview() {


    var specialIds = ['sideName', 'sideClass', 'sidePic', 'sideWeight', 'sideHeight', 'sideHeight2', 'sideHeightUnit', 'sideHeightUnit2', 'sideWeightUnit'];

    for (var i = 0; i < idsToSave.length; i++) {
        var origElem = document.getElementById(idsToSave[i]);
        var previewElem = document.getElementById('preview' + idsToSave[i]);

        if (origElem != null) {
            if (!specialIds.includes(idsToSave[i])) {
                previewElem.innerText = origElem.value;
            } else {

                switch(idsToSave[i]) {
                    case 'sideName':
                        previewElem.innerText = document.getElementById('title').value; 
                        break;
                    case 'sideClass':
                        var servantClasseURL = {'Saber':'https://cdn.discordapp.com/attachments/694493129671442453/859534555596455966/image2.png',
                                                'Archer':'https://cdn.discordapp.com/attachments/694493129671442453/859534571947294780/image5.png',
                                                'Lancer':'https://cdn.discordapp.com/attachments/694493129671442453/859534587805302874/image7.png',
                                                'Caster':'https://cdn.discordapp.com/attachments/694493129671442453/859534630931005450/image3.png',
                                                'Rider':'https://cdn.discordapp.com/attachments/694493129671442453/859534644919795763/image1.png',
                                                'Assassin':'https://cdn.discordapp.com/attachments/694493129671442453/859534655825117264/image9.png',
                                                'Berserker':'https://cdn.discordapp.com/attachments/694493129671442453/859534664598945822/image6.png'};
                        var getServantURL = servantClasseURL[document.getElementById('sideClass').value];
                        previewElem.innerText = origElem.value;
                        var previewSideClassIcon = document.getElementById('previewsideClassIcon');
                        previewSideClassIcon.innerHTML = '<img src='
                                              + getServantURL
                                              + '>';
                        break;
                    case 'sidePic':
                        previewElem.innerHTML = '<img src='
                                              + origElem.value
                                              + '>';
                        break;
                    case 'sideWeight':
                        previewElem.innerHTML = origElem.value + document.getElementById('sideWeightUnit').value;
                        break;
                    case 'sideHeight':
                        var content = origElem.value + document.getElementById('sideHeightUnit').value;
                            // check if using imperial
                            if (document.getElementById('sideHeight2') != null && document.getElementById('sideHeight2').value != "") {
                              content = content + document.getElementById('sideHeight2').value + document.getElementById('sideHeightUnit2').value;
                            }
                        previewElem.innerHTML = content;
                        break;
                    default:
                        break;
                }
            }          
        }

    }


    for (var i = 0; i < idsToSaveTextEditor.length; i++) {
        if (document.getElementById(idsToSaveTextEditor[i]) != null) {

            //console.log('preview' + idsToSaveTextEditor[i]);
            var content = $('#' + idsToSaveTextEditor[i]).trumbowyg('html');
            content = stripParagraphFormatting(content);

            document.getElementById('preview' + idsToSaveTextEditor[i]).innerHTML
            = content;
        }
        
    }
}



function stripParagraphFormatting(content) {
      content = content.replace(/<br>/g,"")
                       .replace(/<p[^>]*>[\s]*<\/p[^>]*>/g,"")
                       .replace(/<p><br><\/p>/g,"")
                       .replace(/<p><b><\/b><\/p>/g,"")
                       .replace(/<p><i><\/i><\/p>/g,"")
                       .replace(/<p[^>]*>[\s]*<\/p[^>]*>/g,"")
                       .replace(/<\/p[^>]*>/g,"[n]")   
                       .replace(/<[^>]*>/g,"")
                       .replace(/\[n\]/g,"<br><br>");
    return content;
}


// load once on startup
$( document ).ready(function() {
    generatePreview();
});