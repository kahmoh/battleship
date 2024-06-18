import '../styles/gameBoard.style.css';

function GameBoard() {
  function createBoard() {
    const container = document.createElement('div');
    container.id = ('game-board-backdrop');
    for (let i = 0; i < 10; i += 1) {
      const gameBoardRow = Object.assign(document.createElement('div'), {
        id: i,
        className: 'game-board-row',
      });
      container.appendChild(gameBoardRow);
      for (let j = 0; j < 10; j += 1) {
        const gameBoardTile = Object.assign(document.createElement('div'), {
          id: `${i}${j}`,
          className: 'game-board-tile',
        });
        gameBoardRow.append(gameBoardTile);
      }
    }
    document.body.appendChild(container);
  }

  function coordinateIsValid(coordinate) {
    try {
      if (coordinate > 0 && coordinate < 100) {
        return true;
      }
    } catch (error) {
      console.log(coordinate);
      return false;
    }
  }

  function shipTiles(startingCoordinate, ship) {
    const coordinates = [];
    for (let i = 1; i < ship.length; i += 1) {
      const coordinate = (startingCoordinate + i);
      if (coordinateIsValid(coordinate)) {
        coordinates.push(coordinate);
      }
    }
  }

  function tileIsEmpty() {

  }

  function placeShip(startingCoordinate, shipID) {
    const shipElement = document.getElementById(shipID);
    const startingTile = document.getElementById(startingCoordinate);
    shipElement.style.position = 'fixed';
    shipElement.style.top = `${startingTile.getBoundingClientRect().y - 10}px`;
    shipElement.style.left = `${startingTile.getBoundingClientRect().x - 10}px`;
  }

  return { createBoard, placeShip, coordinateIsValid };
}

export { GameBoard };
