/* 
let firstBatch = 5
let secondBatch = 7

let count = firstBatch + secondBatch

console.log(count)


let myAge = 36
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge)



let count = 5

console.log(count) 

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints) 

function increment() {
    console.log("The button was clicked")
} 

let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapsTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

lapsTime() 


let lapscompleted = 0

function totalLaps() {
    lapscompleted = lapscompleted + 1
}

totalLaps()
totalLaps()
totalLaps()

console.log(lapscompleted) 


let username = 'per'

let message = 'You have tree new notification'

let messageToUser = message + ', ' + username + '!'

console.log(messageToUser) 

let name = 'Gustavo Meza'
let greeting = 'Hi, my name is '

let myGreeting = greeting + name

console.log(myGreeting) 

let welcomeEl = document.getElementById("welcome-el")

let name = "Gustavo Meza"
let greeting = "Hi, welcome back "

welcomeEl.innerText = greeting + name 

welcomeEl.innerText += " 👋" */









let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount 
    count = 0
    countEl.textContent = count
}