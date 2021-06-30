/*
 * Set up text editors
 */
$('#personality').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em']
  ],
  semantic: false,
  removeformatPasted: true
});
$('#backstory').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#otherInfo').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#weapon').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#np1Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#np1Effect').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#np2Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#np2Effect').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#cSkill1Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#cSkill2Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#cSkill3Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});

$('#pSkill1Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#pSkill1Example').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#pSkill2Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#pSkill2Example').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#pSkill3Description').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
});
$('#pSkill3Example').trumbowyg({
  btns: [
    //['viewHTML'],
    ['undo', 'redo'], // Only supported in Blink browsers
    ['strong', 'em'],
  ],
  semantic: false,
  removeformatPasted: true
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