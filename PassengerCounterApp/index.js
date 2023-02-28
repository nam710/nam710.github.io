// document.getElementById("count").innerText = 5
// let count = 0
// console.log(count)

//create a variable myAge and initialize it with your age
//then log the variable to get output on terminal

// let myAge = 20
// console.log("My age is "+myAge)

//onClick event listener
//initialize the count as 0
//listen for clicks on the increment button
//increment the count number when the button is clicked
//change the count in html to reflect the new count
let count=0
function increment() {
    count = count + 1
    document.getElementById("count").innerText = count
}

//save resets the passenger count and calls a function that inserts
//previous passengers count into the table by adding rows every time save is clicked
let lastBatchCount=0
let c=0
function save(){
    lastBatchCount = count
    count=0
    c=c+1
    document.getElementById("count").innerText = count
    addRow("prevBatchTable")
}

//function to add rows to the table whose id is passed into it
function addRow(tableId){

    //get tbody reference to add rows in it
    var tbodyRef = document.getElementById(tableId).getElementsByTagName('tbody')[0]
    
    // -1 inserts row at the end
    var row = tbodyRef.insertRow(-1)

    //inserting a cell named cell1
    var cell1 = row.insertCell(0)

    //cell are not text view element so create a Text Node with its content in it
    var newTx1 = document.createTextNode(c)

    //then append the textNode inside cell1 as its child
    cell1.appendChild(newTx1)

    //similarly for cell2
    var cell2 = row.insertCell(1)
    var newTx2 = document.createTextNode(lastBatchCount)
    cell2.appendChild(newTx2)
}

