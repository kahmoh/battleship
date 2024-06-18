import { GameBoard } from './gameBoard';

const Player = (name) => {
  const playerBoard = GameBoard();

  return { name, playerBoard };
};

export { Player };
