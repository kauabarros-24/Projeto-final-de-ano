const myInput = document.getElementById("myinput");
const myInput1 = document.getElementById("myinput1");
const myInput2 = document.getElementById("myinput2");
const myInput3 = document.getElementById("myinput3");
let min = myInput.getAttribute("min");
let max = myInput.getAttribute("max");
let step = myInput.getAttribute("step");
let val = myInput.getAttribute("value");

function stepper(btn){
    let id = btn.getAttribute("id");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "reduzir") ? (val--) : (val++)
    console.log(id, calcStep)
    let newValue = parseInt(val) + calcStep

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", val)
    }
}

function stepper1(btn){
    let val = myInput1.getAttribute("value");
    let id = btn.getAttribute("id");
    let calcStep = (id == "reduzir") ? (val--) : (val++)
    console.log(id, calcStep)
    let newValue = parseInt(val) + calcStep

    if(newValue >= min && newValue <= max){
        myInput1.setAttribute("value", val)
    }
}

function stepper2(btn){
    let val = myInput2.getAttribute("value");
    let id = btn.getAttribute("id");
    let calcStep = (id == "reduzir") ? (val--) : (val++)
    console.log(id, calcStep)
    let newValue = parseInt(val) + calcStep

    if(newValue >= min && newValue <= max){
        myInput2.setAttribute("value", val)
    }
}

function stepper3(btn){
    let val = myInput3.getAttribute("value");
    let id = btn.getAttribute("id");
    let calcStep = (id == "reduzir") ? (val--) : (val++)
    console.log(id, calcStep)
    let newValue = parseInt(val) + calcStep

    if(newValue >= min && newValue <= max){
        myInput3.setAttribute("value", val)
    }
}