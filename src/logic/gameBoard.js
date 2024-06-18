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
  function getCoordinates(tile) {
    const unsplitCoordinates = String(tile);
    const x = unsplitCoordinates.slice(0, unsplitCoordinates.length / 2);
    const y = unsplitCoordinates.slice(unsplitCoordinates.length / 2, unsplitCoordinates.length);
    return {
      x: Number(x),
      y: Number(y),
    };
  }
  return { createBoard, getCoordinates };
}

export { GameBoard };
