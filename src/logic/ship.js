import '../styles/gameBoard.style.css';

const Ship = (board, shipID, length) => {
  let hitCounter = 0;

  function checkShipElementExists() {
    if (document.getElementsByClassName(shipID)[0] !== null) {
      return document.getElementsByClassName(shipID)[0];
    }
    return 'ship element doesnt exist';
  }

  function shipPlacementIsValid() {

  }

  function hit() {
    hitCounter += 1;
    return hitCounter;
  }
  function isSunk() {
    return hitCounter >= length;
  }
  return {
    hit, isSunk, hitCounter,
  };
};

export { Ship };
