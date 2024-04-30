let random = Math.floor(Math.random() * 3) + 1;
function showResult1() {
    if(document.getElementById("1").id == random) {
        document.getElementById("1").className = "btn btn-success";
        document.getElementById("text").innerHTML = "Castigator!"
    } else {
        document.getElementById("1").className = "btn btn-danger"
        document.getElementById("text").innerHTML = "Necastigator :("
    }
}
function showResult2() {
    if(document.getElementById("2").id == random) {
        document.getElementById("2").className = "btn btn-success";
        document.getElementById("text").innerHTML = "Castigator!"
    } else {
        document.getElementById("2").className = "btn btn-danger"
        document.getElementById("text").innerHTML = "Necastigator :("
    }
}
function showResult3() {
    if(document.getElementById("3").id == random) {
        document.getElementById("3").className = "btn btn-success";
        document.getElementById("text").innerHTML = "Castigator!"
    } else {
        document.getElementById("3").className = "btn btn-danger"
        document.getElementById("text").innerHTML = "Necastigator :("
    }
}
