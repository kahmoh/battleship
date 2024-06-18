import '../styles/gameBoard.style.css';

const Ship = (coordinates, board, shipID) => {
  let hitCounter = 0;

  function checkShipElementExists() {
    if (document.getElementsByClassName(shipID)[0] !== null) {
      return document.getElementsByClassName(shipID)[0];
    }
    return 'ship element doesnt exist';
  }

  function placeShip() {
    const shipElement = checkShipElementExists();
    const startingTile = document.getElementById(coordinates[0]);
    shipElement.style.position = 'fixed';
    shipElement.style.top = `${startingTile.getBoundingClientRect().y - 10}px`;
    shipElement.style.left = `${startingTile.getBoundingClientRect().x - 10}px`;
  }

  function hit() {
    hitCounter += 1;
    return hitCounter;
  }
  function isSunk() {
    return hitCounter >= coordinates.length;
  }
  return {
    hit, isSunk, coordinates, hitCounter, placeShip,
  };
};

export { Ship };
