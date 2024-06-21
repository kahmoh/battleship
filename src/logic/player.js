import { GameBoard } from './gameBoard.js';
import {Ship} from "./ship.js";

const Player = (name) => {
  const playerBoard = GameBoard();

  const ships = []

  function shipElement(shipSize) {
    return Object.assign(document.createElement('div'), {
      className: String(shipSize),
    });
  }

  const convertNumbersToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
  };

  function renderShips() {
    for (let i = 2; i < 6; i += 1) {
      const shipClassName = convertNumbersToWords[i];
      ships.push(document.getElementsByClassName(shipClassName))
      if (i !== 2) {
        document.body.append(shipElement(shipClassName));
      } else {
        document.body.append(shipElement(shipClassName));
        document.body.append(shipElement(shipClassName));
      }
    }
  }

  return { name, playerBoard, renderShips };
};

export { Player };
