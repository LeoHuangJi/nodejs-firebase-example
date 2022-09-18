const jwt = require('jsonwebtoken')
const db = require('../config/db');

require('dotenv').config();

const auth = async (req, res, next) => {
  let authorization = req.header('Authorization');
  console.log(authorization)
  if (authorization == null) {
      res.status(401).send({ error: 'JWT token not found' })
    }


  try {
   
    const token = authorization.replace('Bearer ', '')
    const data = jwt.verify(token, process.env.SECRET_KEY, { ignoreExpiration: false })

    //console.log(data.user)
    const { username, id } = data.user;

    let user = await db.User.findOne({ where: { username: username } })
    if (!user) {
      throw new Error()
    }
    // req.user = user.username
    //req.token = token
    next()
  } catch (error) {
    res.status(401).send({ error: 'invalid or expired token' +error.message})
  }

}
module.exports = auth