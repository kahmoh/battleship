import '../styles/gameBoard.style.css'

const GameBoard = function () {
    const gameBoardArray = []

    for (let i = 0; i < 10 ;i++){
        let row = []
        for (let j = 0; j < 10; j++){
            row.push(0)
        }
        gameBoardArray.push(row)
    }

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
                    id: `${i}${j}`,
                    className: 'game-board-tile',
                })
                gameBoardRow.append(gameBoardTile)
            }
        }
        document.body.appendChild(container);
    }
    const getCoordinates = function (tile) {
        const unsplitCoordinates = String(tile)
        const x = unsplitCoordinates.slice(0, unsplitCoordinates.length / 2)
        const y = unsplitCoordinates.slice(unsplitCoordinates.length / 2, unsplitCoordinates.length)
        return {
            x: Number(x),
            y: Number(y)
        }
    }
    return {createBoard,gameBoardArray,getCoordinates}
}

export {GameBoard}
