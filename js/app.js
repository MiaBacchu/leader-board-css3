// change color
document.getElementById('top-player').style.color = 'lime';
document.getElementById('players-bg').style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
// adding list item
document.getElementById('add-button').addEventListener('click', function () {
    const container = document.getElementById('li-container');
    const newList = document.createElement('li');
    newList.innerText = 'hello added';
    container.appendChild(newList);
})
// increase input value
document.getElementById('increase-btn').addEventListener('click', function () {
    const input = document.getElementById('input');
    const previousinput = parseFloat(input.value);
    if (input.value < 5) {
        input.value = previousinput + 1;
    }
    else { document.getElementById('increase-btn').disabled = true; }
})