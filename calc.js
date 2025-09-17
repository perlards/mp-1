let one= document.getElementById('one');
let two= document.getElementById('two');
let output=document.getElementById('output');

function doAdd(){
    output.innerHTML=String(Number(one.value) + Number(two.value));

}
function doMult(){
    output.innerHTML=String(Number(one.value) * Number(two.value));

}
function doSubtract(){
    output.innerHTML=String(Number(one.value) - Number(two.value));

}
function doDivide(){
    output.innerHTML=String(Number(one.value) / Number(two.value));

}
function doClear(){
    output.innerHTML= one.value =""; two.value ="";
}