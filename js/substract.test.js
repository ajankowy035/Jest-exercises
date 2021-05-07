const { expect } = require('@jest/globals');

const substract = require('./substract');

test('properly substrating two numbers', () => {
    expect(substract(3,1)).toBe(2)
})