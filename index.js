let sum = 0
let cardsArray = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let newCardBtn = document.getElementById('new-card-btn')

function startGame(){
    newCardBtn.style.visibility = 'visible'
    let firstCard = drawCard()
    let secondCard = drawCard()
    sum = firstCard + secondCard
    cardsArray = [firstCard,secondCard]
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cardsArray.length; i++){
        cardsEl.textContent += " " + cardsArray[i]
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        newCardBtn.style.visibility = 'hidden'
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let card = drawCard()
    cardsArray.push(card)
    sum += card
    renderGame()
    if (sum>21) {
        newCardBtn.style.visibility = 'hidden'
    }
}

function drawCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}




