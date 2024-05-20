import '../styles/gameBoard.style.css'

const Ship = (coordinates,board) => {
    let hitCounter = 0

    const coordinatesAreValid = function () {
        if (coordinates.constructor === Array && coordinates.length) {
            return true
        }
    }

    const boardExists = function () {
        if (board !== undefined) {
            return true
        }
    }

    const renderShip = function () {
        if (boardExists() && coordinatesAreValid()) {
            for (let i = 0; i < coordinates.length; i++){
                const tile = document.getElementById(coordinates[i])
                tile.classList.add('game-board-tile-with-ship')
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

