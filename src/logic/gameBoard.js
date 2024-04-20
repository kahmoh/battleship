import '../styles/gameBoard.style.css'

const GameBoard = function () {
    const createBoard = function () {
        const container = document.createElement("div");
        container.classList.add('game-board-backdrop');
        document.body.appendChild(container);
    }

    return {createBoard}
}

export {GameBoard}
