// let count = document.getElementById("count").innerText = 10;
// console.log(count);
let count = 0;
let saveEl = document.getElementById("save-el")
let count_El =  document.getElementById("count");
function increment(){
    count +=  1;
    count_El.textContent = count;
}

function save(){
    let countDash = count + " - ";

    saveEl.textContent += countDash;
    count_El.textContent = 0;
    count = 0;
}