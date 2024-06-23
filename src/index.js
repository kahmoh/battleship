import GameBoard from './logic/gameBoard.js';
import Player from './logic/player.js';

const thisGameBoard = GameBoard();
const thisPlayer = Player();

thisGameBoard.createBoard();
thisPlayer.renderShips();

thisGameBoard.placeShip('65', 'three', 3);
