import '../styles/gameBoard.style.css'

const Ship = (coordinates,board,shipID) => {
    let hitCounter = 0

    console.log(document.getElementsByClassName(shipID)[0])


    const checkShipElementExists = function () {
        if (document.getElementsByClassName(shipID)[0] !== null) {
            return document.getElementsByClassName(shipID)[0]
        }
    }

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

    const placeShip = function () {
        const shipElement = checkShipElementExists()
        const startingTile = document.getElementById(coordinates[0])
        shipElement.style.position = 'fixed'
        shipElement.style.top = startingTile.getBoundingClientRect().y - 10 + 'px'
        shipElement.style.left = startingTile.getBoundingClientRect().x - 10 + 'px'
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
    return {hit, isSunk, coordinates, hitCounter,placeShip};
}

export {Ship};

