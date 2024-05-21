import '../styles/game.style.css'

const Game = function () {
    const shipElement = function (shipSize) {
        return Object.assign(document.createElement('div'), {
            className: String(shipSize),
            draggable: 'true',
        })
    }

    const renderShips = function () {
        for (let i = 0; i < 6; i++) {
            if (i !== 2) {
                document.body.append(shipElement(i))
            }else {
                document.body.append(shipElement(i))
                document.body.append(shipElement(i))
            }
        }
    }

    const playGame = function () {

    }

    return {renderShips}
}

export {Game}