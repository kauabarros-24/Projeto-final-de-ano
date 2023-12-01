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

    let localValor = document.getElementById("valor");
    console.log(valor)
    let valorsoma = 8;
    (val <= 0) ? localValor.innerHTML = `R$${valorsoma.toFixed(2).replace(".",",")}` : localValor.innerHTML = `R$${(valorsoma * val).toFixed(2).replace(".",",")}`

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

    let localValor = document.getElementById("valor1");
    console.log(valor)
    let valorsoma = 12;
    (val <= 0) ? localValor.innerHTML = `R$${valorsoma.toFixed(2).replace(".",",")}` : localValor.innerHTML = `R$${(valorsoma * val).toFixed(2).replace(".",",")}`
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

    let localValor = document.getElementById("valor2");
    console.log(valor)
    let valorsoma = 15;
    (val <= 0) ? localValor.innerHTML = `R$${valorsoma.toFixed(2).replace(".",",")}` : localValor.innerHTML = `R$${(valorsoma * val).toFixed(2).replace(".",",")}`
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

    let localValor = document.getElementById("valor3");
    console.log(valor)
    let valorsoma = 20;
    (val <= 0) ? localValor.innerHTML = `R$${valorsoma.toFixed(2).replace(".",",")}` : localValor.innerHTML = `R$${(valorsoma * val).toFixed(2).replace(".",",")}`
}