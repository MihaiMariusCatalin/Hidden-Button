let random = Math.floor(Math.random() * 3) + 1;

function showResult(id) {
    if (id == random) {
        document.getElementById(id).className = 'btn btn-success';
        document.getElementById('text').innerHTML = 'Winner!';
    } else {
        document.getElementById(id).className = 'btn btn-danger';
        document.getElementById('text').innerHTML = 'Looser :(';
    }
}

function generateButtons() {
    let buttons = document.getElementById('number-input').value
    for (let id = 1; id <= buttons; ++id) {
    document.getElementById('container').innerHTML += `
<button id="${id}" type="button" class="btn btn-secondary" onClick="showResult(id)">${id}</button>
`;
    }
}
