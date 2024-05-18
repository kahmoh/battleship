import '../styles/gameBoard.style.css'

const Ship = (coordinates,board) => {
    let hitCounter = 0

    const renderShip = function () {
        if (board !== undefined) {
            if (coordinates.constructor === Array && coordinates.length) {
                for (let i = 0; i < coordinates.length; i++){
                    const tile = document.getElementById(coordinates[i])
                    tile.classList.add('game-board-tile-with-ship')
                }
            }
        }
    }

    renderShip()

    const hit = function () {
        return hitCounter += 1;
    }
    const isSunk = function () {
        if (hitCounter >= coordinates.length) {
            return true
        }else {
            return false
        }
    }
    return {hit, isSunk, coordinates, hitCounter};
}

export {Ship};

