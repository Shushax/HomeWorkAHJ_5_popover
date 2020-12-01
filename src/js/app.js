const btn = document.getElementsByClassName('btn')[0];
const popover = document.getElementById('toggle');
btn.onclick = function() {
    popover.classList.toggle('hidden');
}