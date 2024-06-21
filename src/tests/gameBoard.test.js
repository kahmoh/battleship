import {GameBoard} from "../logic/gameBoard.js";

test('returns 21', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateRow("11",1)).toBe("21")
})

test('returns 01', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateRow("11",-1)).toBe("01")
})
