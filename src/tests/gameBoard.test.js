import {GameBoard} from "../logic/gameBoard.js";
import {Game} from "../logic/game.js";

test('shipTiles() returns correct tiles', () => {
    const testGame = Game()
    const testGameBoard = GameBoard()
    testGame.renderShips()
    testGameBoard.createBoard()
    expect(testGameBoard.shipTiles('11','five')).toStrictEqual(["11","12",'13',"14","15","01","02","03","04","05","21","22","23","24","25"])
})
