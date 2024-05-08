import {GameBoard} from "./logic/gameBoard.js";
import {Ship} from "./logic/ship.js";

const thisBoard = GameBoard()

thisBoard.createBoard()

const thisShip = Ship(["10","11","12","13"])
