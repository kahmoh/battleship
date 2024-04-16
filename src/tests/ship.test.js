import {Ship} from '../logic/ship';

test('returns 1', () => {
    const testShip = Ship();
    expect(testShip.hit()).toBe(1);
});

test('returns 2', () => {
    const testShip = Ship();
    testShip.hit();
    expect(testShip.hit()).toBe(2);
})

test('returns 3', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    expect(testShip.hit()).toBe(3);
})

test('returns 4', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    testShip.hit();
    expect(testShip.hit()).toBe(4);
})

test('returns 5', () => {
    const testShip = Ship();
    testShip.hit()
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.hit()).toBe(5);
})
