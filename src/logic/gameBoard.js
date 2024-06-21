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

  function coordinateRow(coordinate,changeValue) {
    let coordinateArray = coordinate.split('')
    coordinateArray[0] = Number(coordinateArray[0]) + changeValue
    return coordinateArray.join('')
  }

  function coordinateColumn(coordinate,changeValue) {
    let coordinateArray = coordinate.split('')
    coordinateArray[1] = Number(coordinateArray[1]) + changeValue
    return coordinateArray.join('')
  }

  function horizontalShipTiles(startingCoordinate, shipLength) {
    const coordinates = [];
    startingCoordinate = coordinateRow(startingCoordinate,-1)
    startingCoordinate = coordinateColumn(startingCoordinate, -1)
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < shipLength+2; j++){
          coordinates.push(coordinateColumn(startingCoordinate,j))
        }
      startingCoordinate = coordinateRow(startingCoordinate,1)
    }
    return coordinates
  }

  function verticalShipTiles(startingCoordinate,shipLength) {
    const coordinates = [];
    startingCoordinate = coordinateRow(startingCoordinate,-1)
    startingCoordinate = coordinateColumn(startingCoordinate, -1)
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < shipLength+2; j++){
        coordinates.push(coordinateRow(startingCoordinate,j))
      }
      startingCoordinate = coordinateColumn(startingCoordinate,1)
    }
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
    const shipTilesArray = horizontalShipTiles(startingCoordinate,4)
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

  return { createBoard, placeShip, coordinateIsValid, coordinateRow, coordinateColumn,horizontalShipTiles, verticalShipTiles };
}

export { GameBoard };
