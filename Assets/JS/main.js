// var mode_container = document.getElementsByClassName('mode-container')
// window.onclick = function(event) {
//     if (event.target == mode_container) {
//         mode_container.style.display = none;
//         alert('hihi')
//     }
// }
// var close = document.getElementsByClassName('ti-close');
// window.onclick = function(event) {
//     if (event.target == close) {
//         alert('hihi');
//     }
// }

const Btns = document.querySelectorAll('.js-buy-ticket')

function show1() {
    alert('hi')
}

for (const btn of Btns) {
    btn.addEventListener('click', show1)
}