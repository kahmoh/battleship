import '../styles/game.style.css';
import {Player} from "./player.js";

function Game() {

  function playGame() {
    const player1 = Player('Player 1')
    player1.playerBoard.createBoard()
    player1.renderShips()
    player1.randomShipPositions()
  }

  return { playGame };
}

export { Game };
