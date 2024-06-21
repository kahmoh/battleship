import '../styles/gameBoard.style.css';

const Ship = (length, board, shipID) => {
  let hitCounter = 0;

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
