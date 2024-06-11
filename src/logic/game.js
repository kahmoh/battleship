import '../styles/game.style.css'

const Game = function () {
    const shipElement = function (shipSize) {
        return Object.assign(document.createElement('div'), {
            className: String(shipSize),
        })
    }

    const convertNumbersToWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five'
    }

    const renderShips = function () {
        for (let i = 2; i < 6; i++) {
            const shipClassName = convertNumbersToWords[i]
            if (i !== 2) {
                document.body.append(shipElement(shipClassName))
            }else {
                document.body.append(shipElement(shipClassName))
                document.body.append(shipElement(shipClassName))
            }
        }
    }

    const playGame = function () {

    }

    return {renderShips}
}

export {Game}