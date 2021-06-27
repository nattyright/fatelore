/*
 * Fire functions after finishing typing in a field with Id (1 seconds)
 */

//setup before functions
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