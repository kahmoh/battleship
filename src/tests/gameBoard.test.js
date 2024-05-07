import {GameBoard} from "../logic/gameBoard.js";

test('getCoordinates(14) returns {x:1, y:4}', () => {
    const testBoard = GameBoard()
    expect(testBoard.getCoordinates(14)).toStrictEqual({x:1, y:4})
})

test('getCoordinates(99) returns {x:9, y:9}', () => {
    const testBoard = GameBoard()
    expect(testBoard.getCoordinates(99)).toStrictEqual({x:9, y:9})
})

test('getCoordinates(26) returns {x:2, y:6}', () => {
    const testBoard = GameBoard()
    expect(testBoard.getCoordinates(26)).toStrictEqual({x:2, y:6})
})

test('getCoordinates(71) returns {x:7, y:1}', () => {
    const testBoard = GameBoard()
    expect(testBoard.getCoordinates(71)).toStrictEqual({x:7, y:1})
})
