import '../styles/gameBoard.style.css'

const Ship = (coordinates) => {
    let hitCounter = 0

    for (let i = 0; i < coordinates.length; i++){
        const tile = document.getElementById(coordinates[i])
        tile.classList.add('game-board-tile-with-ship')
    }

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

