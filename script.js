const x_class = "x"
const circle_class = "circle"
const cellElements = document.querySelectorAll("[data-cell]")
let circleTurn

cellElements.forEach (cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class
    placeMark(cell, currentClass)
    swapTurns()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}