const button1 = document.querySelector('#values-button1');
const button2 = document.querySelector('#values-button2');
const button3 = document.querySelector('#values-button3');


const disableButtons = () => {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    setTimeout(function(){button1.disabled = false;}, 400);
    setTimeout(function(){button2.disabled = false;}, 400);
    setTimeout(function(){button3.disabled = false;}, 400);
};

button1.addEventListener('click', disableButtons);
button2.addEventListener('click', disableButtons);
button3.addEventListener('click', disableButtons);