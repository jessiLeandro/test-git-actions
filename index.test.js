const { sum, multiply } = require('.')

describe('Test operation', () => {
    it('should be able sum two numbers', () => {
      expect(sum(1,1)).toBe(2)
    }) 

    it('should be able multiply two numbers', () => {
      expect(multiply(1,1)).toBe(1)
    })
});
