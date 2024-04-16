import {Ship} from '../logic/ship';

test('hit() returns 1', () => {
    const testShip = Ship();
    expect(testShip.hit()).toBe(1);
});

test('hit() returns 2', () => {
    const testShip = Ship();
    testShip.hit();
    expect(testShip.hit()).toBe(2);
})

test('hit() returns 3', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    expect(testShip.hit()).toBe(3);
})

test('hit() returns 4', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    testShip.hit();
    expect(testShip.hit()).toBe(4);
})

test('hit() returns 5', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.hit()).toBe(5);
})

test('isSunk() returns true', () => {
    const testShip = Ship([1,2,3,4,5]);
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true);
})

test('isSunk() returns false', () => {
    const testShip = Ship([1,2,3,4,5]);
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(false);
})
