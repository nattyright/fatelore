/*
 * Set up text editors
 */
$('#personality').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em']
  ],
  semantic: false
});
$('#backstory').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#otherInfo').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#weapon').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#np1Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#np1Effect').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#np2Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#np2Effect').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#cSkill1Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#cSkill2Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#cSkill3Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});

$('#pSkill1Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#pSkill1Example').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#pSkill2Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#pSkill2Example').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#pSkill3Description').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});
$('#pSkill3Example').trumbowyg({
  btns: [
    ['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false
});

 //#otherInfo #description #weapon #np1Description #np1Effect #np2Description #np2Effect #cSkill1Description #cSkill2Description #cSkill3Description #pSkill1Description #pSkill1Example #pSkill2Description #pSkill2Example #pSkill3Description #pSkill3Example



/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
//let myInputPersonality = document.getElementById('personality');


//on keyup, start the countdown
/*
myInputPersonality.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    var text = $('#personality').trumbowyg('html');
    console.log(text);

});
*/