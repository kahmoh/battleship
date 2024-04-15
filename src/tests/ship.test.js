import {Ship} from '../logic/ship';

test('returns 1', () => {
    const testShip = Ship();
    expect(testShip.hit()).toBe(1);
});
