import {Game} from "./game.js";
import {GameBoard} from "./gameBoard.js";

const testEnvironment = function () {
    const thisGameBoard = GameBoard()

    const thisGame = Game()

    thisGameBoard.createBoard()

    thisGame.renderShips()

    document.querySelector(".five").addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.className)
    })

    for (let i = 0; i < 100; i++) {
        let id = i
        if (i < 10) {
            id = `0${i}`
        }
        document.getElementById(String(id)).addEventListener('dragover', (event) => event.preventDefault())
        document.getElementById(String(id)).addEventListener('drop', (event) => {
            event.preventDefault()
            const data = event.dataTransfer.getData('text')
            const element = document.getElementsByClassName(data)[0]
        })
    }
}
export {testEnvironment}
