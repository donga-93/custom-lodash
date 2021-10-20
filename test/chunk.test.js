const chunk = require('../src/chunk');

test('test', () => {
    expect(chunk([], 2)).toStrictEqual([]);
});

test('test', () => {
    expect(chunk([], 2)).toStrictEqual([]);
});


test('test', () => {
    expect(chunk(['a', 'x', 'c', 'd'], 2)).toStrictEqual([['a', 'x'], ['c', 'd']]);
});