const bcrypt = require('bcrypt') //gör om lösenet
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'my-secret-key'

//hash password to save in database
module.exports.hashPassword = (password) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

//compare hashed password from db with password required
module.exports.comparePassword = (password, hash) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}

//create and sign json web token
module.exports.getJWTToken = (account) => {
    const userData = { userId: account.id, username: account.username }
    const accessToken = jwt.sign(userData, JWT_SECRET)
    return acessToken
}

//verify signature of json webtoken
module.exports.verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

//get data from json web token
module.exports.decodeJWT = (token) => {
return jwt.decode(token, JWT_SECRET)
}

