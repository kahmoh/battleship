import '../styles/gameBoard.style.css'

const GameBoard = function () {
    const createBoard = function () {
        const container = document.createElement("div");
        container.classList.add('game-board-backdrop');
        for(let i = 0; i < 10; i++) {
            const gameBoardRow = Object.assign(document.createElement('div'),{
                id: i,
                className: 'game-board-row',
            })
            container.appendChild(gameBoardRow)
            for (let j = 0; j < 10; j++) {
                const gameBoardTile = Object.assign(document.createElement('div'), {
                    id: j,
                    className: 'game-board-tile'
                })
                gameBoardRow.append(gameBoardTile)
            }
        }
        document.body.appendChild(container);
    }
    return {createBoard}
}

export {GameBoard}
