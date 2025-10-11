window.addEventListener("DOMContentLoaded", () => {
  input.focus(); // automatically focus the input field
});


const input = document.querySelector(".input")
const nac = document.querySelector(".nac")
const nc = document.querySelector(".nc")
const n100 = document.querySelector(".n100")
const ndi = document.querySelector(".ndi")
const nma = document.querySelector(".nma")
const nsu = document.querySelector(".nsu")
const npl = document.querySelector(".npl")
const neq = document.querySelector(".neq")
const ndo = document.querySelector(".ndo")
const n9 = document.querySelector(".n9")
const n8 = document.querySelector(".n8")
const n7 = document.querySelector(".n7")
const n6 = document.querySelector(".n6")
const n5 = document.querySelector(".n5")
const n4 = document.querySelector(".n4")
const n3 = document.querySelector(".n3")
const n2 = document.querySelector(".n2")
const n1 = document.querySelector(".n1")
const n0 = document.querySelector(".n0")
const n00 = document.querySelector(".n00")

n0.addEventListener("click", () => {
    input.value += "0";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})
n00.addEventListener("click", () => {
    input.value += "00";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n1.addEventListener("click", () => {
    input.value += "1";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n2.addEventListener("click", () => {
    input.value += "2";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n3.addEventListener("click", () => {
    input.value += "3";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n4.addEventListener("click", () => {
    input.value += "4";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n5.addEventListener("click", () => {
    input.value += "5";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n6.addEventListener("click", () => {
    input.value += "6";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n7.addEventListener("click", () => {
    input.value += "7";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n8.addEventListener("click", () => {
    input.value += "8";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n9.addEventListener("click", () => {
    input.value += "9";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

nac.addEventListener("click", () => {
    input.value = "";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

nc.addEventListener("click", () => {
    if(input !== ""){
       input.value = input.value.slice(0, -1);
    }
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

n100.addEventListener("click", () => {
    if(input !== ""){
        input.value = input.value / 100;
    }
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

ndo.addEventListener("click", () => {
    input.value += ".";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
})

ndi.addEventListener("click", () => {
    input.value += "/";
    ndi.disabled= true;
    n100.disabled = true;
})

nma.addEventListener("click", () => {
    input.value += "*";
    nma.disabled= true;
    n100.disabled = true;
})

nsu.addEventListener("click", () => {
    input.value += "-";
    nsu.disabled= true;
    n100.disabled = true;
})

npl.addEventListener("click", () => {
    input.value += "+";
    npl.disabled= true;
    n100.disabled = true;
})

function checkLast () {
    let oparetor = ["+","-","*","/"]
    let last = input.value.slice(-1)
    if(oparetor.includes(last)){
       input.value = input.value.slice(0,-1)
    }   
}

neq.addEventListener("click", () => { 
    checkLast()
    if(input !== ""){
        input.value = eval(input.value)
    }
    n100.disabled = false; 
})



input.addEventListener("keydown", (event) => {
    if(event.key === "Delete"){
         input.value = "";
    npl.disabled= false;
    nsu.disabled= false;
    nma.disabled= false;
    ndi.disabled= false;
    }
   
})

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    checkLast()
    if(input !== ""){
        input.value = eval(input.value)
    }
    n100.disabled = false; 
    }
})