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
    if (document.getElementById(coordinate)){
      return true
    }else {
      return `${coordinate} is not a tile`
    }
  }

  function shipTiles(startingCoordinate, ship, shipOrientation) {
    const coordinates = [];
    for (let i = 0; i< 2; i++ ){
      coordinates.push(startingCoordinate)
      for (let j = 1; j < ship; j += 1) {
        const coordinate = (Number(startingCoordinate) + j);
        if (coordinateIsValid(coordinate) === true) {
          coordinates.push(String(coordinate));
        }else{
          return `invalid placement`
        }
      }
      let startingCoordinateArray = startingCoordinate.split('')
      if (i === 0) {
        startingCoordinateArray[0] = Number(startingCoordinateArray[0]) + 1
      }else if (i === 1) {
        startingCoordinateArray[0] = Number(startingCoordinateArray[0]) - 2
      }
      startingCoordinateArray[0] = startingCoordinateArray[0].toString()
      startingCoordinate = startingCoordinateArray.join('')
    }
    console.log(coordinates)
    return coordinates
  }

  function tileIsEmpty(tile) {
    if (document.getElementById(tile).className !== 'game-board-tile-with-ship'){
      return true
    }else{
      return `${tile} is busy`
    }
  }

  function placeShip(startingCoordinate, shipID) {
    const shipElement = document.getElementsByClassName(shipID)[0];
    const startingTile = document.getElementById(startingCoordinate);
    const shipTilesArray = shipTiles(startingCoordinate,4)
    for (let i = 0; i < shipTilesArray.length; i += 1) {
      const targetTile = document.getElementById(shipTilesArray[i])
      targetTile.classList.add('game-board-tile-with-ship')
    }
    shipElement.style.position = 'fixed';
    shipElement.style.top = `${startingTile.getBoundingClientRect().y - 10}px`;
    shipElement.style.left = `${startingTile.getBoundingClientRect().x - 10}px`;
  }

  function defaultShipPlacement() {

  }

  return { createBoard, placeShip, coordinateIsValid, shipTiles };
}

export { GameBoard };
