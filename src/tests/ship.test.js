const Ship = require('../logic/ship');

test('returns hit', () => {
    expect(Ship.hit()).toBe('hit');
});
