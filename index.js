let score=0
let gscore=0




function add1() {
    score += 1
    document.getElementById("homescore").textContent = score
}

function add2() {
    score += 2
    document.getElementById("homescore").textContent = score

}

function add3() {
    score += 3
    document.getElementById("homescore").textContent = score

}

function gadd1() {
    gscore += 1
    document.getElementById("guestscore").textContent = gscore

}

function gadd2() {
    gscore += 2
    document.getElementById("guestscore").textContent = gscore

}

function gadd3() {
    gscore += 3
    document.getElementById("guestscore").textContent = gscore

}