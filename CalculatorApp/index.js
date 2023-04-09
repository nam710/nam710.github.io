// console.log("2" + 2) answer:22
// console.log(2 + "2") answer:22
// console.log([] + {}) array + object ---> answer:[object Object]
// console.log({} + []) object + array ---> answer:[object Object]
// console.log("2" - 2) answer:0
// console.log(2 - "2") answer:0

let num1 = null
let symbol = document.getElementById("symbol")
let num2 = null
let ans = ""
let display = document.getElementById("answer")

function input(id){
    let inpNum = document.getElementById(id)
    value = prompt("Enter the value!")
    inpNum.innerText = value
    if(id == "num1"){
        num1=value
    }
    else{
        num2=value
    }
}

function err(){
    alert("Enter the values first")
}
   

function add(){
    if(num1 == null || num2 == null){
        err()
        return
    }
    symbol.textContent="+"
    ans = parseInt(num1) + parseInt(num2)
    display.textContent = ans
}
function subtract(){
    if(num1 == null || num2 == null){
        err()
        return
    }  
    symbol.textContent="-"
    ans = parseInt(num1) - parseInt(num2)
    display.textContent = ans
}
function multiply(){
    if(num1 == null || num2 == null){
        err()
        return
    }  
    symbol.textContent="x"
    ans = parseInt(num1) * parseInt(num2)
    display.textContent = ans
}
function divide(){
    if(num1 == null || num2 == null){
        err()
        return
    }  
    symbol.textContent="/"
    ans = parseInt(num1) / parseInt(num2)
    display.textContent = ans
}
function modulus(){
    if(num1 == null || num2 == null){
        err()
        return
    }
    symbol.textContent="%"
    ans = parseInt(num1) % parseInt(num2)
    display.textContent = ans
}
