let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1pointh() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2pointsh() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3pointsh() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1pointg() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2pointsg() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3pointsg() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}