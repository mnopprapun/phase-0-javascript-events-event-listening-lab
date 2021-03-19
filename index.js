
const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert); 

function addingEventListener() {
    alert('I was clicked!');
    input.addEventListener('click', addingEventListener);
}