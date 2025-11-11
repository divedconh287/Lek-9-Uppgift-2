const tal1input = document.querySelector("#tal1");
const tal2input = document.querySelector("#tal2");
let svar = document.querySelector("#svar");
let output = document.querySelector("#output");

/* + - * / modulo % */ 
function plus(){
    const tal1= parseFloat(tal1input.value);
    const tal2= parseFloat(tal2input.value);
    let summa = tal1+tal2;
    svar.value=summa;
    let p = document.createElement("p");
    p.textContent= tal1+"+"+tal2+"="+summa;
    output.appendChild(p);
    tal1input.value = "";
    tal2input.value = "";
}

function minus(){
    const tal1= parseFloat(tal1input.value);
    const tal2= parseFloat(tal2input.value);
    let summa = tal1-tal2;
    svar.value=summa;
    let p = document.createElement("p");
    p.textContent= tal1+"-"+tal2+"="+summa;
    output.appendChild(p);
    tal1input.value = "";
    tal2input.value = "";
}

function ggr(){
    const tal1= parseFloat(tal1input.value);
    const tal2= parseFloat(tal2input.value);
    let summa = tal1*tal2;
    svar.value=summa;
    let p = document.createElement("p");
    p.textContent= tal1+"*"+tal2+"="+summa;
    output.appendChild(p);
    tal1input.value = "";
    tal2input.value = "";
}

function dela(){
    const tal1= parseFloat(tal1input.value);
    const tal2= parseFloat(tal2input.value);
    let summa = tal1/tal2;
    svar.value=summa;
    let p = document.createElement("p");
    p.textContent= tal1+"/"+tal2+"="+summa;
    output.appendChild(p);
    tal1input.value = "";
    tal2input.value = "";
}
console.log("Matte!");

// parseFloat = decimaltal