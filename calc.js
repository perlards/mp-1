let one= document.getElementById('one');
let two= document.getElementById('two');
let output=document.getElementById('output');

function doAdd(){
    output.innerHTML=String(Number(one.value) + Number(two.value));
    if(Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}
function doMult(){
    output.innerHTML=String(Number(one.value) * Number(two.value));
    if(Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}
function doSubtract(){
    output.innerHTML=String(Number(one.value) - Number(two.value));
    if(Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}
function doDivide(){
    output.innerHTML=String(Number(one.value) / Number(two.value));
    if(Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}
function doPower() {
    let base = Number(one.value);
    let exponent = Number(two.value);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    output.innerHTML = String(result);
    if(Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}
function doClear(){
    output.innerHTML= one.value =""; two.value ="";
}