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
    if (document.getElementById(coordinate)) {
      return true;
    }
    return `${coordinate} is not a tile`;
  }

  function coordinateRow(coordinate, changeValue) {
    const coordinateArray = coordinate.split('');
    coordinateArray[0] = Number(coordinateArray[0]) + changeValue;
    return coordinateArray.join('');
  }

  function coordinateColumn(coordinate, changeValue) {
    const coordinateArray = coordinate.split('');
    coordinateArray[1] = Number(coordinateArray[1]) + changeValue;
    return coordinateArray.join('');
  }

  function horizontalShipTiles(startingCoordinate, shipLength) {
    const coordinates = [];
    startingCoordinate = coordinateRow(startingCoordinate, -1);
    startingCoordinate = coordinateColumn(startingCoordinate, -1);
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < shipLength + 2; j += 1) {
        coordinates.push(coordinateColumn(startingCoordinate, j));
      }
      startingCoordinate = coordinateRow(startingCoordinate, 1);
    }
    return coordinates;
  }

  function verticalShipTiles(startingCoordinate, shipLength) {
    const coordinates = [];
    startingCoordinate = coordinateRow(startingCoordinate, -1);
    startingCoordinate = coordinateColumn(startingCoordinate, -1);
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < shipLength + 2; j += 1) {
        coordinates.push(coordinateRow(startingCoordinate, j));
      }
      startingCoordinate = coordinateColumn(startingCoordinate, 1);
    }
    return coordinates;
  }

  function tileHasShip(tile) {
    const tileElement = document.getElementById(tile);
    return tileElement.classList.contains('game-board-tile-with-ship');
  }

  function tileSurroundsShip(tile) {
    const tileElement = document.getElementById(tile);
    return tileElement.classList.contains('surrounding-ship-tile');
  }

  function rotateShip(shipID) {
    const shipElement = document.getElementsByClassName(shipID)[0];
    const temporaryShipHeight = getComputedStyle(shipElement).height;
    shipElement.style.height = getComputedStyle(shipElement).width;
    shipElement.style.width = temporaryShipHeight;
  }

  function notSurroundingShipTile(startingTile, length, tileArray, index) {
    const numberTile = Number(startingTile);
    if (tileArray[index] >= numberTile && tileArray[index] < numberTile + length) {
      return true;
    }
    return false;
  }

  function placeShip(startingCoordinate, shipID, shipLength) {
    const shipElement = document.getElementsByClassName(shipID)[0];
    shipElement.style.position = 'fixed';
    const startingTile = document.getElementById(startingCoordinate);
    const shipTilesArray = horizontalShipTiles(startingCoordinate, shipLength);
    for (let i = 0; i < shipTilesArray.length; i += 1) {
      const targetTile = document.getElementById(shipTilesArray[i]);
      if (tileHasShip(targetTile.id)) {
        return;
      }
      if (notSurroundingShipTile(startingCoordinate, shipLength, shipTilesArray, i)) {
        if (tileSurroundsShip(targetTile.id)) {
          return;
        }
      }
      if (notSurroundingShipTile(startingCoordinate, shipLength, shipTilesArray, i)) {
        targetTile.classList.add('game-board-tile-with-ship');
      } else {
        targetTile.classList.add('surrounding-ship-tile');
      }
    }
    shipElement.style.top = `${startingTile.getBoundingClientRect().y - 10}px`;
    shipElement.style.left = `${startingTile.getBoundingClientRect().x - 10}px`;
  }

  return {
    createBoard,
    placeShip,
    coordinateIsValid,
    coordinateRow,
    coordinateColumn,
    horizontalShipTiles,
    verticalShipTiles,
  };
}

export default GameBoard;
