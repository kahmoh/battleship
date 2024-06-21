import {GameBoard} from "../logic/gameBoard.js";

test('returns 21', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateRow("11",1)).toBe("21")
})

test('returns 01', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateRow("11",-1)).toBe("01")
})

test('returns 12', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateColumn("11",1)).toBe("12")
})

test('returns 10', () => {
    const testGameBoard = GameBoard()
    expect(testGameBoard.coordinateColumn("11",-1)).toBe("10")
})
