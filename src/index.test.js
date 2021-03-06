const { sum, multiply, createUser } = require('.')

describe('Test operation', () => {
    it('should be able sum two numbers', () => {
      expect(sum(1,1)).toBe(2)
    }) 

    it('should not be able sum a number and undefined', () => {
      expect(sum(1)).not.toBe(2)
    }) 

    it('should be able multiply two numbers', () => {
      expect(multiply(1,1)).toBe(1)
    })

     it('should not be able multiply a number and undefined', () => {
      expect(sum(1)).not.toBe(2)
    }) 

});

describe('connection db', () => {
  
  it('craate user',  async () => {

    const user = await createUser()

    expect(user).toHaveProperty('name', 'jessi')
  });
  

});
