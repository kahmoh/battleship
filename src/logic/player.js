import {GameBoard} from "./gameBoard.js";
import {Ship} from "./ship.js";

const Player = (name) => {
    const playerBoard = GameBoard()

    return {name,playerBoard}
}

export {Player}