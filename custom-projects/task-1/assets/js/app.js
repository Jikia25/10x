// let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;


let count 
if (localStorage.getItem('count') ) { 
    count = parseInt(localStorage.getItem('count'))  
} else {
    count = 0
}
const minLimit = 0;
const maxLimit = 100;

document.getElementById("count").innerText = count;

function changeCount(value) {
    let newCount = count + value;
    if (newCount >= minLimit && newCount <= maxLimit) {
        count = newCount;
        if (count > 10) {
            document.getElementById("count").style.color = "red"
        }else {
            document.getElementById("count").style.color = "blue"
        }
        updateDisplay();
    }
}

function resetCount() {
    count = 0;
    document.getElementById("count").style.color = "purple"
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("count").innerText = count;
    localStorage.setItem('count', count);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") changeCount(1);
    console.log(event.key);
    if (event.key === "ArrowDown") changeCount(-1);
    if (event.key === "r") resetCount();
});

console.log();
