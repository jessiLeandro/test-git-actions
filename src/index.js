const database = require('./database/models')

const UserModel = database.users

const sum = (a, b) => a + b

const multiply = (a, b) => a * b

const createUser = async () => {

  const user = await UserModel.create({
    name: "jessi"
  })

  console.log(JSON.stringify(user))

  return user  
}

module.exports = {
  sum,
  multiply,
  createUser
};
