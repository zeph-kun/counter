let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const states = e.currentTarget.classList;
        if (states.contains('decrease')) {
            count--;
        } else if (states.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    })
});