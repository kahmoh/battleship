import GameBoard from '../logic/gameBoard.js';

test('returns 21', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.coordinateRow('11', 1)).toBe('21');
});

test('returns 01', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.coordinateRow('11', -1)).toBe('01');
});

test('returns 12', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.coordinateColumn('11', 1)).toBe('12');
});

test('returns 10', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.coordinateColumn('11', -1)).toBe('10');
});

test('returns correct values in array', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.horizontalShipTiles('65', 3)).toMatchObject(['54', '55', '56', '57', '58', '64', '65', '66', '67', '68', '74', '75', '76', '77', '78']);
});

test('returns correct values in array', () => {
  const testGameBoard = GameBoard();
  expect(testGameBoard.verticalShipTiles('65', 3)).toMatchObject(['54', '64', '74', '84', '94', '55', '65', '75', '85', '95', '56', '66', '76', '86', '96']);
});
