// 100 == "100" --- true
// 100 === "100" --- false
// === checks the condition strictly

// formula for random number between range max and min
// Math.floor(min + Math.random()*(max-min+1))
// here min = 2  max = 11
let firstCard = 0
let secondCard = 0
let sum = 0
let started = false
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message")

//querySelector is a more dynamic method
//it can refer to: 
//1. CSS Selectors eg: body,div,span etc
//2. Elements having some ID (must pe prefixed by #)
//3. Elements having some class (must be prefixed by .)

let sumEl = document.querySelector("#sum")
let cardsEl = document.querySelector("#cards")

let drawCardBtn = document.getElementById("drawCard-btn")


let botFirstCard = 0
let botSecondCard = 0
let botSum = 0
let playerHit = false

let botCardEl = document.getElementById("botCards")
let botSumEl = document.getElementById("botSum")



function startGame(){

    botFirstCard = Math.floor(Math.random()*10 + 2)
    botSecondCard = Math.floor(Math.random()*10 + 2)
    botSum = botFirstCard + botSecondCard
    botCardEl.textContent = "The bot has: " + botFirstCard +" "+ botSecondCard
    botSumEl.textContent = "Sum: "+botSum

    started = true
    playerHit = false
    isAlive = true
    hasBlackJack = false
    drawCardBtn.disabled = false
    firstCard = Math.floor(Math.random()*10 + 2)
    secondCard = Math.floor(Math.random()*10 + 2)
    sum = firstCard + secondCard
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " "  
    instantWinLoss()
    checkWin()
}

function checkWin(){

    if(playerHit == true){
        while(botSum<=sum && botSum<=21){
            let randomBotInt = Math.floor(Math.random()*10 + 2)
            botSum = botSum + randomBotInt
            botCardEl.textContent +=" "+ randomBotInt 
            botSumEl.textContent = "Sum: "+botSum
        }
        if(botSum>21){
            message = "You are closest to 21!You won BlackJack :)"
        }
        else{ 
            message = "The bot won!"
        }
        messageEl.textContent = message
    }
    else{
        if(botSum<21){
            if(sum<=20){
                message = "Do you want to draw another card?"
            }
            else if(sum === 21){
                hasBlackJack = true
                message = "You have BlackJack!"
                drawCardBtn.disabled = true
            }
            else{
                isAlive = false
                message = "You are out of the game!"
                drawCardBtn.disabled = true
            }
            messageEl.textContent = message
        }
        else if(botSum===21){
            isAlive = false
            message = "Bot won!"
            drawCardBtn.disabled = true
            messageEl.textContent = message
        }
        
    }
   
   
}


function drawCard(){
    if(started == false){
        alert("Start the game first!")
        return
    }
    if(playerHit==false){
        let randomInt = Math.floor(Math.random()*10 + 2)
        sum = sum + randomInt
        cardsEl.textContent +=  randomInt + " "
        sumEl.textContent = "Sum: " + sum 
        if(botSum<=18){
            let randomBotInt = Math.floor(Math.random()*10 + 2)
            botSum = botSum + randomBotInt
            botCardEl.textContent +=" "+ randomBotInt 
            botSumEl.textContent = "Sum: "+botSum
        }
        instantWinLoss()
        checkWin()
    }
  
  
}

function whoWon(){
     if(started == false){
        alert("Start the game first!")
        return
    }
    if(sum>=21){
        alert("Start another round first!")
        return
    }
   playerHit = true
   drawCardBtn.disabled = true
   checkWin()
}


function instantWinLoss(){
    if(sum === 21 || botSum === 21){
        if(sum===21){
            hasBlackJack = true
            message = "You have BlackJack!"
            drawCardBtn.disabled = true
        }
        else{
            message = "Bot won!"
            drawCardBtn.disabled = true
        }
        messageEl.textContent = message
    }
    else if(sum>21 || botSum >21){
        if(sum>21){
                isAlive = false
                message = "You are out of the game!"
                drawCardBtn.disabled = true
        }
        else{
            message = "You are closest to 21!You won BlackJack :)"
            drawCardBtn.disabled = true
        }
        messageEl.textContent = message
    }
}