let scoreX = 0,
    scoreO = 0;

const x_class = 'x'
const circle_class = 'circle'
const board = document.getElementById("board")
const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById("winningMessage")
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const restartButton = document.getElementById('restartButton')


let circleTurn;
startGame();

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {
            once: true
        })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {
        once: true
    })
})


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class;
    placeMark(cell, currentClass)
    console.log(checkWin(currentClass))
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    if (circleTurn) {
        board.classList.add(circle_class)
    } else {
        board.classList.add(x_class)
    }

}

function checkWin(currentClass) {
    return winning_combinations.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!"
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's": "X's"} Wins!`
        circleTurn ? scoreO += 1 : scoreX += 1;

    }

    document.getElementById("scoreX").innerText = scoreX
    document.getElementById("scoreO").innerText = scoreO

    winningMessageElement.classList.add('show');
}