const limt = 9; 
const min = 1;
const buttons = document.querySelectorAll('.teclado input[type="button"]');
let inputTele = document.querySelector('input[type="tel"]');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let valueButt = this.value;

        if (valueButt === 'Call' && inputTele.value.length === limt) {
            playAudio(); 
            inputTele.value = inputTele.value.slice(0, -9);
        } else if (valueButt !== 'Call' && valueButt !== 'X' && inputTele.value.length < limt) {
            inputTele.value += valueButt;
        }  else if (valueButt === 'X' && inputTele.value.length >= min) {
            inputTele.value = inputTele.value.slice(0, -1); 
        }
    });
});

function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
}
