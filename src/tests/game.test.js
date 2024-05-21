import {Game} from "../logic/game.js";

test('should return ship element', () => {
    const testGame = Game()
    testGame.renderShips()
    const element = document.getElementsByClassName("5")
    expect(element).toBeTruthy()
})